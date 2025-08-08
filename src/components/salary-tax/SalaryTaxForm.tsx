"use client";

type SalaryTaxFormProps = {
  onSubmit: (data: any) => void;
};

export default function SalaryTaxForm({ onSubmit }: SalaryTaxFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      monthlySalary: Number(formData.get("monthlySalary")),
      insurance: Number(formData.get("insurance")),
      bonuses: Number(formData.get("bonuses")),
      overtime: Number(formData.get("overtime")),
    };

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded p-6 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">اطلاعات حقوقی را وارد کنید</h2>

      <div className="space-y-2">
        <input name="monthlySalary" type="number" placeholder="حقوق ماهانه" required className="w-full border px-4 py-2 rounded" />
        <input name="insurance" type="number" placeholder="مبلغ بیمه پرداختی" className="w-full border px-4 py-2 rounded" />
        <input name="bonuses" type="number" placeholder="پاداش" className="w-full border px-4 py-2 rounded" />
        <input name="overtime" type="number" placeholder="اضافه‌کار" className="w-full border px-4 py-2 rounded" />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        محاسبه مالیات
      </button>
    </form>
  );
}
