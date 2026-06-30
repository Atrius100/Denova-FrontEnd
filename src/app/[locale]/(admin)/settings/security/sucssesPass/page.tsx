"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function SuccessPassword() {
  return (
    <div className="mt-9 flex justify-center">
      <div
        className="
          w-full
          max-w-lg
          rounded-[1.75rem]
          border border-slate-200
          bg-white
          p-5
          shadow-sm
          md:max-w-xl
          md:p-8
        "
      >
        {/* Success Icon */}
        <div className="flex justify-center">
          <div
            className="
              flex
              size-14
              items-center
              justify-center
              rounded-full
              bg-green-100
              text-green-600
              md:size-16
            "
          >
            <Check className="h-8 w-8" />
          </div>
        </div>

        {/* Title */}
        <div className="mt-5 text-center">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            تم تغيير كلمة المرور بنجاح
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500 md:text-base">
            تم تحديث كلمة المرور الخاصة بحسابك بنجاح، يمكنك الآن المتابعة
            واستخدام حسابك بشكل طبيعي.
          </p>
        </div>

        {/* Button */}
        <Link
        
          href="/settings"
          className="
            mt-8
            flex
            h-14
            w-full
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            from-[#1e3a6d]
            to-[#2563eb]
            font-semibold
            text-white
            transition
            hover:-translate-y-0.5
          "
        >
          العودة إلى لوحة التحكم
        </Link>
      </div>
    </div>
  );
}