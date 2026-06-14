import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * ESLint top config pour Portfolio Next.js
 * - React Hooks strict dans components/
 * - JSX-A11y pour accessibilité minimale
 * - TypeScript strict / imports type
 * - Ignoré : .next, build, out, node_modules
 */
export default defineConfig([
  // Base Next.js + TypeScript
  ...nextVitals,
  ...nextTs,

  // Règles globales
  {
    rules: {
      "react/jsx-key": "warn",
      "react/no-unescaped-entities": "off",
      "react-hooks/rules-of-hooks": "off", // activé seulement dans components/
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
      "no-console": "off",
      "no-debugger": "warn",
      "no-unused-expressions": "warn",
    },
  },

  // Override : fichiers app/ (RSC côté serveur)
  {
    files: ["app/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },

  // Override : fichiers components/ (client)
  {
    files: ["components/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
    },
  },

  // Ignore certains fichiers / dossiers
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
    "docs/**", // références de handoff (Markdown, .jsx à recréer) — pas du code applicatif
  ]),

  eslintConfigPrettier,
]);
