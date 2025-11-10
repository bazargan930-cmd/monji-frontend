//eslint.config.mjs

// Flat Config استاندارد برای Next 15
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
const nodeGlobals = {
  __dirname: "readonly",
  __filename: "readonly",
  exports: "readonly",
  module: "readonly",
  require: "readonly",
  process: "readonly",
  global: "readonly",
  Buffer: "readonly",
  setImmediate: "readonly",
  clearImmediate: "readonly",
};

// حالت سخت‌گیرانه را با متغیر محیطی کنترل می‌کنیم:
const isStrict = process.env.ESLINT_STRICT === "1";

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    // جلوگیری از lint روی خروجی‌ها و کدهای تولیدی
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "public/**",
      "src/generated/**",
      "src/generated/prisma/**",
      // فایل‌های ابزار/کانفیگ Node که باعث خطاهای no-undef می‌شوند
      ".eslintrc.cjs",
      "postcss.config.js",
      "tailwind.config.js",
      "tools/**"
    ],
  },
  // @eslint/js: آبجکت تکی است → بدون spread
  js.configs.recommended,
  // typescript-eslint معمولا آرایه است → این یکی را spread نگه می‌داریم
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { next: nextPlugin, import: importPlugin, "react-hooks": reactHooks },
    languageOptions: {
      parserOptions: {
        // برای پروژه‌های TS بدون type-aware lint کافی است
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    settings: {
      // کمک به resolve ایمپورت‌ها (alias '@/...' و TS paths)
      "import/resolver": {
        typescript: { project: "./tsconfig.json" },
        node: true
      }
    },
    rules: {
      // در حالت عادی خاموش؛ در حالت سخت‌گیرانه روشن
      "import/order": isStrict ? ["warn", {
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "groups": [["builtin","external"],["internal"],["parent","sibling","index"]]
      }] : "off",
      // وابستگی‌های اضافی تنها در حالت Strict کنترل شوند
      "import/no-extraneous-dependencies": isStrict ? ["warn", {
        "devDependencies": [
          "**/*.config.*",
          "**/.*rc.*",
          "tools/**",
          "scripts/**",
          "postcss.config.js",
          "tailwind.config.js",
          "eslint.config.mjs"
        ]
      }] : "off",
      // جلوگیری از ایمپورت مستقیم Modian* از components/layout
      // همه مصرف‌کننده‌ها باید از barrel: "@/components/modian/layout" ایمپورت کنند
      // ✅ برای بازآرایی تدریجی importهای مودیان، فعلاً به warn تنزل بده
      "no-restricted-imports": ["warn", {
        "patterns": [
          {
            "group": ["@/components/layout/Modian*", "@/components/layout/**/Modian*"],
            "message": "به‌جای '@/components/layout/Modian*' از barrel '@/components/modian/layout' ایمپورت کن."
          },
          // جلوگیری از ایمپورت عمیق داخل زیرماژول‌های مودیان (الزام به ایمپورت از ایندکس زیرماژول)
          {
            "group": ["@/components/modian/**/**"],
            "message": "ایمپورت از زیرماژول‌های مودیان باید از ایندکس همان زیرپوشه باشد (مثلاً '@/components/modian/portal')."
          }
        ]
      }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": isStrict ? "warn" : "off",
      // نرم‌سازی موقت: در حالت عادی خاموش، در حالت سخت‌گیرانه اخطار
      "@typescript-eslint/no-explicit-any": isStrict ? "warn" : "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      // در حالت عادی خاموش؛ در حالت سخت‌گیرانه اخطار
      "no-empty": isStrict ? "warn" : "off",
      "prefer-const": isStrict ? "warn" : "off",
      "@typescript-eslint/ban-ts-comment": isStrict ? ["warn", { "ts-ignore": "allow-with-description" }] : "off"
     
    }
  },
  // استثنا برای فایل‌های ابزار/کانفیگ: خاموش‌کردن برخی قواعد در این محدوده‌ها
  {
    files: [
      "**/*.config.{js,cjs,mjs,ts}",
      "scripts/**",
      "tools/**",
      "eslint.config.mjs",
      "postcss.config.js",
      "tailwind.config.js"
    ],
    languageOptions: {
      // فعال‌سازی گلوبال‌های Node برای جلوگیری از no-undef کاذب
      globals: nodeGlobals
    },
    rules: {
      "import/no-extraneous-dependencies": "off",
      "no-undef": "off"
    }
  }
];

 export default eslintConfig;
