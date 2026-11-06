import baseConfig from "./eslint.config.mjs";

/**
 * CI lint config: the full ruleset, but pre-existing debt rules are demoted to
 * warnings so CI can gate on everything else (rules-of-hooks, static-components,
 * etc.) today. As each debt rule is cleaned up, delete it from this list so it
 * becomes a hard error again.
 */
const DEBT_RULES = [
  "@typescript-eslint/no-explicit-any",
  "react/no-unescaped-entities",
  "react-hooks/set-state-in-effect",
  "react-hooks/purity",
  "react-hooks/immutability",
  "react-hooks/preserve-manual-memoization",
  "react-hooks/refs",
  "react-hooks/error-boundaries",
  "prefer-const",
  "@next/next/no-assign-module-variable",
  "@typescript-eslint/ban-ts-comment",
  "@typescript-eslint/no-require-imports",
];

export default [
  ...baseConfig,
  { rules: Object.fromEntries(DEBT_RULES.map((rule) => [rule, "warn"])) },
];
