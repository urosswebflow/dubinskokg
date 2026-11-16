type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center">
      <h2 className="text-[2.15rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#b7bdc7] sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
