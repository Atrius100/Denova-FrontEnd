import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="DENOVA Logo"
      width={100}
      height={100}
      priority
      className="h-[100px] w-auto object-contain"
    />
  );
}