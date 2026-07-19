// src/app/simulators/modian/login/layout.tsx
import { ModianFooter, ModianHeader } from '@/features/modian';

export default function ModianLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#021a0f] via-[#064e3b] to-[#022c22]">
      
      {/* محتوای اصلی */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* فوتر با استایل سفارشی برای صفحه لاگین */}
      <div className="login-footer-wrapper">
        <style>{`
          .login-footer-wrapper footer {
            background-color: rgba(20, 83, 45, 0.4) !important; /* green-900/40 */
            border-color: rgba(74, 222, 128, 0.3) !important;   /* green-400/30 */
            color: rgba(255, 255, 255, 0.9) !important;
          }
          .login-footer-wrapper footer p {
            color: rgba(255, 255, 255, 0.9) !important;
          }
        `}</style>
        <ModianFooter />
      </div>
    </div>
  );
}