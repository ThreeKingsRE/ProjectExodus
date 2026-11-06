import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // The full architecture element data is ~3 MB (six learning levels per
    // element). Client code must use the summaries and fetch details from
    // /api/architecture/elements instead of bundling it.
    files: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "hooks/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}"],
    ignores: ["app/api/**"],
    rules: {
      "no-restricted-imports": ["error", {
        paths: [{
          name: "@/data/architecture/elements",
          message: "Bundles ~3 MB of element text. Use @/data/architecture/summary and useElementDetails/fetchElementDetails.",
        }],
        patterns: [{
          group: ["@/data/architecture/elements/*"],
          message: "Bundles element text. Use @/data/architecture/summary instead.",
        }],
      }],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
