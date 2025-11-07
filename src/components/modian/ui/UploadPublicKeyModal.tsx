import * as React from 'react';
import { genMemoryPublicKey, normalizeUid } from '@/components/modian/common/memoryKey.utils';
import { getSavedPublicKeyFor, savePublicKeyFor } from '@/components/modian/common/memoryKey.utils';

type Props = {
  open: boolean;
  onClose: () => void;
  ownerUid: string;
  onSaved?: (key: string) => void;
};

const OPEN_DIALOG_IMG = '/images/Public%20key%20signature%20memory.png';

export default function UploadPublicKeyModal({ open, onClose, ownerUid, onSaved }: Props) {
  const [uploadedKey, setUploadedKey] = React.useState('');
  const [showMockPicker, setShowMockPicker] = React.useState(false);
  const [mockName, setMockName] = React.useState('');
  const mockInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!open) {
      setUploadedKey('');
      setShowMockPicker(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1200] bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-lg w-[560px] max-w-[92vw]">
        <div className="px-5 pt-5">
          {/* تیتر + تیک سبز */}
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-green-600 text-green-700">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <span>بارگذاری کلید عمومی/گواهی امضا حافظه</span>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            لطفا کلید عمومی/گواهی امضا حافظه را بارگذاری کنید
          </p>

          {/* فیلد تمام عرض + دکمه سبز داخل فیلد */}
          <div className="mt-3">
            <div className="relative">
              <input
                type="text"
                readOnly
                value={uploadedKey}
                className="w-full border rounded-md py-2 px-3 text-sm pl-[120px]"
              />
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 bg-green-600 text-white text-sm rounded-md px-3 py-1.5"
                onClick={() => {
                  const existing = getSavedPublicKeyFor(ownerUid);
                  setMockName(existing || genMemoryPublicKey());
                  setShowMockPicker(true);
                }}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.44 11.05l-8.49 8.49a5 5 0 0 1-7.07-7.07l8.49-8.49a3.5 3.5 0 1 1 4.95 4.95L10 17.5a2 2 0 1 1-2.83-2.83l8.49-8.49"/>
                </svg>
                <span>بارگذاری فایل</span>
              </button>
            </div>
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="px-5 py-4 flex justify-end gap-2">
          <button type="button" className="px-3 py-2 rounded-md bg-red-600 text-white text-sm" onClick={onClose}>
            انصراف
          </button>
          <button
            type="button"
            disabled={!uploadedKey}
            className={`px-6 py-2 rounded-md text-white text-sm ${uploadedKey ? 'bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
            onClick={() => {
              if (!uploadedKey) return;
              savePublicKeyFor(ownerUid, uploadedKey);
              onSaved?.(uploadedKey);
              onClose();
            }}
          >
            ثبت
          </button>
        </div>
      </div>

      {/* دیالوگ صوری Open (همان تصویر مرحله Add) */}
      {showMockPicker && (
        <div className="fixed inset-0 z-[1300] flex items-start justify-center bg-black/60" onClick={() => setShowMockPicker(false)}>
          <div className="mt-10 w-[860px] max-w-[95vw] rounded-md border bg-white shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <img src={OPEN_DIALOG_IMG} alt="Open dialog mock" className="w-full h-auto select-none pointer-events-none rounded-md" />
            {/* متن آموزشی روی تصویر */}
            <div
              dir="rtl"
              className="absolute text-[13px] leading-6 text-gray-700 text-right"
              style={{ left: '28%', top: '15%', width: '47%' }}
            >
              <p>کاربر گرامی</p>
              <p>این یک پنجره آموزشی است.</p>
              <p>جهت کسب اطلاعات از نحوه تهیه فایل کلید عمومی امضا حافظه،</p>
              <p>به کلید راهنمای صفحه مراجعه کنید.</p>
              <p>در این مرحله با فشردن کلید <span className="font-bold">Open</span> از مقابل این پنجره استفاده نمایید.</p>
            </div>
            {/* محل فیلد File name روی تصویر */}
            <input
              ref={mockInputRef}
              value={mockName}
              onChange={(e) => setMockName(normalizeUid(e.target.value))}
              className="absolute bg-transparent"
              style={{ left: '32%', right: '24%', bottom: '10.5%' }}
              dir="ltr"
              maxLength={36}
            />
            {/* دکمه‌ها روی تصویر */}
            <button type="button" className="absolute right-[40px] bottom-[22px]" onClick={() => setShowMockPicker(false)}>
              Cancel
            </button>
            <button
              type="button"
              className="absolute right-[155px] bottom-[22px]"
              onClick={() => {
                const key = normalizeUid(mockName || genMemoryPublicKey());
                setUploadedKey(key);
                setShowMockPicker(false);
              }}
            >
              Open
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
