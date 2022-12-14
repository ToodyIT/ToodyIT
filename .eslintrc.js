module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: "tsconfig.json",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@src", "./src"]],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
  },
  ignorePatterns: ["generateReactTemplates/**"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-duplicate-imports": "error",
    "func-style": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "no-undef-init": "warn",
    "prefer-destructuring": "warn",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    "no-mixed-spaces-and-tabs": "warn",
    "@typescript-eslint/default-param-last": "off",
    "no-unused-vars": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/dot-notation": "off",
    "react/display-name": "off",
    "@typescript-eslint/naming-convention": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "export", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },
      { blankLine: "any", prev: "const", next: "*" },
      { blankLine: "any", prev: "let", next: "*" },
      { blankLine: "any", prev: "expression", next: "*" },
    ],
    "react-hooks/exhaustive-deps": "off",
  },
  overrides: [
    {
      files: ["src/**/*.tsx"],
      rules: {
        "no-restricted-syntax": [
          "error",
          {
            selector: "TSInterfaceDeclaration[id.name=/^((?!Props).)*$/]",
            message: "Do not declare not props interface in tsx file",
          },
          {
            selector:
              "JSXExpressionContainer LogicalExpression LogicalExpression LogicalExpression",
            message: "Do not use more than 2 logical expression",
          },
        ],
      },
    },
    {
      files: ["src/**/*.test.tsx"],
      rules: {
        "no-restricted-syntax": ["off"],
      },
    },
  ],
};
