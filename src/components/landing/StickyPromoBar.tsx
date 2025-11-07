//src/components/landing/StickyPromoBar.tsx
 'use client';
 import Link from 'next/link';
 import { useEffect, useRef, useState } from 'react';

 type VisibleAt = 'hero-only' | 'always' | 'never';
 export default function StickyPromoBar({
   visibleAt = 'hero-only',
 }: { visibleAt?: VisibleAt }) {
   const [show, setShow] = useState(visibleAt === 'always');
   const heroEl = useRef<HTMLElement | null>(null);
   useEffect(() => {
     if (visibleAt !== 'hero-only') return;
     heroEl.current = document.querySelector<HTMLElement>('#hero');
     if (!heroEl.current) return;
     const io = new IntersectionObserver(
       ([entry]) => setShow(entry?.isIntersecting ?? false),
       { threshold: 0.2 }
     );
     io.observe(heroEl.current);
     return () => io.disconnect();
   }, [visibleAt]);
   if (!show || visibleAt === 'never') return null;
   return (
     <div className="fixed bottom-0 inset-x-0 z-40">
       <div className="mx-auto max-w-7xl px-4">
         <div className="mb-3 rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-lg p-3 flex flex-row-reverse items-center gap-3">
           <Link href="/auth/signup" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700">
             ثبت‌نام رایگان
           </Link>
           <Link href="/simulators/insurance/free" className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-black">
             اجرای دمو
           </Link>
           <span className="mr-auto text-sm text-slate-600">شروع رایگان • بدون کارت بانکی</span>
         </div>
       </div>
     </div>
   );
 }
