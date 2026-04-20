export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm">
      
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row-reverse items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="text-xl font-bold text-[var(--denova-primary)] dark:text-white">
          DENOVA
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-500 dark:text-slate-400">
          <a href="#" className="hover:text-[var(--denova-primary)] transition">
            سياسة الخصوصية
          </a>

          <a href="#" className="hover:text-[var(--denova-primary)] transition">
            شروط الخدمة
          </a>

          <a href="#" className="hover:text-[var(--denova-primary)] transition">
            اتصل بنا
          </a>

          <a href="#" className="hover:text-[var(--denova-primary)] transition">
            الأسئلة الشائعة
          </a>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 dark:text-slate-400 text-center">
          © {new Date().getFullYear()} دينوفا. جميع الحقوق محفوظة.
        </div>

      </div>
    </footer>
  );
}