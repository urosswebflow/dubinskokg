import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { PhoneIcon } from "@/components/icons";
import { phoneHref } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative -mt-[84px] flex h-dvh items-center overflow-hidden bg-ink min-[992px]:mt-0 min-[992px]:h-auto min-[992px]:min-h-[calc(100vh-84px)]"
    >
      <Image
        src="/images/dubinsko-pranje-kragujevac-hero-mobile.jpg"
        alt="Prednji deo tamnog automobila u studiju, sa upaljenim farovima"
        fill
        priority
        sizes="100vw"
        className="object-contain object-bottom min-[992px]:hidden"
      />
      <Image
        src="/images/dubinsko-pranje-kragujevac-hero.jpg"
        alt="Prednji deo tamnog automobila u studiju, sa upaljenim farovima"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[62%_center] min-[992px]:block"
      />
      <div className="hero-shade absolute inset-0" />
      <div className="hero-floor absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-6 min-[992px]:px-8 min-[992px]:py-20">
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
          <div className="mt-6 flex flex-col items-start gap-2 sm:mt-8 sm:flex-row sm:gap-3">
            <ButtonLink href={phoneHref} size="sm">
              <PhoneIcon className="h-5 w-5 min-[992px]:h-4 min-[992px]:w-4" />
              Pozovite nas
            </ButtonLink>
            <ButtonLink href="/#usluge" variant="ghost" size="sm">
              Pogledaj usluge
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
