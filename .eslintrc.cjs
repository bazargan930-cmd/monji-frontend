// .eslintrc.cjs

module.exports = {
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        // جلوگیری از deep import
        "no-restricted-imports": ["error", {
          "patterns": [
            {
              "group": ["@/components/layout/Modian*", "@/components/layout/**/Modian*"],
              "message": "به‌جای '@/components/layout/Modian*' از barrel '@/components/modian/layout' ایمپورت کن."
            },
            {
              "group": ["@/components/modian/**/**"],
              "message": "ایمپورت از زیرماژول‌های مودیان باید از ایندکس همان زیرپوشه باشد (مثلاً '@/components/modian/portal')."
            }
          ]
        }],
        // تسهیل بررسی و رعایت ترتیب import‌ها
        "import/order": ["error", {
          "newlines-between": "always",
          "alphabetize": { "order": "asc", "caseInsensitive": true },
          "groups": [["builtin","external"],["internal"],["parent","sibling","index"]]
        }],
        // جلوگیری از وابستگی‌های اضافی در پروژه‌های dev فقط در حالت strict
        "import/no-extraneous-dependencies": [
          "warn", 
          {
            "devDependencies": [
              "**/*.config.*",
              "**/.*rc.*",
              "tools/**",
              "scripts/**",
              "postcss.config.js",
              "tailwind.config.js",
              "eslint.config.mjs"
            ]
          }
        ]
      }
    }
  ]
};

