// src/app/simulators/modian/admin/dashboard/page.tsx

'use client';

import ModianShell from '@/components/layout/ModianShell';
import ModianSidebar from '@/components/modian/ModianSidebar';
import { FaSyncAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';

export default function Page() {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <ModianShell>
      <div className="flex flex-row gap-6 px-6 py-8">
        {/* منوی کناری */}
        <div className="w-1/4">
          <ModianSidebar />
        </div>

        {/* محتوای داشبورد مدیریتی */}
        <div className="w-3/4 space-y-6">
          {/* بخش بالا: حد مجاز فروش */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="text-sm font-semibold text-gray-700">
                آخرین بروز‌رسانی اطلاعات پیش‌فرض
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="col-span-1">
                  <label className="text-xs text-gray-500">نرخ مالیات</label>
                  <select className="w-full border rounded px-2 py-1 text-sm">
                    <option>9٪</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="text-xs text-gray-500">سال</label>
                  <select className="w-full border rounded px-2 py-1 text-sm">
                    <option>1404</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="text-xs text-gray-500">دوره</label>
                  <select className="w-full border rounded px-2 py-1 text-sm">
                    <option>تابستان</option>
                  </select>
                </div>
                <div className="col-span-1 flex justify-end">
                  <Button size="sm" variant="outline" className="flex gap-1 items-center">
                    محاسبه حد مجاز
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-dashed rounded px-3 py-2 text-sm">
                  <span className="text-gray-500">باقی‌مانده حد مجاز فروش:</span> ۵,۶۶۱,۰۰۰,۰۰۰
                </div>
                <div className="border border-dashed rounded px-3 py-2 text-sm">
                  <span className="text-gray-500">سقف حد مجاز فروش:</span> ۵,۷۶۶,۲۰۰,۰۰۰
                </div>
              </div>
            </CardContent>
          </Card>

          {/* نمودارها */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="font-semibold text-gray-700 text-sm mb-2">خرید و فروش دوره</div>
                <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
                  [جای نمودار میله‌ای]
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="font-semibold text-gray-700 text-sm mb-2">صورتحساب‌های دوره</div>
                <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
                  [جای نمودار دایره‌ای]
                </div>
              </CardContent>
            </Card>
          </div>

          {/* خلاصه مالیات دوره */}
          <Card>
            <CardContent className="p-4">
              <div className="font-semibold text-gray-700 text-sm mb-2">خلاصه مالیات دوره</div>
              <ul className="text-sm text-gray-600 list-disc pr-4 space-y-1">
                <li>اعتبار مالیات بر ارزش افزوده دوره جاری: ۵,۰۰۰,۰۰۰</li>
                <li>بدهکاری مالیات بر ارزش افزوده دوره قبل: ۱,۲۰۰,۰۰۰</li>
                <li>جمع اعتبار مالیات بر ارزش افزوده: ۶,۲۰۰,۰۰۰</li>
              </ul>
            </CardContent>
          </Card>

          {/* خلاصه عضویت */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-gray-700 text-sm">خلاصه عضویت</div>
                <Button size="sm" variant="outline" onClick={() => setRefreshing(true)}>
                  <FaSyncAlt className="ml-1" /> به‌روزرسانی
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="border border-dashed rounded px-3 py-2">شرکت‌های معتمد انتخاب شده: ۲۴</div>
                <div className="border border-dashed rounded px-3 py-2">حساب بانکی مرتبط: ۴</div>
                <div className="border border-dashed rounded px-3 py-2">شناسه یکتای فعال: ۱</div>
                <div className="border border-dashed rounded px-3 py-2">ابزار پرداخت فعال: ۰</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ModianShell>
  );
}
