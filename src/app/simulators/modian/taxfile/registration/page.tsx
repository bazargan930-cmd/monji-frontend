// src/app/simulators/modian/admin/taxfile/registration/page.tsx
import ModianSubHeader from '@/components/layout/ModianSubHeader';
import RegistrationInformation from '@/components/modian/taxfile/registration-information/page';

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-50">
      <ModianSubHeader />
      <main className="mx-auto max-w-6xl p-4 md:p-6">
        <RegistrationInformation />
      </main>
    </div>
  );
}
