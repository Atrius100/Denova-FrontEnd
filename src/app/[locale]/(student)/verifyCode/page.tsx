"use client";

import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import { FormInputR } from "@/components/CommonApp/FormInputR";

export default function VerifyPaymentPage() {
  const [code, setCode] = useState("");

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div
        className="
          w-full
          max-w-md md:max-w-lg
          rounded-[2rem]
          border border-slate-200
          bg-white
          p-4
          shadow-sm
          md:p-6
        "
      >
      
        {/* Icon */}
        <div className="flex justify-center">
          <div
            className="
              flex size-12 md:size-16
              items-center justify-center
              rounded-full
              bg-blue-50
            "
          >
            <ShieldCheck className="size-6 md:size-8 text-[#1e3a6d]" />
          </div>
        </div>

        {/* Header */}
        <div className="mt-3 md:mt-5 text-center">
          <h1 className="text-2xl font-bold text-[#1e3a6d]">
            تأكيد عملية الدفع
          </h1>

          <p className="mt-2 text-sm leading-7 text-slate-500">
            أدخل رمز التحقق المرسل إلى رقم Syriatel Cash لإتمام العملية.
          </p>
        </div>

        {/* Code Input */}
        <div className="mt-4 md:mt-8">
          <label className="mb-2 block text-base md:text-base font-medium text-slate-600">
            رمز التحقق
          </label>

          <FormInputR
            dir="ltr"
            value={code}
            onChange={(e) =>
              setCode(e.target.value)
            }
            placeholder="123456"
          />
        </div>

        {/* Resend */}
        <div className="mt-2 md:mt-3 text-center">
          <button
            type="button"
            className="
              text-base md:text-base 
              font-medium
              text-[#1e3a6d]
              hover:underline
            "
          >
            إعادة إرسال الرمز
          </button>
        </div>

        {/* Confirm */}
        <button
          className="
            mt-4 md:mt-6
            h-12
            w-full
            rounded-2xl

            bg-gradient-to-r
            from-[#2563eb]
            to-[#1e3a6d]
            h-10 md:h-12

            font-medium
            text-white

            transition-all
            hover:opacity-90
          "
        >
          تأكيد الدفع
        </button>
      </div>
    </div>
  );
}