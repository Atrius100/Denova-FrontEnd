import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-14 w-14 sm:h-20 sm:w-20">
      <Image
        src="/logo.png"
        alt="DENOVA Logo"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}