import React from 'react';

interface InputGroupProps {
  label: string;
  isImportant?: boolean;
  onChange: (value: number) => void;
}

export default function InputGroup({ label, onChange, isImportant }: InputGroupProps) {
  return (
    <div className="flex flex-col text-right">
      <label className="text-sm mb-1">
        {label}
        {isImportant && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="number"
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
