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
    <div className="space-y-3 pt-4">
      {/* Title */}
      <p className="text-sm font-bold text-[#1e3a6d]">
        {title}
      </p>

      {/* Phone */}
      <div className="flex items-center gap-3 text-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#dbe8fb]">
          <Phone className="h-4 w-4 text-[#1e3a6d]" />
        </div>

        <span>{phone}</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3 text-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#dbe8fb]">
          <Mail className="h-4 w-4 text-[#1e3a6d]" />
        </div>

        <span>{email}</span>
      </div>
    </div>
  );
}