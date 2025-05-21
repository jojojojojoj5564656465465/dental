import path from "node:path";
import { fileURLToPath } from "node:url"; // Import fileURLToPath from the url module
import qwikdev from "@qwikdev/astro";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon"; //import robotsTxt from 'astro-robots-txt'

import netlify from "@astrojs/netlify";

//import robotsTxt from 'astro-robots-txt'

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "static",

  // server: {
  //   host: true,
  //   port: 3000,
  //   watch: {
  //     usePolling: true
  //   }
  // },
  // experimental: {
  //   fonts: [],  // <-- stub enables the virtual:astro:assets/fonts/internal export
  // },
  vite: {
    // css: {
    //   transformer: "lightningcss",
    // },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "~assets": path.resolve(__dirname, "src/assets"),
        "@fonts": path.resolve(__dirname, "public/fonts"),
        "@images": path.resolve(__dirname, "public/images"),
        "@theme": path.resolve(__dirname, "src/styles/utils/theme.css.ts"),
        "@recipe": path.resolve(__dirname, "src/styles/recipe/index.css.ts"),
      },
    },

    plugins: [
      vanillaExtractPlugin({
        enabled: true,
        identifiers: "debug",
      }),
      tailwindcss(),
    ],
    optimizeDeps: {
      noDiscovery: true,

      //include: [] // Empty array instead of undefined
    },
  },

  integrations: [
    qwikdev(),
    icon({ iconDir: "src/assets/icons" }),
    //robotsTxt()
    //markdoc(),
  ],

  adapter: netlify(),
});
