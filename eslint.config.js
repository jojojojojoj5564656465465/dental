import vanillaExtract from "@antebudimir/eslint-plugin-vanilla-extract";

export default [
  {
    files: ["**/*.css.ts"],
    ignores: ["src/**/theme-contract.css.ts"],
    plugins: {
      "vanilla-extract": vanillaExtract,
    },
    rules: {
      // 'vanilla-extract/alphabetical-order': 'warn',
      // OR
      // 'vanilla-extract/concentric-order': 'warn',
      // OR
      "vanilla-extract/custom-order": [
        "warn",
        {
          groupOrder: [
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
