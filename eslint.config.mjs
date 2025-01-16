import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default [
  {
    ignores: ["**/node_modules/**", ".next/**", "dist/**"]
  },
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off"
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    }
  }
]

