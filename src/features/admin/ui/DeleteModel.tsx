"use client";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteConfirmModal({
  onClose,
  onConfirm,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.18)]">

        <h2 className="text-xl font-bold text-slate-800">
          تأكيد الحذف
        </h2>

        <p className="mt-3 text-slate-500">
          هل أنت متأكد أنك تريد حذف هذا المريض؟
        </p>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-5 py-2 text-slate-600"
          >
            لا
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl border border-slate-200 px-5 py-2 text-slate-600"
          >
            نعم
          </button>

        </div>

      </div>

    </div>
  );
}