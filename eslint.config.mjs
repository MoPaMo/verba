import nextPlugin from "@next/eslint-plugin-next";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    plugins: {
      next: nextPlugin,
    },
    extends: ["next/core-web-vitals"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
];
