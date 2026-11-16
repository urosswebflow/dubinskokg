import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ServiceGlyph } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="usluge" className="scroll-mt-24 py-20 sm:py-28">
      <div className="reveal">
        <SectionHeading
          title="Usluge"
          subtitle="Dubinsko pranje nameštaja i automobila, pranje vozila, poliranje farova i sređivanje kočnica u Kragujevcu."
        />
      </div>
      <div className="mx-auto mt-12 grid max-w-[1180px] gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
        {services.map((service) => (
          <article
            key={service.slug}
            className="lift reveal group rounded-[22px] border border-white/[0.06] bg-panel p-3 sm:p-4"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="px-2 pt-5 pb-3 sm:px-4 sm:pb-4">
              <div className="flex items-center gap-2.5">
                <ServiceGlyph
                  name={service.icon}
                  className={`icon-pop h-6 w-6 shrink-0 ${service.iconClass}`}
                />
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[15px] leading-snug text-[#d7dbe3]">
                    <span className="mt-px text-accent" aria-hidden="true">
                      ›
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-semibold text-white">{service.result}</p>
              <Link
                href={`/usluge/${service.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-accent transition-colors duration-200 hover:text-[#6aa4ff]"
              >
                Saznajte više
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
