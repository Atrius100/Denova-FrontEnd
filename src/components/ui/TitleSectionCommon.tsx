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
    className2
}: TitleSectionCommonProps) {
    return (
        <>
            <h2 className={`${classh ? classh : "text-[#1e3a6d]"} mb-4 text-5xl leading-16 font-bold `}>
                {title}
            </h2>

            {subtitle ? (
                <p className={`${className2 ? className2 : "text-xl"}  leading-8 text-gray-500"`}>
                    {subtitle}
                </p>
            ) : null}
        </>
    );
}