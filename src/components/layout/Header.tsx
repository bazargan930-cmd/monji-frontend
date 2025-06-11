export default function Header() {
  return (
    <div dir="ltr" className="w-full bg-[url('/images/grid-dark.png')] bg-repeat h-[70px] flex items-center justify-end px-6">
      <div className="flex items-center gap-4">
        <img src="/images/Iran-flag1.png" alt="پرچم ایران" className="h-[70px] w-auto" />
        <span className="text-white text-sm font-medium whitespace-nowrap self-end pb-1">
          شبیه‌ساز مالیات بر درآمد حقوق
        </span>
        <img src="/images/tik-blue.png" alt="تیک" className="h-[70px] w-auto" />
        <div className="flex flex-col items-end text-white text-right leading-tight">
          <div className="text-lg font-bold">آکادمی حسابداری تراز</div>
          <div className="text-sm">آموزش تجربه‌محور منجی</div>
          <div className="text-xs">همراه با مدرک رسمی موسسه</div>
        </div>
        <img src="/images/logo-monji.png" alt="لوگوی تراز" className="w-14 h-14 object-contain" />
      </div>
    </div>
  );
}
