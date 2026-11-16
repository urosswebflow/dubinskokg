import { HeadphonesIcon } from "@/components/icons";
import { business, phoneHref } from "@/lib/site";

export function CallFab() {
  return (
    <a
      href={phoneHref}
      aria-label={`Pozovite nas, ${business.phoneDisplay}`}
      className="call-fab fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_28px_rgba(47,124,246,0.45)] min-[992px]:hidden"
    >
      <span className="call-fab-ring pointer-events-none absolute inset-0 rounded-full bg-accent" aria-hidden="true" />
      <HeadphonesIcon className="relative h-7 w-7" />
    </a>
  );
}
