import { Mail, Phone } from "lucide-react";

type SupportItemProps = {
  title: string;
  phone: string;
  email: string;
};

export function SupportItem({
  title,
  phone,
  email,
}: SupportItemProps) {
  return (
    <div className="space-y-1.5 md:space-y-3 pt-2 md:pt-4">
      {/* Title */}
      <p className="text-sm font-bold text-[#1e3a6d]">
        {title}
      </p>

      {/* Phone */}
      <div className="flex items-center gap-1 text-sm">
        <div className="flex size-6 lg:size-8 items-center justify-center rounded-xl bg-[#dbe8fb]">
          <Phone className="size-3 md:size-4 text-[#1e3a6d]" />
        </div>

        <span className="text-xs xl:text-sm">{phone}</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-1 text-sm">
        <div className="flex size-6 lg:size-8 items-center justify-center rounded-xl bg-[#dbe8fb]">
          <Mail className="size-3 md:size-4 text-[#1e3a6d]" />
        </div>

        <span className="text-xs xl:text-sm">{email}</span>
      </div>
    </div>
  );
}