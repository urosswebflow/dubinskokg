import type { ServiceIcon } from "@/lib/site";

type IconProps = {
  className?: string;
};

export function CarMark({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 28"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 19.5h4.2l2.4-6.2c.7-1.7 2-2.8 4.1-3.1l8.2-1.1c2-.3 3.6.4 5 1.8l4.2 4.1h11.2c1.8 0 3 1 3.6 2.4l1.1 2.1H58"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 19.5h19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="18.2" cy="19.6" r="3.15" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="45.8" cy="19.6" r="3.15" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M24.5 13.2h7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M48 7.2c1.3-1.8 3.4-1.8 4.6.2"
        stroke="#2f7cf6"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M8.2 4.8h2.1l1.2 3-1.5 1.1a12.2 12.2 0 0 0 5.1 5.1l1.1-1.5 3 1.2v2.1c0 .8-.6 1.5-1.4 1.6A14.2 14.2 0 0 1 6.6 6.2c.1-.8.8-1.4 1.6-1.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeadphonesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 3.2a8.1 8.1 0 0 0-8.1 8.1v5.4c0 1 .8 1.8 1.8 1.8h1.5c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1H5.2a6.9 6.9 0 0 1 13.6 0H16.8c-.6 0-1 .4-1 1v4.5c0 .6.4 1 1 1h1.5c1 0 1.8-.8 1.8-1.8v-5.4A8.1 8.1 0 0 0 12 3.2Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 20s6-5.1 6-9.2A6 6 0 0 0 6 10.8C6 14.9 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.6" r="1.7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SofaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 11.5V9.2A2.2 2.2 0 0 1 7.2 7h9.6A2.2 2.2 0 0 1 19 9.2v2.3M4 12.5h16v3.2a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 15.7v-3.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7 17.5V19M17 17.5V19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 14.5 5.6 10a2 2 0 0 1 1.9-1.3h8.2A2 2 0 0 1 17.6 10L19.5 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3.5 14.5h17V17a1 1 0 0 1-1 1h-1.2M3.5 14.5V17a1 1 0 0 0 1 1H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7.2" cy="17.2" r="1.3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="17.2" r="1.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function SeatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 4.5h5.2A2.8 2.8 0 0 1 16 7.3V14H7.2A2.2 2.2 0 0 1 5 11.8V8.2A3.7 3.7 0 0 1 8 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7 14h12.2a2 2 0 0 1 0 4H9.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 18v1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function LightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 14.5c2.2-3.4 5.2-5 8.2-5 3.6 0 6.4 2 8 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.5 14.5h11c.6 1.5.4 2.8-.8 3.6-3.2 2-6.2 2-9.4 0-1.2-.8-1.4-2.1-.8-3.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 5v2.2M12 16.8V19M5 12h2.2M16.8 12H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ToolIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M14.2 6.2a3.2 3.2 0 0 0-4.3 4.1L4.6 15.6a1.6 1.6 0 0 0 2.2 2.2l5.3-5.3a3.2 3.2 0 0 0 4.1-4.3L14 10.4 12 8.4l2.2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M3.5 12S6.8 7 12 7s8.5 5 8.5 5-3.3 5-8.5 5-8.5-5-8.5-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 4.2 18.5 6.6v5.2c0 3.6-2.6 6.2-6.5 8-3.9-1.8-6.5-4.4-6.5-8V6.6L12 4.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M13 3.5 6.5 13.2h5.2L10.2 20.5 17.5 10.2h-5.1L13 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const serviceIcons = {
  sofa: SofaIcon,
  car: CarIcon,
  seat: SeatIcon,
  light: LightIcon,
  brake: BrakeIcon,
};

export function ServiceGlyph({
  name,
  className,
}: {
  name: ServiceIcon;
  className?: string;
}) {
  const Icon = serviceIcons[name];
  return <Icon className={className} />;
}

const reasonIcons = {
  tool: ToolIcon,
  eye: EyeIcon,
  shield: ShieldIcon,
  bolt: BoltIcon,
};

export function ReasonGlyph({
  name,
  className,
}: {
  name: keyof typeof reasonIcons;
  className?: string;
}) {
  const Icon = reasonIcons[name];
  return <Icon className={className} />;
}
