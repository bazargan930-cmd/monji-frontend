"use client";

import { useState } from "react";

export default function SetTokenDebug() {
  const [tokenInput, setTokenInput] = useState("");

  const handleSaveToken = () => {
    localStorage.setItem("access_token", tokenInput);
    alert("توکن با موفقیت ذخیره شد!");
  };

  return (
    <div className="mt-8 p-4 border rounded bg-yellow-50 text-sm space-y-2">
      <p>🔐 جهت تست، توکن JWT خود را وارد کرده و ذخیره کنید:</p>
      <input
        type="text"
        className="w-full border px-2 py-1 rounded"
        placeholder="Paste your JWT token here"
        value={tokenInput}
        onChange={(e) => setTokenInput(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
        onClick={handleSaveToken}
      >
        ذخیره توکن
      </button>
    </div>
  );
}
