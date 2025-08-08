import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}

export default function InputField({ type, placeholder, value, onChange, icon }: InputFieldProps) {
  return (
    <div className="relative w-full max-w-[170px] mx-auto">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-right text-sm h-9 w-full pr-8 border-b border-gray-400 rounded-none placeholder:text-gray-500 focus:outline-none"
      />
      <span className="absolute right-2 top-2/3 -translate-y-1/2 text-gray-400 text-sm">
        {icon}
      </span>
    </div>
  );
}
