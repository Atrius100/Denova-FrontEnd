
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
    <main className="relative flex h-dvh max-h-dvh w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#f3f9ff_0%,#ffffff_52%,#eef7ff_100%)] p-3 md:p-5">
      <ToothPattern
        patternId="auth-pattern"
        stroke="#cbd5e1"
        opacity={0.25}
      />
      <section
        className={
          "relative z-10 w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 shadow-[0_25px_80px_rgba(30,58,109,0.18)] backdrop-blur-xl " +
          (compact ? "p-4 sm:p-5" : "p-4 sm:p-5")
        }
      >
        <div className={minimal ? " flex justify-center" : "flex justify-center"}>
          <Logo />
        </div>
        {title ? <h1 className="mt-0.5 lg:mt-1 mb-2 md:mb-4 text-center text-lg md:text-2xl font-bold tracking-tight text-[var(--denova-primary)]">{title}</h1> : null}
        {children}
      </section>
    </main>
  )

}