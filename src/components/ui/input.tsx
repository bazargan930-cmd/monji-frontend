import React from "react";

export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
      {...props}
    />
  );
}
