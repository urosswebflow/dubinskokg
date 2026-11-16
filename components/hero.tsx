import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { PhoneIcon } from "@/components/icons";
import { phoneHref } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative flex min-h-[680px] items-center overflow-hidden lg:min-h-[calc(100vh-84px)]"
    >
      <Image
        src="/images/dubinsko-pranje-kragujevac-hero.jpg"
        alt="Prednji deo tamnog automobila u studiju, sa upaljenim farovima"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/75 lg:via-ink/80 lg:to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="hero-copy max-w-[680px]">
          <h1 className="text-[2.15rem] font-bold leading-[0.95] tracking-[-0.035em] text-white min-[480px]:text-5xl sm:text-6xl lg:text-[4.7rem]">
            <span className="block">Nemanja Detailing</span>
            <span className="block">Dubinsko pranje</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-accent sm:text-2xl">
            Dubinsko pranje u Kragujevcu
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/80 sm:text-base sm:leading-8">
            <strong className="font-semibold text-white">Nemanja Detailing</strong> radi{" "}
            <strong className="font-semibold text-white">dubinsko pranje u Kragujevcu</strong> — nameštaja,
            vozila i enterijera automobila. Peremo karoseriju, čistimo sedišta i patosnice, poliramo farove
            i sređujemo kočnice. Ako vam treba dubinsko pranje automobila ili nameštaja, pozovite i dogovorite termin.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={phoneHref}>
              <PhoneIcon className="h-4 w-4" />
              Pozovite nas
            </ButtonLink>
            <ButtonLink href="/#usluge" variant="ghost">
              Pogledaj usluge
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
