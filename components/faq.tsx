"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="pitanja" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="faq-naslov">
      <div className="reveal">
        <div id="faq-naslov">
          <SectionHeading
            title="Česta pitanja"
            subtitle="Odgovori na najčešća pitanja o dubinskom pranju i ostalim uslugama u Kragujevcu."
          />
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-4 px-5 sm:px-6">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          const panelId = `faq-odgovor-${index}`;
          const buttonId = `faq-pitanje-${index}`;
          return (
            <div key={item.question} className="rounded-[22px] border border-white/10 bg-[#0c0e12] px-5 py-1 sm:px-7">
              <h3 className="text-base sm:text-lg">
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-white"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center text-3xl leading-none text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-[15px] leading-relaxed text-muted">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
