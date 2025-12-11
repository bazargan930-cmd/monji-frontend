import React, { useEffect, useState } from 'react';

import InputGroup from '@/components/insurance/InputGroup';
import InsuranceResultBox from '@/components/insurance/InsuranceResultBox';

interface PayrollItem {
  code: string;
  title: string;
  isInsurable: boolean;
}

interface InsuranceResult {
  employeeShare: number;
  employerShare: number;
  unemploymentInsurance: number;
  total: number;
}

export default function InsuranceSingleForm() {
  const [items, setItems] = useState<PayrollItem[]>([]);
  const [form, setForm] = useState<Record<string, number>>({});
  const [result, setResult] = useState<InsuranceResult | null>(null);

  useEffect(() => {
    fetch('/core/payroll/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const handleChange = (code: string, value: number) => {
    setForm(prev => ({ ...prev, [code]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('/simulators/insurance/from-core', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error('خطا در ارسال اطلاعات:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4 text-right">فرم محاسبه بیمه (حالت تکی)</h2>

      <div className="space-y-4">
        {items.map(item => (
          <InputGroup
            key={item.code}
            label={item.title}
            onChange={(value) => handleChange(item.code, value)}
            isImportant={item.isInsurable}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          محاسبه بیمه
        </button>
      </div>

      {result && (
        <div className="mt-8">
          <InsuranceResultBox result={result} />
        </div>
      )}
    </div>
  );
}
