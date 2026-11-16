"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { ChevronIcon, PhoneIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { navLinks, phoneHref, services } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ink/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : "border-white/[0.06]"
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-[1180px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 min-[992px]:flex" aria-label="Glavna navigacija">
          {navLinks.map((link) =>
            link.label === "Usluge" ? (
              <div key={link.href} className="group relative">
                <Link href={link.href} className="nav-link inline-flex items-center gap-1 text-[15px] text-white/90">
                  Usluge
                  <ChevronIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute top-full left-1/2 z-20 w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-white/10 bg-[#10131a] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/usluge/${service.slug}`}
                        className="block rounded-xl px-3 py-2.5 text-sm text-white/85 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      href="/#usluge"
                      className="mt-1 block rounded-xl px-3 py-2.5 text-sm font-medium text-accent transition-colors duration-200 hover:bg-white/[0.06]"
                    >
                      Sve usluge
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="nav-link text-[15px] text-white/90">
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink href={phoneHref} className="h-10 px-3.5 text-sm sm:h-11 sm:px-5 sm:text-[15px]">
            <PhoneIcon className="h-4 w-4" />
            Pozovite
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/5 min-[992px]:hidden"
            aria-expanded={open}
            aria-controls="mobilni-meni"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-white transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-white transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobilni-meni"
        className={`grid transition-[grid-template-rows] duration-300 min-[992px]:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className={`overflow-y-auto border-t border-white/10 bg-ink px-4 py-4 sm:px-6 ${
              open ? "min-h-[calc(100dvh-84px)]" : ""
            }`}
            aria-label="Mobilna navigacija"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) =>
                link.label === "Usluge" ? (
                  <li key={link.href} className="border-b border-white/[0.06]">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3.5 text-left text-base text-white"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((value) => !value)}
                    >
                      Usluge
                      <ChevronIcon className={`h-5 w-5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ${servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <ul className="pb-3 pl-2">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/usluge/${service.slug}`}
                                className="block py-2 text-sm text-white/75"
                                onClick={close}
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link href="/#usluge" className="block py-2 text-sm text-accent" onClick={close}>
                              Sve usluge
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={link.href} className="border-b border-white/[0.06]">
                    <Link href={link.href} className="block py-3.5 text-base text-white" onClick={close}>
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <ButtonLink href={phoneHref} className="mt-4 w-full">
              <PhoneIcon className="h-4 w-4" />
              Pozovite nas
            </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
