import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
        "react/prop-types": 0,
            "no-unused-vars": "off",
            "no-plusplus": "off",
            "eol-last": "off",
            "max-len": "off",
            "no-unused-expressions": "warn",
            "prefer-destructuring": "warn",
            "no-mixed-operators": "off",
            //"no-shadow":"warn",
            "linebreak-style": [0, "error", "windows"],
            "no-multiple-empty-lines": "off",
            "max-classes-per-file": "off",
            "object-curly-newline": "off",
            'react/jsx-no-target-blank': 'off',
            "@typescript-eslint/no-explicit-any": "off",
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
    }
  }),
];

export default eslintConfig;
