import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
export default defineConfig([
  {
    linterOptions: { reportUnusedDisableDirectives: false },
    extends: nextVitals,
    rules: {
      "@next/next/no-img-element": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
