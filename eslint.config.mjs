import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      ".next/",
      "node_modules/",
      "out/",
      "dist/",
      ".vercel/",
      "**/*.config.js",
      "**/*.config.mjs",
      "postcss.config.js",
    ],
  },

  // Base configurations
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...tseslint.configs.base,
    languageOptions: {
      ...tseslint.configs.base.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...tseslint.configs.base.rules,
    },
  },

  // TypeScript specific configurations
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  // React specific configurations
  {
    files: ["**/*.{ts,tsx}"], // Target TypeScript and TSX files
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Not needed with Next.js 17+
      "react/prop-types": "off", // Not needed with TypeScript
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },

  // Next.js specific configuration
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // Final config to disable formatting rules that conflict with Prettier
  eslintConfigPrettier,
);
