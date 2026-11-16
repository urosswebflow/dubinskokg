import { ReasonGlyph } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { reasons } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="zasto-mi" className="scroll-mt-24 py-20 sm:py-28">
      <div className="reveal">
        <SectionHeading
          title="Zašto mi"
          subtitle="Kako pristupamo vozilu i nameštaju kada dogovorimo rad u Kragujevcu."
        />
      </div>
      <div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-4 gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="lift rounded-[22px] border border-white/[0.08] bg-[#0c0e13] px-2 py-5 text-center sm:px-5 sm:py-8"
          >
            <div className="icon-pop mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#10243f] text-accent sm:h-14 sm:w-14">
              <ReasonGlyph name={reason.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mt-4 text-[13px] font-semibold text-white sm:mt-5 sm:text-lg">{reason.title}</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-muted sm:text-sm">{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
