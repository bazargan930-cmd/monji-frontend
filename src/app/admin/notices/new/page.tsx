//src\app\admin\notices\new\page.tsx

import NoticeForm from '@/components/admin/NoticeForm';

export default function NewNoticePage() {
  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-4 text-green-700">افزودن اطلاعیه جدید</h1>
      <NoticeForm />
    </div>
  );
}
