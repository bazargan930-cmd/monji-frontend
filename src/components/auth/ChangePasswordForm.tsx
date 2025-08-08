'use client';

import { useState } from 'react';

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = async () => {
    setMessage('');
    setError('');

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('تمام فیلدها الزامی هستند');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('رمز جدید با تکرار آن یکسان نیست');
      return;
    }

    const res = await fetch('/api/auth/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    if (!res.ok) {
      const err = await res.json();
      setError(err.message || 'خطا در تغییر رمز عبور');
    } else {
      setMessage('رمز عبور با موفقیت تغییر کرد');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="mt-10 border-t pt-6 space-y-4">
      <h2 className="text-lg font-bold text-blue-700">تغییر رمز عبور</h2>

      <div className="flex flex-col gap-2">
        <input
          type="password"
          placeholder="رمز فعلی"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="password"
          placeholder="رمز جدید"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="password"
          placeholder="تکرار رمز جدید"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded p-2"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {message && <p className="text-green-600 text-sm">{message}</p>}

      <button
        onClick={handleChangePassword}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ثبت تغییر رمز
      </button>
    </div>
  );
}
