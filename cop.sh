# copy_files_and_folders.sh

#!/bin/bash

# Script: Advanced File & Folder Copier & Concatenator
# Auteur: [Nom Original/Utilisateur] (révisé et amélioré par une IA)
# Date de révision: 2024-05-21
# Version: 4.2 (Intégration de 'gum filter' et 'gum log' suite à l'étude de la doc)
# Description:
# Ce script utilise intensivement 'gum' pour offrir une expérience utilisateur riche.
# Il permet de sélectionner des fichiers et des dossiers, puis utilise 'gum filter' pour
# permettre une sélection fine et rapide des fichiers via une recherche floue.
# Les messages de statut sont gérés par 'gum log' pour une sortie claire et sémantique.
#
# Fonctionnalités clés :
#   - NOUVEAU: Utilisation de 'gum filter' pour une sélection de fichiers puissante dans les dossiers.
#   - NOUVEAU: Utilisation de 'gum log' pour des messages de statut sémantiques (info, warn, error).
#   - Sélection interactive de fichiers/dossiers, parcours récursif avec exclusions.
#   - Détection de doublons, choix de format, copie presse-papiers et statistiques.
# Dépendances:
#   - gum (https://github.com/charmbracelet/gum)
#   - Utilitaires de presse-papiers: xclip (Linux), pbcopy (macOS), clip.exe (WSL)
# Usage: ./copy_files_and_folders.sh [fichier1 dossier1 fichier2 ...]

# --- Configuration ---
BLUE="#87CEEB"
GREEN="#98FB98"
PURPLE="#DDA0DD"

# --- Vérifications initiales ---

if ! command -v gum >/dev/null 2>&1; then
    echo "❌ Erreur: Gum n'est pas installé." >&2
    echo "Installez-le avec: brew install gum (ou voir https://github.com/charmbracelet/gum )" >&2
    exit 1
fi

CLIPBOARD_CMD=""
if command -v xclip >/dev/null 2>&1; then
    CLIPBOARD_CMD="xclip -selection clipboard"
elif command -v pbcopy >/dev/null 2>&1; then
    CLIPBOARD_CMD="pbcopy"
elif command -v clip.exe >/dev/null 2>&1; then
    CLIPBOARD_CMD="clip.exe"
else
    gum log --level error "Aucun utilitaire de presse-papiers trouvé." >&2
    exit 1
fi

# NOUVEAU: Fonctions de log basées sur 'gum log' pour une sortie sémantique.
# Cela centralise la manière dont nous affichons les messages.
log_info() { gum log --level info -- "$@" >&2; }
log_warn() { gum log --level warn -- "$@" >&2; }
log_error() { gum log --level error -- "$@" >&2; }
log_success() { gum log --level info -- "✅ $@" >&2; } # Utilise l'icône de base d'info mais avec un emoji.

# --- Fonctions Utilitaires ---

show_header() {
    # On garde gum style ici car c'est un élément purement visuel et non un log d'événement.
    gum style --foreground "$PURPLE" --border double --align center --width 60 --margin "1 2" --padding "1 2" \
        "🗂️  Advanced Content Copier ✨" >&2
}

add_unique_item() {
    local item_to_add="$1"; local -n items_array_ref="$2"
    local abs_path_to_add; abs_path_to_add=$(realpath "$item_to_add" 2>/dev/null || echo "$item_to_add")
    for existing_item in "${items_array_ref[@]}"; do
        local existing_abs_path; existing_abs_path=$(realpath "$existing_item" 2>/dev/null || echo "$existing_item")
        if [ "$abs_path_to_add" = "$existing_abs_path" ]; then
            log_warn "Élément déjà sélectionné: $(basename "$item_to_add")"
            return 1
        fi
    done
    items_array_ref+=("$item_to_add")
    return 0
}

