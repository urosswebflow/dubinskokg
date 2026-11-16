import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "btn-primary bg-accent text-white shadow-[0_8px_24px_rgba(47,124,246,0.28)] hover:bg-[#4b90ff] hover:shadow-[0_12px_28px_rgba(47,124,246,0.4)]"
      : "btn-ghost border border-white/15 bg-white/[0.03] text-white hover:border-white/35 hover:bg-white/[0.07]";

  const classNames = `inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium ${styles} ${className}`;

  if (href.startsWith("tel:") || href.startsWith("http")) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classNames}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
