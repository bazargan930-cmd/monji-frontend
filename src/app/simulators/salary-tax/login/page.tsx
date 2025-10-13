//src\app\simulators\salary-tax\login\page.tsx

import Header from "@/components/salary-tax/SimulatorHeader";
import LoginForm from "@/components/auth/LoginForm";


export default function SalaryTaxLoginPage() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <div className="w-full flex justify-center items-start px-4 lg:px-16 py-12">
        <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row-reverse gap-8">
          {/* Notes */}
          <div className="w-full lg:w-2/3 bg-white rounded-xl p-6 shadow-md border border-gray-100 text-right">
            <h2 className="text-xl font-bold mb-4">📌 نکات مهم در سال ۱۴۰۴</h2>
            <ul className="list-disc pr-5 space-y-3 text-sm leading-6 text-justify">
              <li>در سال ۱۴۰۴، مستندات ارائه‌شده باید طبق قانون جدید ارسال شود و مسئولیت صحت اطلاعات بر عهده پرداخت‌کننده است.</li>
              <li>اطلاعات حقوق باید تنها از طریق سامانه ارسال گردد و در صورت مغایرت، مسئولیت آن با کارفرما خواهد بود.</li>
              <li>استفاده از سامانه صرفاً جهت آموزش و شبیه‌سازی است و اطلاعات واردشده واقعی نیستند.</li>
            </ul>
          </div>

          {/* Login Form */}
          <div className="w-full lg:w-[420px] flex justify-center items-start">
            <LoginForm/>
          </div>
        </div>
      </div>
    </>
  );
}
