/**
 * Svi poslovni podaci i tekstovi su na jednom mestu.
 * Privremena adresa — zameniti tačnom lokacijom kada bude poznata.
 * Slike su u public/images. Dovoljno je zameniti fajl ili putanju ovde.
 * Konačni domen: postavite NEXT_PUBLIC_SITE_URL (npr. https://primer.rs)
 * da bi kanonski URL, Open Graph i sitemap dobili apsolutne adrese.
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const business = {
  name: "Nemanja Detailing",
  headline: "Nemanja Detailing – Dubinsko pranje",
  city: "Kragujevac",
  country: "Srbija",
  street: "Kralja Petra I 15",
  postalCode: "34000",
  phoneDisplay: "062 829 6958",
  phoneTel: "+381628296958",
  instagram: "https://www.instagram.com/dubinsko_pranje_kg_nemanja",
  instagramHandle: "dubinsko_pranje_kg_nemanja",
} as const;

export const fullAddress = `${business.street}, ${business.city} ${business.postalCode}, ${business.country}`;

export const mapsQuery = `${business.street}, ${business.postalCode} ${business.city}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=16&output=embed`;

export const phoneHref = `tel:${business.phoneTel}`;

export type ServiceIcon = "sofa" | "car" | "seat" | "light" | "brake";

export type Service = {
  slug: string;
  title: string;
  h1: string;
  summary: string;
  result: string;
  points: string[];
  paragraphs: string[];
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  icon: ServiceIcon;
  iconClass: string;
  /** Okvirna cena za cenovnik. Zameniti tačnim iznosom kada bude poznat. */
  price: string;
};

