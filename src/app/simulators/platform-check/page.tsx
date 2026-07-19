// src/app/simulators/platform-check/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function PlatformCheckPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // وضعیت‌های ممکن: 'loading' | 'allowed' | 'denied'
  const [status, setStatus] = useState<'loading' | 'allowed' | 'denied'>('loading');
  
  const platformName = searchParams.get('platform') ?? 'این پلتفرم';
  const targetUrl = searchParams.get('next') ?? '/dashboard';

  useEffect(() => {
    async function checkAccess() {
      try {
        // استفاده از API بک‌اند برای دریافت لیست کسب‌وکارها
        const res = await fetch('http://localhost:3001/businesses/me', {
          credentials: 'include',
          cache: 'no-store',
        });

        if (!res.ok) {
          // اگر خطایی در احراز هویت وجود دارد، کاربر را به لاگین می‌فرستیم
          if (res.status === 401) {
             window.location.href = '/auth/signin?next=' + encodeURIComponent(window.location.pathname + window.location.search);
             return;
          }
          // در سایر خطاها، فرض می‌کنیم دسترسی ندارد
          setStatus('denied');
          return;
        }

        const data = await res.json();
        
        // بررسی اینکه آیا آرایه برگشتی خالی است یا خیر
        // و آیا کسب‌وکاری دارای registration است
        if (Array.isArray(data) && data.length > 0) {
          // بررسی می‌کنیم آیا حداقل یک کسب‌وکار دارای entityName است
          // (یعنی فرم onboarding را تکمیل کرده)
          const hasCompletedRegistration = data.some((biz: any) => 
            biz.entityName && biz.entityName.trim() !== ''
          );
          
          if (hasCompletedRegistration) {
            setStatus('allowed');
          } else {
            setStatus('denied');
          }
        } else {
          setStatus('denied');
        }
      } catch (error) {
        console.error('Platform Check Error:', error);
        // در صورت خطای شبکه، برای امنیت کاربر را بلاک می‌کنیم (نمایش مودال)
        setStatus('denied');
      }
    }

    checkAccess();
  }, [targetUrl]);

  // اگر وضعیت 'allowed' شد، ریدایرکت انجام شود
  useEffect(() => {
    if (status === 'allowed') {
      window.location.href = targetUrl;
    }
  }, [status, targetUrl]);

  // نمایش لودینگ
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4" />
          <p className="text-slate-600">در حال بررسی دسترسی...</p>
        </div>
      </div>
    );
  }

  // اگر وضعیت 'denied' شد، مودال نمایش داده شود
  if (status === 'denied') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="w-full max-w-md rounded-lg bg-white p-6 space-y-4 shadow-lg mx-4">
          <h2 className="text-lg font-bold text-center text-red-600">
            دسترسی محدود
          </h2>
          <p className="text-sm text-center text-gray-600">
            کاربر گرامی،<br/>
            برای ورود به <b>{platformName}</b> لازم است ابتدا حداقل یک کسب‌وکار ایجاد کنید.
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 text-sm"
            >
              انصراف و بازگشت
            </button>
            <button
              onClick={() => window.location.href = '/business/onboarding'}
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 text-sm"
            >
              ایجاد کسب‌وکار
            </button>
          </div>
        </div>
      </div>
    );
  }

  // در حالت allowed، صفحه خالی می‌ماند تا useEffect ریدایرکت را انجام دهد
  return null;
}

// ✅ Wrapper سروری با Suspense boundary
export default function PlatformCheckPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4" /><p className="text-slate-600">در حال بارگذاری...</p></div>
      </div>
    }>
      <PlatformCheckPageContent />
    </Suspense>
  );
}