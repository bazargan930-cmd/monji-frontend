'use client';
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaUser, FaLock, FaStarOfLife } from "react-icons/fa6";

import { Card, CardContent } from "@/components/ui/card";

export default function KarpoosheLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [expectedResult, setExpectedResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 90) + 10;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setExpectedResult(n1 + n2);
    setCaptchaAnswer("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = async () => {
    if (parseInt(captchaAnswer) !== expectedResult) {
      setError("کد امنیتی اشتباه است");
      return;
    }

    try {
      const res = await fetch("/api/simulators/karpooshe/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("ورود ناموفق بود");

      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/simulators/karpooshe/dashboard");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "ورود ناموفق بود";
      setError(message);
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-[420px] flex justify-center items-start mx-auto">
      <Card className="relative w-full bg-[url('/images/karpooshe-input-page.png')] bg-cover bg-no-repeat bg-center border border-gray-200 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl shadow-xl min-h-[600px] flex flex-col justify-start pt-8 overflow-visible">
        <CardContent className="relative flex flex-col justify-start items-center h-full px-4 sm:px-6 pt-10 pb-6 mt-10">

          <div className="w-full flex flex-col items-center space-y-6">
            {/* فیلد نام کاربری */}
            <div className="relative w-full max-w-[200px] sm:max-w-[180px] mx-auto">
              <input
                type="text"
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-right text-sm h-9 w-full pr-8 border-b border-gray-400 rounded-none placeholder:text-gray-500 focus:outline-none"
              />
              <span className="absolute right-2 top-2/3 -translate-y-1/2 text-gray-400 text-sm">
                <FaUser />
              </span>
            </div>

            {/* فیلد رمز عبور */}
            <div className="relative w-full max-w-[200px] sm:max-w-[180px] mx-auto">
              <input
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-right text-sm h-9 w-full pr-8 border-b border-gray-400 rounded-none placeholder:text-gray-500 focus:outline-none"
              />
              <span className="absolute right-2 top-2/3 -translate-y-1/2 text-gray-400 text-sm">
                <FaLock />
              </span>
            </div>

            {/* کپچا */}
            <div className="relative w-full max-w-[200px] sm:max-w-[180px] mx-auto">
              <div className="flex items-center justify-center text-sm text-gray-800 mb-1 flex-row-reverse gap-10">
                <img
                  src="/images/refresh-icon.png"
                  onClick={generateCaptcha}
                  alt="رفرش"
                  className="w-4 h-4 cursor-pointer hover:opacity-80 ml-2"
                  title="تولید کد جدید"
                />
                <span>? = <b>{num2}</b> + <b>{num1}</b></span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="حاصل عبارت را وارد کنید"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  className="text-right text-sm h-9 w-full pr-8 border-b border-gray-400 rounded-none placeholder:text-gray-500 focus:outline-none"
                />
                <span className="absolute right-2 top-3/4 -translate-y-1/2 text-gray-400 text-sm">
                  <FaStarOfLife />
                </span>
              </div>
            </div>

            {/* پیام خطا */}
            {error && (
              <p className="text-sm text-red-500 text-center w-full">{error}</p>
            )}
          </div>

          {/* دکمه ورود */}
          <div
            onClick={handleLogin}
            className="w-[260px] h-12 sm:h-14 mt-8 flex items-center justify-between flex-row-reverse ml-auto self-start rounded-full border border-gray-300 bg-white px-4 cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-lg text-gray-500">
              <FaAngleLeft />
            </span>
            <span className="text-blue-600 text-sm font-medium">ورود به کارپوشه</span>
          </div>

          {/* لوگو و متن پایین */}
          <div className="mt-auto pt-20 flex flex-col items-center z-10">
            <img
              src="/images/logo-monji.png"
              alt="لوگوی منجی پایین"
              className="w-16 h-16 object-contain"
            />
            <p className="text-white text-sm font-bold text-center leading-tight mt-1">
              <span className="block">موسسه آموزشی منجی</span>
              آموزش سامانه‌های مالیاتی و کارپوشه مودیان
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
