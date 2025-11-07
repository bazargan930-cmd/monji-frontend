//src\app\simulators\modian\otp\page.tsx
 'use client'
import React from 'react';
import { ModianOtpForm } from '@/components/modian/auth';

export default function ModianOtpPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <ModianOtpForm />
    </div>
  );
}
