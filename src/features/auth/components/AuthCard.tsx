import { ToothPattern } from "@/components/ui/ToothBattren";
import { Logo } from "./Logo";


type AuthCardProps = {
  title: string;
  children: React.ReactNode;
  compact?: boolean;
  minimal?: boolean;
};

export function AuthCard({ title, children, compact = false, minimal = false }: AuthCardProps) {
  return (
    <main className="relative flex h-dvh max-h-dvh w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#f3f9ff_0%,#ffffff_52%,#eef7ff_100%)] p-4">
      <ToothPattern />
      <section
        className={
          "relative z-10 w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 shadow-denova backdrop-blur-xl " +
          (compact ? "p-5 sm:p-7" : "p-6 sm:p-8")
        }
      >
        <div className={minimal ? " flex justify-center" : "flex justify-center"}>
          <Logo />
        </div>
        {title ? <h1 className="mb-5 text-center text-2xl font-bold tracking-tight text-[var(--denova-primary)]">{title}</h1> : null}
        {children}
      </section>
    </main>
  );
}