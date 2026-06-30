type TitleSectionCommonProps = {
  title?: string;
  subtitle?: string;
  classh?: string;
  className2?: string;
  classA?:string
};

export function TitleSectionCommon({
  title,
  subtitle,
  classh,
  className2,
  classA,
}: TitleSectionCommonProps) {
  return (
    <>
      <h2
  className={`
    ${classh ? classh : "text-dnv-navy"}
    mb-2

    md:mb-4
    font-bold
    leading-tight

    ${classA ? classA : "text-[clamp(1.7rem,7vw,3rem)]"}
  `}
>
  {title}
</h2>

      {subtitle && (
        <p
  className={`
    ${className2 ? className2 : "text-dnv-muted"}

    leading-relaxed
    text-[clamp(0.95rem,3vw,1.15rem)]
  `}
>
  {subtitle}
</p>
      )}
    </>
  );
}