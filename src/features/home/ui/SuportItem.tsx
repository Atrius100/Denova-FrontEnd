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
    <div className="space-y-3 border-t border-dnv-border pt-4 dark:border-white/10">
      <p className="text-sm font-bold text-dnv-navy">{title}</p>

      <div className="flex items-center gap-3 text-sm text-dnv-muted">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-dnv-accent/15 dark:bg-blue-950/80">
          <Phone className="h-4 w-4 text-dnv-navy dark:text-blue-300" />
        </div>

        <span dir="ltr" className="break-all text-left">
          {phone}
        </span>
      </div>

      <div className="flex items-center gap-3 text-sm text-dnv-muted">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-dnv-accent/15 dark:bg-blue-950/80">
          <Mail className="h-4 w-4 text-dnv-navy dark:text-blue-300" />
        </div>

        <span dir="ltr" className="break-all text-left">
          {email}
        </span>
      </div>
    </div>
  );
}