export const services: Service[] = [
  {
    slug: "dubinsko-pranje-namestaja",
    title: "Dubinsko pranje nameštaja",
    h1: "Dubinsko pranje nameštaja u Kragujevcu",
    summary:
      "Dubinsko pranje tkanine i tapacirunga kada površinsko usisavanje više nije dovoljno. Radimo garniture, fotelje, stolice i dušeke u Kragujevcu.",
    result: "Nameštaj se pere u dubinu, ne samo po površini.",
    points: [
      "Dubinsko pranje tkanine i tapacirunga",
      "Obrada fleka na presvlakama",
      "Fotelje, garniture, stolice i dušeci",
      "Pristup prilagođen materijalu",
    ],
    paragraphs: [
      "Dubinsko pranje nameštaja u Kragujevcu ima smisla kada se prašina, fleke i mirisi zadrže u tkanini, a običan usisivač više ne pomaže. Nemanja Detailing pere garniture, fotelje, stolice i dušeke tako da se čisti i sloj ispod površine.",
      "Svaki komad gledamo posebno. Tkanina, boja i stepen zaprljanosti nisu isti, pa ni način rada nije isti. Pre početka dogovorimo šta tačno treba oprati.",
      "Ako vam treba dubinsko pranje nameštaja, pozovite i recite koji komad je u pitanju i u kakvom je stanju. Okvirna cena je u cenovniku.",
    ],
    metaTitle: "Dubinsko pranje nameštaja Kragujevac",
    metaDescription:
      "Dubinsko pranje nameštaja u Kragujevcu: garniture, fotelje, stolice i dušeci. Nemanja Detailing pere tkaninu u dubinu. Pozovite 062 829 6958.",
    image: "/images/dubinsko-pranje-namestaja-kragujevac.jpg",
    imageAlt:
      "Dubinsko pranje svetle garniture mašinom za ekstrakciju tkanine",
    icon: "sofa",
    iconClass: "text-amber-400",
    price: "40–80€",
  },
  {
    slug: "pranje-vozila",
    title: "Pranje vozila",
    h1: "Pranje automobila u Kragujevcu",
    summary:
      "Ručno pranje vozila: temeljno uklanjanje nečistoća sa karoserije, felni i guma. Tehnika pranja bira se tako da se lak nepotrebno ne grebe.",
    result: "Karoserija, felne i gume oprane i osušene.",
    points: [
      "Predpranje i uklanjanje grubih nečistoća",
      "Ručno pranje karoserije",
      "Čišćenje felni i guma",
      "Sušenje vozila",
    ],
    paragraphs: [
      "Pranje automobila u Kragujevcu kod Nemanja Detailinga obuhvata ručno pranje karoserije, felni i guma. Prvo se skida gruba nečistoća, zatim se vozilo pere i suši tako da na laku ostane što manje tragova.",
      "Ovo nije prolazak kroz automatsku perionicu. Radimo deo po deo, mirnije, da se lak ne bi nepotrebno grebao tokom pranja.",
      "Pozovite kada želite da se vozilo opere u Kragujevcu. Recite koji je automobil u pitanju i da li uz pranje treba i enterijer, farovi ili kočnice.",
    ],
    metaTitle: "Pranje automobila Kragujevac",
    metaDescription:
      "Ručno pranje automobila u Kragujevcu: karoserija, felne i gume. Nemanja Detailing pere vozilo pažljivo, bez automatske perionice. Pozovite 062 829 6958.",
    image: "/images/pranje-vozila-kragujevac.jpg",
    imageAlt: "Ručno pranje tamne karoserije gustom penom i rukavicama",
    icon: "car",
    iconClass: "text-red-400",
    price: "15–35€",
  },
  {
    slug: "dubinsko-ciscenje-enterijera",
    title: "Dubinsko čišćenje enterijera",
    h1: "Dubinsko čišćenje enterijera automobila u Kragujevcu",
    summary:
      "Detaljno čišćenje enterijera: sedišta, patosnice, plastika i mesta koja se u svakodnevnoj vožnji najviše zaprljaju.",
    result: "Enterijer je detaljno očišćen, od sedišta do patosnica.",
    points: [
      "Dubinsko pranje sedišta i patosnica",
      "Čišćenje plastike i unutrašnjih površina",
      "Obrada teže dostupnih mesta",
      "Čišćenje površina na kojima se zadržavaju mirisi",
    ],
    paragraphs: [
      "Dubinsko čišćenje enterijera automobila u Kragujevcu obuhvata sedišta, patosnice, plastiku i mesta do kojih se u redovnom brisanju teško stiže. Traži se posle zime, posle kućnih ljubimaca, pre prodaje vozila ili kada enterijer više ne deluje sveže.",
      "Ne radimo samo usisavanje. Tkanina i patosnice peru se u dubinu, a plastika i ostale unutrašnje površine čiste se posebno, prema materijalu.",
      "Dubinsko pranje automobila i čišćenje enterijera možete dogovoriti istim pozivom. Recite šta je najprljavije — sedišta, patosnice ili ceo enterijer.",
    ],
    metaTitle: "Dubinsko čišćenje enterijera automobila Kragujevac",
    metaDescription:
      "Dubinsko čišćenje enterijera automobila u Kragujevcu: sedišta, patosnice i plastika. Nemanja Detailing. Pozovite 062 829 6958 i dogovorite termin.",
    image: "/images/dubinsko-ciscenje-enterijera-kragujevac.jpg",
    imageAlt:
      "Dubinsko čišćenje crnih sedišta u enterijeru automobila uz plavo svetlo",
    icon: "seat",
    iconClass: "text-amber-300",
    price: "50–100€",
  },
  {
    slug: "poliranje-farova",
    title: "Poliranje farova",
    h1: "Poliranje farova u Kragujevcu",
    summary:
      "Poliranje farova kada plastika postane matirana i svetlost slabije prolazi. Prednja i zadnja svetla, bez zamene fara ako je poliranje dovoljno.",
    result: "Plastika fara se polira da svetlost ponovo jasnije prolazi.",
    points: [
      "Poliranje zamućenih farova",
      "Prednja i zadnja svetla",
      "Skidanje površinskog matiranja",
      "Pažljiva obrada plastike",
    ],
    paragraphs: [
      "Poliranje farova u Kragujevcu radi se kada plastika vremenom požuti ili matira, pa svetlost slabije izlazi iz fara. Često je dovoljno poliranje, bez zamene kompletnog svetla.",
      "Radimo prednja i zadnja svetla, prema stanju plastike. Koliko će far posle obrade biti bistar zavisi od toga koliko je površina već istrošena — to se vidi na licu mesta.",
      "Poliranje farova možete spojiti sa pranjem vozila ili čišćenjem enterijera. Pozovite i recite koji automobil vozite.",
    ],
    metaTitle: "Poliranje farova Kragujevac",
    metaDescription:
      "Poliranje farova u Kragujevcu kada plastika matira i svetlost slabije prolazi. Nemanja Detailing obrađuje prednja i zadnja svetla. Pozovite 062 829 6958.",
    image: "/images/poliranje-farova-kragujevac.jpg",
    imageAlt: "Poliranje zamućenog fara automobila sunđerastim diskom",
    icon: "light",
    iconClass: "text-sky-400",
    price: "25–45€",
  },
  {
    slug: "sredjivanje-kocnica",
    title: "Sređivanje kočnica",
    h1: "Sređivanje kočnica u Kragujevcu",
    summary:
      "Čišćenje kočionih čeljusti i uklanjanje prašine i naslaga. Nega izgleda kočnica uz felne, a ne servis kočionog sistema.",
    result: "Čeljusti su očišćene od naslaga i urednije izgledaju.",
    points: [
      "Čišćenje kočionih čeljusti",
      "Uklanjanje prašine i naslaga",
      "Sređivanje izgleda kočnica",
      "Radi se uz felne i točkove",
    ],
    paragraphs: [
      "Sređivanje kočnica u Kragujevcu, u okviru detailinga, znači čišćenje čeljusti i skidanje prašine i naslaga koje se hvataju uz točak. To je nega izgleda, uz felne.",
      "Ova usluga nije zamena pločica, diskova niti servis kočionog sistema. Ako kočnice treba da se provere mehanički, to se radi u servisu, ne ovde.",
      "Sređivanje kočnica najčešće ide uz pranje vozila. Kada zovete, recite da li želite samo kočnice ili i pranje felni i karoserije.",
    ],
    metaTitle: "Sređivanje kočnica Kragujevac",
    metaDescription:
      "Sređivanje kočnica u Kragujevcu: čišćenje čeljusti i uklanjanje prašine. Nemanja Detailing. Nije mehanički servis kočnica. Pozovite 062 829 6958.",
    image: "/images/sredjivanje-kocnica-kragujevac.jpg",
    imageAlt: "Čišćenje kočione čeljusti krpom kroz alu felnu",
    icon: "brake",
    iconClass: "text-zinc-300",
    price: "20–40€",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const reasons = [
  {
    title: "Profesionalna oprema",
    text: "Za dubinsko pranje i negu vozila koristimo opremu namenjenu tkanini, plastici i karoseriji.",
    icon: "tool" as const,
  },
  {
    title: "Precizan rad",
    text: "Svaku površinu tretiramo posebno, deo po deo, umesto da prelazimo preko svega na isti način.",
    icon: "eye" as const,
  },
  {
    title: "Pažljiv pristup",
    text: "Pritisak, sredstvo i tehniku biramo prema materijalu — laku, tkanini, koži ili plastici.",
    icon: "shield" as const,
  },
  {
    title: "Direktan dogovor",
    text: "Pozovete, kažete šta treba srediti i dogovorimo termin u Kragujevcu.",
    icon: "bolt" as const,
  },
];

export const comparisons = [
  {
    before: "/images/galerija-kokpit-pre.jpg",
    after: "/images/galerija-kokpit-posle.jpg",
    beforeAlt: "Prljav enterijer automobila pre dubinskog pranja",
    afterAlt: "Očišćen enterijer automobila posle dubinskog pranja",
  },
  {
    before: "/images/galerija-patosnica-pre.jpg",
    after: "/images/galerija-patosnica-posle.jpg",
    beforeAlt: "Zaprljana patosnica automobila pre pranja",
    afterAlt: "Očišćena patosnica automobila posle pranja",
  },
  {
    before: "/images/galerija-sediste-pre.jpg",
    after: "/images/galerija-sediste-posle.jpg",
    beforeAlt: "Prašina na tkanini sedišta pre dubinskog pranja",
    afterAlt: "Sedište od tkanine posle dubinskog pranja",
  },
  {
    before: "/images/galerija-namestaj-pre.jpg",
    after: "/images/galerija-namestaj-posle.jpg",
    beforeAlt: "Fleka na bež presvlaci nameštaja pre dubinskog pranja",
    afterAlt: "Presvlaka nameštaja posle dubinskog pranja",
  },
];

export const faqs = [
  {
    question: "Šta obuhvata dubinsko pranje nameštaja?",
    answer:
      "Dubinsko pranje nameštaja u Kragujevcu obuhvata tkaninu i tapacirung garnitura, fotelja, stolica i dušeka. Čisti se sloj ispod površine, ne samo prašina koja se skine usisivačem. Pre rada kažete koji komad treba oprati.",
  },
  {
    question: "Šta obuhvata dubinsko čišćenje enterijera automobila?",
    answer:
      "Ulaze sedišta, patosnice, plastika i teže dostupna mesta u kabini. Tkanina i patosnice peru se u dubinu. Nije u pitanju samo usisavanje.",
  },
  {
    question: "Da li radite pranje vozila, poliranje farova i sređivanje kočnica?",
    answer:
      "Da. Pored dubinskog pranja nameštaja i enterijera, radimo ručno pranje vozila, poliranje farova i sređivanje kočnica. Sve usluge su u Kragujevcu. Sređivanje kočnica ovde znači čišćenje čeljusti, ne mehanički servis.",
  },
  {
    question: "Kako mogu da zakažem termin?",
    answer: `Pozovite ${business.phoneDisplay} ili pišite na Instagram @${business.instagramHandle}. Recite koja usluga vam treba i dogovorimo termin.`,
  },
  {
    question: "Gde radite dubinsko pranje u Kragujevcu?",
    answer: `Nalazimo se u Kragujevcu, ${business.street}. Tačan prilaz možete otvoriti na mapi u delu Kontakt.`,
  },
  {
    question: "Da li su cene navedene na sajtu?",
    answer:
      "U cenovniku su okvirne cene. Tačan iznos zavisi od veličine vozila ili nameštaja i od toga šta sve ulazi u rad.",
  },
];

export const navLinks = [
  { href: "/#pocetna", label: "Početna" },
  { href: "/#usluge", label: "Usluge" },
  { href: "/#zasto-mi", label: "Zašto mi" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#cenovnik", label: "Cenovnik" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.street,
  addressLocality: business.city,
  postalCode: business.postalCode,
  addressCountry: "RS",
};

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: business.name,
        alternateName: business.headline,
        description:
          "Dubinsko pranje nameštaja i automobila, pranje vozila, poliranje farova i sređivanje kočnica u Kragujevcu.",
        telephone: business.phoneTel,
        image: siteUrl
          ? `${siteUrl}/images/dubinsko-pranje-kragujevac-hero.jpg`
          : "/images/dubinsko-pranje-kragujevac-hero.jpg",
        address: postalAddress,
        areaServed: {
          "@type": "City",
          name: business.city,
        },
        sameAs: [business.instagram],
        ...(siteUrl ? { url: siteUrl } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usluge",
          itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              areaServed: business.city,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function serviceJsonLd(service: Service) {
  const pageUrl = siteUrl ? `${siteUrl}/usluge/${service.slug}` : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.h1,
        serviceType: service.title,
        description: service.metaDescription,
        areaServed: {
          "@type": "City",
          name: business.city,
        },
        provider: {
          "@type": "LocalBusiness",
          name: business.name,
          telephone: business.phoneTel,
          address: postalAddress,
        },
        ...(pageUrl ? { url: pageUrl } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Početna",
            ...(siteUrl ? { item: siteUrl } : {}),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Usluge",
            ...(siteUrl ? { item: `${siteUrl}/#usluge` } : {}),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            ...(pageUrl ? { item: pageUrl } : {}),
          },
        ],
      },
    ],
  };
}
