'use client';

import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaUser, FaLock } from "react-icons/fa";
import InputField from "@/components/forms/parts/InputField";
import Captcha from "@/components/forms/parts/Captcha";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [expectedResult, setExpectedResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
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
      const res = await fetch("/api/simulators/salary-tax/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) throw new Error("ورود ناموفق بود");

      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/simulators/salary-tax/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Card className="relative w-full bg-[url('/images/input-page.png')] bg-cover bg-no-repeat bg-center border border-gray-200 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl shadow-xl min-h-[600px] flex flex-col justify-start pt-8 overflow-visible">
      <CardContent className="relative px-4 pt-10 pb-48 mt-10 h-full">
        <div className="flex flex-col items-center space-y-6">
          <InputField
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={<FaUser />}
          />

          <InputField
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<FaLock />}
          />

          <Captcha
            num1={num1}
            num2={num2}
            answer={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            onRefresh={generateCaptcha}
          />

          {error && (
            <p className="text-sm text-red-500 text-center w-[260px]">{error}</p>
          )}

          <div
            onClick={handleLogin}
            className="w-full max-w-[250px] h-14 flex items-center justify-between flex-row-reverse rounded-full border border-gray-300 bg-white px-4 cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-lg text-gray-500">{<FaAngleLeft />}</span>
            <span className="text-blue-600 text-sm font-medium">ورود به سامانه</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-0 left-0 flex flex-col items-center z-10">
          <img src="/images/logo-monji.png" alt="لوگوی تراز پایین" className="w-16 h-16 object-contain m-2 p-0" />
          <p className="text-white text-sm font-bold text-center leading-tight mt-1">
            <span className="block">موسسه آموزشی تراز</span>
            آموزش سامانه‌های بیمه و مالیات
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