process_one_file() {
    local file_path="$1"; local temp_file="$2"; local format_type="$3"
    if [ ! -f "$file_path" ] || [ ! -r "$file_path" ]; then
        log_warn "Fichier ignoré (non trouvé ou illisible): $file_path"
        return
    fi
    local filename; filename=$(basename "$file_path")
    case $format_type in
        1) # Markdown
            local extension="${filename##*.}"; if [[ "$extension" == "$filename" ]] || [[ -z "$extension" ]]; then extension="text"; fi
            echo "\`\`\`${extension}" >> "$temp_file"; echo "// Fichier: $file_path" >> "$temp_file"; cat "$file_path" >> "$temp_file"
            [[ $(tail -c1 "$file_path") ]] && echo >> "$temp_file"; echo "\`\`\`" >> "$temp_file"; echo "" >> "$temp_file"
            ;;
        0 | *) # Simple
            echo "=== FICHIER: $file_path ===" >> "$temp_file"; echo "" >> "$temp_file"; cat "$file_path" >> "$temp_file"
            echo "" >> "$temp_file"; echo "----------------------------------------" >> "$temp_file"; echo "" >> "$temp_file"
            ;;
    esac
}

select_items() {
    local items=()
    if [ $# -gt 0 ]; then
        log_info "Éléments fournis en arguments:"
        local initial_items_from_args=()
        for arg in "$@"; do
            if [ -f "$arg" ] || [ -d "$arg" ]; then
                if add_unique_item "$arg" initial_items_from_args; then
                    local type_label=$([ -d "$arg" ] && echo "Dossier" || echo "Fichier")
                    log_success "Argument valide: $arg ($type_label)"
                fi
            else
                log_error "Argument non trouvé: $arg"
            fi
        done
        if [ ${#initial_items_from_args[@]} -gt 0 ]; then
            if gum confirm "Utiliser ces ${#initial_items_from_args[@]} élément(s) valide(s) ?"; then
                items=("${initial_items_from_args[@]}"); printf '%s\n' "${items[@]}"; return
            else
                 log_warn "Les éléments des arguments sont ignorés."
            fi
        fi
    fi

    log_info "Lancement de la sélection interactive..."
    while true; do
        local num_items=${#items[@]}
        local header_text="Éléments: $num_items. Action ?"
        [ "$num_items" -eq 0 ] && header_text="Aucun élément. Que faire ?"
        local METHOD; METHOD=$(gum choose --header "$header_text" \
            "Ajouter un fichier" "Ajouter un dossier" "Terminer la sélection ($num_items)")
        if [ -z "$METHOD" ]; then if gum confirm "Annuler et terminer ?"; then break; else continue; fi; fi
        case "$METHOD" in
            "Ajouter un fichier")
                local selected_path; selected_path=$(gum file --file .)
                if [ -n "$selected_path" ] && [ -f "$selected_path" ]; then
                    if add_unique_item "$selected_path" items; then log_success "Fichier ajouté: $(basename "$selected_path")"; fi
                fi
                ;;
            "Ajouter un dossier")
                local selected_path; selected_path=$(gum file --directory .)
                if [ -n "$selected_path" ] && [ -d "$selected_path" ]; then
                    if add_unique_item "$selected_path" items; then log_success "Dossier ajouté: $(basename "$selected_path")"; fi
                fi
                ;;
            "Terminer la sélection ($num_items)")
                if [ ${#items[@]} -eq 0 ]; then ! gum confirm "Terminer sans sélection ?" && continue; fi
                break
                ;;
        esac
    done
    if [ ${#items[@]} -gt 0 ]; then printf '%s\n' "${items[@]}"; fi
}

format_content() {
    gum choose --header "Choisissez le format de sortie:" \
        "Simple (avec séparateurs)" "Markdown (avec blocs de code)" |
    grep -q "Markdown" && return 1 || return 0
}

# --- Fonction Principale ---
main() {
    show_header
    local selected_items=(); mapfile -t selected_items < <(select_items "$@")
    if [ ${#selected_items[@]} -eq 0 ]; then log_info "Aucun élément sélectionné. Arrêt du script."; exit 0; fi
    
    local files_to_process=()
    for item_path in "${selected_items[@]}"; do
        if [ -d "$item_path" ]; then
            log_info "Analyse du dossier: $item_path..."
            local files_in_dir=(); mapfile -t files_in_dir < <(find "$item_path" -type f \
                -not -path '*/.git/*' -not -path '*/node_modules/*' -not -path '*/dist/*' \
                -not -path '*/build/*' -not -path '*/.next/*' -not -path '*/.astro/*' \
                -not -name '.DS_Store' -not -name '*.lock' -not -name '*.log' | sort)
            
            if [ ${#files_in_dir[@]} -gt 0 ]; then
                # MODIFICATION: Remplacement de 'choose' par 'filter' pour une sélection plus puissante.
                # L'utilisateur peut maintenant taper pour rechercher et filtrer la liste.
                gum style --bold --foreground "$PURPLE" "Filtrez les fichiers à inclure pour '$(basename "$item_path")'" >&2
                gum style --faint "(Commencez à taper pour filtrer, <Tab> pour sélectionner, <Entrée> pour valider)" >&2
                
                local confirmed_files=()
                mapfile -t confirmed_files < <(printf '%s\n' "${files_in_dir[@]}" | gum filter --no-limit --placeholder="Rechercher des fichiers..." --height=20)
                
                if [ ${#confirmed_files[@]} -gt 0 ]; then
                    files_to_process+=("${confirmed_files[@]}")
                    log_info "${#confirmed_files[@]} fichier(s) confirmé(s) pour le dossier '$item_path'."
                else
                    log_warn "Aucun fichier sélectionné pour le dossier '$item_path'."
                fi
            else
                log_warn "Aucun fichier pertinent trouvé dans '$item_path'."
            fi
        elif [ -f "$item_path" ]; then
            files_to_process+=("$item_path")
        else
             log_error "Élément '$item_path' non trouvé. Ignoré."
        fi
    done

    if [ ${#files_to_process[@]} -eq 0 ]; then log_error "Aucun fichier final à traiter. Arrêt."; exit 1; fi
    
    format_content
    local FORMAT_TYPE=$?
    local TEMP_FILE; TEMP_FILE=$(mktemp); trap 'rm -f "$TEMP_FILE"' EXIT
    gum spin --spinner dot --title "Préparation du contenu..." -- sleep 0.1

    for file_path in "${files_to_process[@]}"; do
        process_one_file "$file_path" "$TEMP_FILE" "$FORMAT_TYPE"
    done
    local FILES_PROCESSED=${#files_to_process[@]}

    if gum spin --spinner globe --title "Copie dans le presse-papiers..." -- bash -c "cat '$TEMP_FILE' | $CLIPBOARD_CMD"; then
        log_success "Contenu de $FILES_PROCESSED fichier(s) copié avec succès !"
        if gum confirm --default=false "Voir le contenu copié ?"; then gum pager < "$TEMP_FILE"; fi
        
        local TOTAL_LINES CHAR_COUNT WORD_COUNT
        TOTAL_LINES=$(wc -l < "$TEMP_FILE" | tr -d ' '); CHAR_COUNT=$(wc -c < "$TEMP_FILE" | tr -d ' '); WORD_COUNT=$(wc -w < "$TEMP_FILE" | tr -d ' ')

        # On garde 'gum style' et 'join' ici pour la mise en page personnalisée du bloc final.
        gum join --vertical --align left \
            "$(gum style --foreground "$PURPLE" --bold "📊 STATISTIQUES")" \
            "$(gum style --foreground "$BLUE" "Fichiers traités: $FILES_PROCESSED")" \
            "$(gum style --foreground "$BLUE" "Lignes totales: $TOTAL_LINES")" \
            "$(gum style --foreground "$BLUE" "Mots totaux: $WORD_COUNT")" \
            "$(gum style --foreground "$BLUE" "Caractères totaux: $CHAR_COUNT")" >&2
    else
        log_error "Erreur lors de la copie dans le presse-papiers."
        log_warn "Le contenu agrégé se trouve dans: $TEMP_FILE"
        trap - EXIT
        exit 1
    fi
}

main "$@"