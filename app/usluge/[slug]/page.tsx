import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink } from "@/components/button-link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PhoneIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { getService, phoneHref, serviceJsonLd, services, siteUrl } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: siteUrl ? { canonical: `/usluge/${service.slug}` } : undefined,
    openGraph: {
      title: `${service.metaTitle} | Nemanja Detailing`,
      description: service.metaDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  return (
    <>
      <Header />
      <Suspense fallback={<ServiceFallback />}>
        <ServiceContent params={params} />
      </Suspense>
      <Footer />
    </>
  );
}

async function ServiceContent({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <main id="sadrzaj" className="mx-auto max-w-[1180px] px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <nav aria-label="Putanja" className="text-sm text-white/50">
          <Link href="/" className="transition-colors duration-200 hover:text-white">
            Početna
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <Link href="/#usluge" className="transition-colors duration-200 hover:text-white">
            Usluge
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-white/80">{service.title}</span>
        </nav>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
              {service.h1}
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-2.5">
              {service.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-[15px] text-[#d7dbe3]">
                  <span className="text-accent" aria-hidden="true">
                    ›
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={phoneHref}>
                <PhoneIcon className="h-4 w-4" />
                Pozovite nas
              </ButtonLink>
              <ButtonLink href="/#kontakt" variant="ghost">
                Kontakt
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="mt-20" aria-labelledby="ostale-usluge">
          <h2 id="ostale-usluge" className="text-3xl font-bold tracking-tight text-white">
            Ostale usluge u Kragujevcu
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/usluge/${item.slug}`}
                className="lift rounded-[22px] border border-white/[0.08] bg-panel p-5"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-accent">Saznajte više</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function ServiceFallback() {
  return (
    <main id="sadrzaj" className="mx-auto max-w-[1180px] px-5 py-16 sm:px-6 lg:px-8">
      <div className="h-4 w-48 animate-pulse rounded bg-white/10" />
      <div className="mt-8 h-14 w-full max-w-xl animate-pulse rounded bg-white/10" />
      <div className="mt-6 h-36 max-w-xl animate-pulse rounded bg-white/5" />
    </main>
  );
}
