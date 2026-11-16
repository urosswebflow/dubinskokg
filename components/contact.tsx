import { InstagramIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import {
  business,
  fullAddress,
  mapsEmbedUrl,
  mapsUrl,
  phoneHref,
} from "@/lib/site";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-20 sm:py-28">
      <div className="reveal">
        <SectionHeading
          title="Kontakt"
          subtitle="Pozovite ili pišite na Instagram i zakažite termin. Recite šta treba da se sredi — nameštaj, vozilo, enterijer, farovi ili kočnice."
        />
      </div>
      <div className="mx-auto mt-14 grid max-w-[1180px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col gap-8 lg:pl-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10243f] text-accent">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-white">Telefon</p>
              <a href={phoneHref} className="text-lg text-white/90 transition-colors duration-200 hover:text-accent">
                {business.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10243f] text-accent">
              <InstagramIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-white">Instagram</p>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white/90 transition-colors duration-200 hover:text-accent"
              >
                @{business.instagramHandle}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10243f] text-accent">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-white">Adresa</p>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-white/90 transition-colors duration-200 hover:text-accent">
                {fullAddress}
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-[24px] border border-white/10">
          <iframe
            title="Mapa — Nemanja Detailing, Kragujevac"
            src={mapsEmbedUrl}
            className="map-dark h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-4 left-4 z-10 w-[min(100%-2rem,280px)] rounded-2xl border border-white/10 bg-[#14161c]/95 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <p className="font-semibold text-white">{business.street}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/70">{fullAddress}</p>
            <div className="mt-3">
              <ButtonLink href={mapsUrl} className="h-10 px-4 text-sm">
                <MapPinIcon className="h-4 w-4" />
                Otvori u Mapama
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
