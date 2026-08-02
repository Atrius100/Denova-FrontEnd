"use client";

import { Smartphone, Wallet } from "lucide-react";
import { useState } from "react";
import { FormInputR } from "@/components/CommonApp/FormInputR";

export default function page() {
  const [phone, setPhone] = useState("");

  const amount = "25,000 ل.س";

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
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="Denova"
            className="h-14 md:h-16 object-contain"
          />
        </div>

       

        {/* Header */}
        <div className="mt-3 md:mt-5 text-center">
          <h1 className="text-2xl font-bold text-[#1e3a6d]">
            إتمام عملية الدفع
          </h1>

          <p className="mt-2 text-sm leading-7 text-slate-500">
            أكمل عملية الدفع عبر Syriatel Cash لإرسال الطلب.
          </p>
        </div>

        {/* Amount */}
        <div
          className="
            mt-6 md:mt-8
            rounded-2xl
            border border-blue-100
            bg-blue-50/50
            p-3 lg:p-5
            text-center
          "
        >
          <p className="text-sm text-slate-500">
            المبلغ المطلوب
          </p>

          <h2 className="mt-2 text-xl md:text-3xl font-bold text-[#1e3a6d]">
            {amount}
          </h2>
        </div>

        {/* Phone */}
        <div className="mt-4 md:mt-8">
          <label className="mb-2 block text-xs md:text-sm font-medium text-slate-600">
            رقم Syriatel Cash
          </label>

          <div className="relative">
            <FormInputR
              dir="ltr"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              placeholder="09xxxxxxxx"
              className="pr-12"
            />

            <Smartphone
              className="
                absolute
                right-4
                top-1/2
                h-5 w-5
                -translate-y-1/2
                text-slate-400
              "
            />
          </div>
        </div>

        {/* Info */}
        <p className="mt-2 md:mt-3 text-center text-xs md:text-sm leading-6 text-slate-400">
          سيتم إرسال طلب دفع إلى الرقم المدخل لإتمام العملية.
        </p>

        {/* Button */}
        <button
          className="
            mt-4 md:mt-6
            h-10 md:h-12
            w-full
            rounded-2xl

            bg-gradient-to-r
            from-[#2563eb]
            to-[#1e3a6d]

            font-medium
            text-white

            transition-all
            hover:opacity-90
          "
        >
          دفع الآن
        </button>
      </div>

    </div>
  );
}