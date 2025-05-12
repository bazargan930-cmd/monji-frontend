"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";

export default function SalaryTaxForm() {
  const { control, register, handleSubmit, setError } = useForm({
    defaultValues: {
      rows: [
        {
          nationalId: "",
          firstName: "",
          lastName: "",
          baseSalary: "",
          deductedTax: "",
          year: new Date().getFullYear().toString(),
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rows",
  });

  const [results, setResults] = useState<any[]>([]);
  const [error, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("http://localhost:3001/simulators/salary-tax/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entries: data.rows }),
      });
      const text = await res.text();
try {
  const json = JSON.parse(text);
  setResults(json);
  setErrorMessage(null);
} catch (e) {
  console.error("پاسخ غیر JSON از سرور:", text);
  setErrorMessage("پاسخ غیرمنتظره از سرور دریافت شد.");
  setResults([]);
}

      const json = await res.json();

      if (!res.ok) {
        setErrorMessage(json.message || "خطایی در پردازش رخ داد");
        setResults([]);
      } else {
        setResults(json);
        setErrorMessage(null);
      }
    } catch (error) {
      console.error("خطا در ارسال داده:", error);
      setErrorMessage("ارتباط با سرور برقرار نشد.");
      setResults([]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ورود اطلاعات حقوق کارکنان</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">کد ملی</th>
              <th className="border px-2 py-1">نام</th>
              <th className="border px-2 py-1">نام خانوادگی</th>
              <th className="border px-2 py-1">حقوق مستمر</th>
              <th className="border px-2 py-1">مالیات کسر شده</th>
              <th className="border px-2 py-1">سال</th>
              <th className="border px-2 py-1">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((item: any, index: number) => (
              <tr key={item.id}>
                <td className="border px-2 py-1">
                  <input {...register(`rows.${index}.nationalId`)} className="w-full border px-1" />
                </td>
                <td className="border px-2 py-1">
                  <input {...register(`rows.${index}.firstName`)} className="w-full border px-1" />
                </td>
                <td className="border px-2 py-1">
                  <input {...register(`rows.${index}.lastName`)} className="w-full border px-1" />
                </td>
                <td className="border px-2 py-1">
                  <input type="number" {...register(`rows.${index}.baseSalary`)} className="w-full border px-1" />
                </td>
                <td className="border px-2 py-1">
                  <input type="number" {...register(`rows.${index}.deductedTax`)} className="w-full border px-1" />
                </td>
                <td className="border px-2 py-1">
                  <input {...register(`rows.${index}.year`)} className="w-full border px-1" />
                </td>
                <td className="border px-2 py-1 text-center">
                  <button type="button" onClick={() => remove(index)} className="text-red-500">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => append({ nationalId: "", firstName: "", lastName: "", baseSalary: "", deductedTax: "", year: new Date().getFullYear().toString() })}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            افزودن پرسنل جدید به فهرست
          </button>

          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">
            ارسال و محاسبه
          </button>
        </div>
      </form>

      {error && (
        <div className="text-red-600 mt-4">{error}</div>
      )}

      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">نتایج محاسبه مالیات:</h3>
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">کد ملی</th>
                <th className="border px-2 py-1">حقوق</th>
                <th className="border px-2 py-1">مالیات نهایی</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res: any, idx: number) => (
                <tr key={idx}>
                  <td className="border px-2 py-1">{res.nationalId || "-"}</td>
                  <td className="border px-2 py-1">{res.baseSalary || "-"}</td>
                  <td className="border px-2 py-1 font-bold text-green-700">{res.taxAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
