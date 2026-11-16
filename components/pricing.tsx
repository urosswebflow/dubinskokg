"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site";

export function Pricing() {
  const scroller = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState({ width: 60, left: 0 });

  const sync = useCallback(() => {
    const element = scroller.current;
    if (!element) return;
    const width = Math.min(100, (element.clientWidth / element.scrollWidth) * 100);
    const max = element.scrollWidth - element.clientWidth;
    const left = max <= 0 ? 0 : (element.scrollLeft / max) * (100 - width);
    setBar({ width, left });
  }, []);

  useEffect(() => {
    const element = scroller.current;
    if (!element) return;
    sync();
    element.addEventListener("scroll", sync, { passive: true });
    const observer = new ResizeObserver(sync);
    observer.observe(element);
    return () => {
      element.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, [sync]);

  const scrollToRatio = (clientX: number) => {
    const element = scroller.current;
    const rail = track.current;
    if (!element || !rail) return;
    const rect = rail.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const max = element.scrollWidth - element.clientWidth;
    element.scrollLeft = ratio * max;
  };

  return (
    <section id="cenovnik" className="scroll-mt-24 py-20 sm:py-28">
      <div className="reveal">
        <SectionHeading title="Cenovnik" subtitle="Okvirne cene usluga u Kragujevcu." />
      </div>
      <div className="price-frame mx-auto mt-12 max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div
          ref={scroller}
          id="cenovnik-kartice"
          className="price-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto"
        >
          {services.map((service) => (
            <article
              key={service.slug}
              className="price-card lift group flex shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0c0e13]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 768px) 30vw, 80vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[1.05rem] font-semibold leading-snug text-white">
                  <Link href={`/usluge/${service.slug}`} className="transition-colors duration-200 hover:text-accent">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
                <p className="mt-6 text-[2.15rem] font-bold leading-none tracking-tight text-accent sm:text-[2.4rem]">
                  {service.price}
                </p>
                <p className="mt-2 text-sm text-white/55">okvirno</p>
              </div>
            </article>
          ))}
        </div>
        <div
          ref={track}
          className="mt-5 h-1.5 cursor-pointer rounded-full bg-white/10"
          role="scrollbar"
          aria-orientation="horizontal"
          aria-controls="cenovnik-kartice"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(bar.left)}
          tabIndex={0}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            scrollToRatio(event.clientX);
          }}
          onPointerMove={(event) => {
            if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
            scrollToRatio(event.clientX);
          }}
          onKeyDown={(event) => {
            const element = scroller.current;
            if (!element) return;
            if (event.key === "ArrowRight") element.scrollBy({ left: 280, behavior: "smooth" });
            if (event.key === "ArrowLeft") element.scrollBy({ left: -280, behavior: "smooth" });
          }}
        >
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${bar.width}%`, marginLeft: `${bar.left}%` }}
          />
        </div>
      </div>
    </section>
  );
}
