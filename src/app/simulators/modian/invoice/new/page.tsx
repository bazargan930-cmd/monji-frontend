import InvoiceForm from '@/components/modian/InvoiceForm';

export default function NewInvoicePage() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-xl font-bold text-blue-700 mb-6">ارسال صورتحساب جدید</h1>
      <InvoiceForm />
    </main>
  );
}
