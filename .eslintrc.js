module.exports = {
  "extends": "next/core-web-vitals",
  "plugins": ["import", "simple-import-sort"],
  "rules": {
    // Reports any imports that come after non-import statements.
    "import/first": "error",
    // Enforces having one or more empty lines after the last top-level import statement or require call.
    "import/newline-after-import": "error",
    // Reports if a resolved path is imported more than once.
    "import/no-duplicates": "error",

    // Sort and group exports.
    "simple-import-sort/exports": "error",
    // Sort and group imports.
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Node.js builtins.
          [`^(${require("module").builtinModules.join("|")})(/|$)`],
          // Packages.
          ["^@nestjs", "^@?\\w"],
          // Internal modules.
          ["^~/[^/]+(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
      parserOptions: {
        // In a monorepo project, use deepest tsconfig.json first.
        project: ["*/**/tsconfig.json", "**/tsconfig.json"],
      },
      rules: {
        // Standardize the use of type imports style.
        "@typescript-eslint/consistent-type-imports": "error",
        // Standardize the use of type exports style.
        "@typescript-eslint/consistent-type-exports": "error",
        // Allow the declaration of empty interfaces.
        "@typescript-eslint/no-empty-interface": "off",
        // Only allow unused variables for rest siblings.
        "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
        // Allow non-null assertions using the ! postfix operator.
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
    {
      files: ["**/__tests__/**/*.+(js|ts)?(x)", "**/*.{spec,test}.+(js|ts)?(x)"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:prettier/recommended",
      ],
    },
    {
      files: ["**/__tests__/**/*.ts?(x)", "**/*.{spec,test}.ts?(x)"],
      rules: {
        // Disabling this rule for using the rule from Jest.
        "@typescript-eslint/unbound-method": "off",
        // Enforces unbound methods are called with their expected scope.
        "jest/unbound-method": "error",
      },
    },
  ],
}
