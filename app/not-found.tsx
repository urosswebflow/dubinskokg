import { ButtonLink } from "@/components/button-link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="sadrzaj" className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-24">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">Stranica nije pronađena</h1>
        <p className="mt-4 text-muted">
          Tražena adresa ne postoji. Vratite se na početnu i pogledajte usluge dubinskog pranja u Kragujevcu.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Nazad na početnu</ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
