"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { comparisons } from "@/lib/site";

function CompareSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [value, setValue] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const moveTo = (clientX: number) => {
    const element = frame.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(92, Math.max(8, next)));
  };

  return (
    <div
      ref={frame}
      className="relative aspect-[4/3] w-[82vw] max-w-[440px] shrink-0 snap-center overflow-hidden rounded-[22px] bg-black sm:w-[400px]"
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
      aria-label={`${beforeAlt}. ${afterAlt}.`}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setValue((current) => Math.max(8, current - 4));
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          setValue((current) => Math.min(92, current + 4));
        }
      }}
    >
      <Image src={before} alt={beforeAlt} fill sizes="440px" className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${value}%)` }}>
        <Image src={after} alt="" fill sizes="440px" className="object-cover" draggable={false} />
      </div>
      <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-[#111318]">
        Pre
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-[#111318]">
        Posle
      </span>
      <div
        className="absolute inset-y-0 z-10 w-11 -translate-x-1/2 cursor-ew-resize touch-none"
        style={{ left: `${value}%` }}
        onPointerDown={(event) => {
          drag.current = true;
          event.currentTarget.setPointerCapture(event.pointerId);
          moveTo(event.clientX);
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          moveTo(event.clientX);
        }}
        onPointerUp={(event) => {
          drag.current = false;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={() => {
          drag.current = false;
        }}
      >
        <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white" />
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <svg viewBox="0 0 18 18" className="h-[18px] w-[18px]" aria-hidden="true">
            <path d="M7 4 3 9l4 5M11 4l4 5-4 5" fill="none" stroke="#2f7cf6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function Gallery() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: number) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.current?.scrollBy({
      left: direction * 420,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <section id="galerija" className="scroll-mt-24 py-20 sm:py-28">
      <div className="reveal">
        <SectionHeading
          title="Galerija"
          subtitle="Pomerite klizač i uporedite izgled pre i posle dubinskog pranja."
        />
      </div>
      <div className="mx-auto mt-8 hidden max-w-[1180px] justify-end gap-2 px-5 sm:flex sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition duration-200 hover:border-white/40 hover:bg-white/5"
          aria-label="Prethodne fotografije"
          onClick={() => scrollByCard(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition duration-200 hover:border-white/40 hover:bg-white/5"
          aria-label="Sledeće fotografije"
          onClick={() => scrollByCard(1)}
        >
          ›
        </button>
      </div>
      <div
        ref={scroller}
        className="mt-6 flex gap-4 overflow-x-auto px-[7vw] pb-2 snap-x snap-mandatory [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {comparisons.map((item) => (
          <CompareSlider key={item.before} {...item} />
        ))}
      </div>
    </section>
  );
}
