import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  business,
  fullAddress,
  navLinks,
  phoneHref,
  services,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink">
      <div className="mx-auto max-w-[1180px] px-5 py-4 pr-20 md:hidden">
        <Logo />
        <p className="mt-2 text-xs text-white/55">
          <a href={phoneHref} className="transition-colors duration-200 hover:text-white">
            {business.phoneDisplay}
          </a>
          <span className="mx-1.5 text-white/25">·</span>
          <span>{business.city}</span>
        </p>
        <p className="mt-1 text-xs text-white/40">© {2026} {business.name}</p>
      </div>
      <div className="mx-auto hidden max-w-[1180px] gap-10 px-5 py-14 sm:px-6 md:grid md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Dubinsko pranje nameštaja i automobila u Kragujevcu, uz pranje vozila, poliranje farova i sređivanje kočnica.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Stranica</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors duration-200 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Usluge</p>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/usluge/${service.slug}`}
                  className="text-sm text-muted transition-colors duration-200 hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden border-t border-white/[0.06] md:block">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-5 py-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {2026} {business.name}</p>
          <p>
            <a href={phoneHref} className="transition-colors duration-200 hover:text-white">
              {business.phoneDisplay}
            </a>
            <span className="mx-2 text-white/20">·</span>
            <span>{fullAddress}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
