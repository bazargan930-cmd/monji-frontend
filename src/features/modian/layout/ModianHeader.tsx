//src\components\modian\layout\ModianHeader.tsx
'use client';

import Image from 'next/image';

import { useUserInfo } from '@/hooks/useUserInfo';
import { getTodayJalali } from '@/lib/utils';

export default function ModianHeader() {
  const today = getTodayJalali();
  const { userInfo } = useUserInfo();

  return (
    <div
      className="w-full min-h-[110px] bg-cover bg-center bg-no-repeat px-6 py-2 flex justify-between items-center"
      style={{
        backgroundImage: "url('/images/header-workspace.png')",
      }}
    >
      {/* بلوک راست: لوگو */}
      <div className="flex items-center justify-start h-full">
        <Image
          src="/images/logo-monji.png"
          alt="لوگو منجی"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[110px] w-auto object-contain"
          priority
        />
      </div>


      {/* بلوک چپ: تاریخ + کاربر در یک ستون، شعار در راست آن */}
      <div className="flex items-center justify-start gap-4 h-full">
        {/* شعار سال */}
        <div className="relative w-[180px] h-[60px] flex items-center justify-center">
          <Image
            src="/images/YearName-1404.png"
            alt="شعار سال"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* تاریخ و کاربر */}
        <div className="flex flex-col items-start justify-center text-[0.8rem] gap-1">
          <span className="text-green-600 font-bold">{today}</span>
          <span className="text-black font-normal whitespace-nowrap">
            {userInfo?.fullName || 'کاربر تستی'} ({userInfo?.nationalId || '09123456789'})
          </span>
        </div>
      </div>

    </div>
  );
}
