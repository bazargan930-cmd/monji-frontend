import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

interface CaptchaProps {
  num1: number;
  num2: number;
  answer: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRefresh: () => void;
}

export default function Captcha({ num1, num2, answer, onChange, onRefresh }: CaptchaProps) {
  return (
    <div className="relative w-full max-w-[170px] mx-auto">
      <div className="flex items-center justify-center text-sm text-gray-800 mb-1 flex-row-reverse gap-1">
        <img
          src="/images/refresh-icon.png"
          onClick={onRefresh}
          alt="رفرش"
          className="w-4 h-4 cursor-pointer hover:opacity-80 mr-6 ml-2"
          title="تولید کد جدید"
        />
        <span>
          ? = <b>{num2}</b> + <b>{num1}</b>
        </span>
      </div>
      <div className="relative">
          
        <input
          type="text"
          placeholder="حاصل عبارت را وارد کنید"
          value={answer}
          onChange={onChange}
          className="text-right text-sm h-9 w-full pr-8 border-b border-gray-400 rounded-none placeholder:text-gray-500 focus:outline-none"
         
        />
        <span className="absolute right-2 top-3/4 -translate-y-1/2 text-gray-400 text-sm">
            <FaStarOfLife />
        </span>

        
      </div>
    </div>
  );
}
