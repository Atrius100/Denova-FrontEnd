type TitleSectionCommonProps = {
  title?: string;
  subtitle?: string;
  classh?: string;
  className2?: string;
};

export function TitleSectionCommon({
  title,
  subtitle,
  classh,
  className2,
}: TitleSectionCommonProps) {
  const titleCls =
    classh ??
    "text-dnv-navy text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.65rem]";
  const subCls =
    className2 ?? "text-lg text-dnv-muted md:text-xl dark:text-neutral-400";

  return (
    <div className="flex justify-center items-center flex-col"  >
      <h2 className={`${titleCls} mb-4 leading-tight max-w-[40ch]`}>
        {title}
      </h2>

      {subtitle ? (
        <p className={`${subCls} max-w-3xl leading-relaxed text-pretty`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
