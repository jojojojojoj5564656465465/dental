import vanillaExtract from "@antebudimir/eslint-plugin-vanilla-extract";

export default [
  {
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    files: ["**/*.css.ts"],
    ignores: ["reset.css.ts", "heme.css.ts"],
    plugins: {
      "vanilla-extract": vanillaExtract,
    },
    rules: {
      // 'vanilla-extract/alphabetical-order': 'warn',
      // OR
      // 'vanilla-extract/concentric-order': 'warn',
      // OR
      "vanilla-extract/custom-order": [
        "off",
        {
          groupOrder: [
            "display",
            "font",
            "dimensions",
            "margin",
            "padding",
            "position",
            "border",
          ], // example group order
          // optional
          sortRemainingProperties: "concentric", // 'alphabetical' is default
        },
      ],
    },
  },
];
