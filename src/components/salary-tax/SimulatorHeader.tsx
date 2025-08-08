export default function Header() {
  return (
    <div
      dir="ltr"
      className="w-full bg-[url('/images/grid-dark.png')] bg-repeat min-h-[80px] flex items-center justify-center px-2 py-2 sm:px-6 sm:py-0"
    >
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 w-full max-w-screen-lg">
        <img src="/images/Iran-flag1.png" alt="پرچم ایران" className="h-6 sm:h-[70px] w-auto" />
        
        <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
          شبیه‌ساز مالیات بر درآمد حقوق
        </span>

        <img src="/images/tik-blue.png" alt="تیک" className="h-4 sm:h-[70px] w-auto" />
        
        <div className="flex flex-col items-end text-white text-right leading-tight text-xs sm:text-base">
          <div className="font-bold text-sm sm:text-lg whitespace-nowrap">آکادمی حسابداری تراز</div>
          <div className="text-xs sm:text-sm whitespace-nowrap">آموزش تجربه‌محور منجی</div>
          <div className="text-[10px] sm:text-xs whitespace-nowrap">همراه با مدرک رسمی موسسه</div>
        </div>

        <img
          src="/images/logo-monji.png"
          alt="لوگوی تراز"
          className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
        />
      </div>
    </div>
  );
}
