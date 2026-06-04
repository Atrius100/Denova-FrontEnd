
export function Footer() {


  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-gradient-to-br from-[#1e3a6d] to-[#0f2540]">
      <p className="my-7 text-center font-medium text-white/75">
        جميع الحقوق محفوظة &copy; {currentYear} Denova .
      </p>
    </footer>
  );

}

