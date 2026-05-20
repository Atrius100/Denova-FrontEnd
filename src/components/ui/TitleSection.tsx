type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="mb-4 text-4xl font-bold text-foreground">
        {title}
      </h2>

      {subtitle ? (
        <p className="text-lg leading-8 text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}