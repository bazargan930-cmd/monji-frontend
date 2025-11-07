// src/components/modian/users-roles/UsersRolesHelpContent.tsx
import React from 'react';

export default function UsersRolesHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>مدیریت «کاربران» و «نقش‌ها» را شبیه‌سازی می‌کند. بالای صفحه دو تب دارید: «کاربران» و «نقش‌ها».</p>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">تب کاربران</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>جستجو با نام خانوادگی، کد ملی/کد فراگیر یا موبایل (جعبهٔ جستجو سمت راست نوار ابزار).</li>
          <li>با دکمهٔ «افزودن کاربر» (سمت چپ نوار ابزار) کاربر جدید ایجاد می‌شود.</li>
          <li>جدول کاربران فعلاً نمونه/خالی است و در نسخه‌های بعدی پر می‌شود.</li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">تب نقش‌ها</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>جستجو با نام نقش (جعبهٔ جستجو سمت راست نوار ابزار).</li>
          <li>با دکمهٔ «ایجاد نقش» (سمت چپ نوار ابزار) نقش جدید ساخته می‌شود.</li>
          <li>جدول نقش‌ها فعلاً نمونه/خالی است و بعداً به CRUD متصل می‌شود.</li>
        </ul>
      </section>
    </>
  );
}
