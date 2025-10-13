//src\components\modian\ModianOtpForm.tsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ModianOtpForm() {
  const [code, setCode] = useState('');
  const [minutes, setMinutes] = useState(6);
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState('');
  const router = useRouter();

  const correctCode = '111111';

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((s) => s - 1);
      } else if (minutes > 0) {
        setMinutes((m) => m - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
        router.push('/simulators/modian/login');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds, router]);

  const handleSubmit = () => {
    if (code !== correctCode) {
      setError('کد وارد شده صحیح نیست');
      return;
    }
    setError('');
    router.push('/simulators/modian/dashboard');
  };

  return (
    <div className="max-w-sm mx-auto mt-12 px-4 text-right">
      <h2 className="text-lg font-bold mb-4">رمز یکبار مصرف</h2>
      <p className="text-sm text-gray-700 mb-4">
        رمز یکبار مصرف ۶ رقمی از طریق پیامک برای شما ارسال شده است. لطفاً آن را وارد نمایید.
      </p>

      <div className="relative mb-2">
        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="کد پیامک شده"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full text-right border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-2 top-2 text-sm text-gray-500">
          {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
        </span>
      </div>

      {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={() => router.push('/simulators/modian/login')}
          className="w-full py-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          انصراف
        </button>
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          تأیید
        </button>
      </div>
    </div>
  );
}
