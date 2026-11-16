import Link from "next/link";
import { CarMark } from "@/components/icons";

export function Logo() {
  return (
    <Link
      href="/#pocetna"
      className="group inline-flex shrink-0 flex-col items-center text-white"
      aria-label="Nemanja Detailing, početna"
    >
      <CarMark className="h-[18px] w-[46px] transition-transform duration-300 group-hover:scale-105 sm:h-5 sm:w-[54px]" />
      <span className="mt-1 text-[11px] font-bold leading-none tracking-[0.18em] sm:text-[12px] sm:tracking-[0.2em]">
        NEMANJA
      </span>
      <span className="mt-1 text-[8px] font-medium leading-none tracking-[0.28em] text-white/60 sm:tracking-[0.32em]">
        DETAILING
      </span>
    </Link>
  );
}
