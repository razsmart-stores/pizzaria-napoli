import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import prettierConfig from "eslint-config-prettier"; // Importa la configuración de Prettier

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjs,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        React: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@typescript-eslint": typescriptPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Agrega la configuración de Prettier al final para que anule otras reglas de formato.
  prettierConfig,
  {
    ignores: [
      ".next/",
      "node_modules/",
      "out/",
      // Puedes agregar más directorios o archivos para ignorar aquí
    ],
  },
];
