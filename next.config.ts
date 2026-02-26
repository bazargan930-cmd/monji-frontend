//next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: '/:path*', // حذف `admin/` از مسیر
        permanent: true, // مسیر دائمی است
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/old-Invoices/:path*',
        destination: '/invoices/old/:path*', // تغییر مسیر `old-Invoices` به `invoices/old/`
      },
    ];
  },

  // سایر تنظیمات ممکن برای پروژه شما
};

export default nextConfig;
