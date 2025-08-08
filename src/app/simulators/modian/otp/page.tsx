'use client';

import React from 'react';
import SimulatorHeader from '@/components/salary-tax/SimulatorHeader';
import ModianOtpForm from '@/components/modian/ModianOtpForm';

export default function ModianOtpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SimulatorHeader />
      <ModianOtpForm />
    </div>
  );
}
