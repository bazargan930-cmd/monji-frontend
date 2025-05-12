"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import SalaryTaxForm from "./SalaryTaxForm";

export default function SalaryTaxpage() {
  const { control, register, handleSubmit } = useForm({
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

  const [result, setResult] = useState(null);

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/simulators/salary-tax/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entries: data.rows }),
      });
      const json = await res.json();
      setResult(json);
    } catch (error) {
      console.error("خطا در ارسال داده:", error);
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

      {result && (
        <div className="mt-6">
          <h3 className="font-bold">نتیجه محاسبه:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
