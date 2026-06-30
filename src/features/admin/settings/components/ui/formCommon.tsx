"use client";

import React from "react";
import SecurityField from "./input";

type Field = {
  label: string;
  type?: string;
  placeholder?: string;
};

type SecurityCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  fields: Field[];
  buttonText: string;
  footer?: React.ReactNode;
  helperText?: React.ReactNode;
};

export default function SecurityCard({
  icon,
  title,
  description,
  fields,
  buttonText,
  footer,
  helperText,
}: SecurityCardProps){
  return (
    <div className="flex justify-center mt-9">
      <div
        className="
          w-full
          max-w-lg
          md:max-w-xl
          rounded-[1.75rem]
          border border-slate-200
          bg-white
          p-3 md:p-5
          shadow-sm

          sm:px-8
          sm:py-10
        "
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div
            className="
              flex
              size-12 md:size-14
              items-center justify-center
              rounded-full
              bg-blue-50
              text-[#1e3a6d]
            "
          >
            {icon}
          </div>
        </div>

        {/* Header */}
        <div className="mt-4 text-center">
          <h1
            className="
              font-bold
              text-slate-900
              text-xl md:text-3xl lg:text-4xl
            "
          >
            {title}
          </h1>

          <p
            className="
              mx-auto
              mt-1 md:mt-2
              max-w-md
              leading-7
              text-slate-500
              text-sm
              md:text-base
              sm:text-lg
            "
          >
            {description}
          </p>
        </div>

        {/* Form */}
        <div className="mt-4 md:mt-6 space-y-1 md:space-y-3">
          {fields.map((field) => (
            <SecurityField
              key={field.label}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
            />
          ))}
        </div>
{helperText && (
  <div className="mt-3 text-center">
    {helperText}
  </div>
)}
        {/* Button */}
        <button
        
          className="
          
            mt-2 md:mt-4
            h-10 md:h-14
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-[#1e3a6d]
            to-[#2563eb]
            font-semibold
            text-white

            shadow-lg
            shadow-blue-500/10

            transition-all
            hover:-translate-y-0.5

          "
        >
          {buttonText}
        </button>

        {footer && (
          <div className="mt-2 md:mt-4 text-center">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}