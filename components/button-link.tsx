import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "btn-primary bg-accent text-white shadow-[0_8px_24px_rgba(47,124,246,0.28)] hover:bg-[#4b90ff] hover:shadow-[0_12px_28px_rgba(47,124,246,0.4)]"
      : "btn-ghost border border-white/15 bg-white/[0.03] text-white hover:border-white/35 hover:bg-white/[0.07]";

  const sizeClass =
    size === "sm"
      ? "h-[3.375rem] gap-[0.55rem] px-[1.3rem] text-[1.22rem] min-[992px]:h-12 min-[992px]:gap-2 min-[992px]:px-6 min-[992px]:text-[15px]"
      : "h-12 gap-2 px-6 text-[15px]";

  const classNames = `inline-flex w-auto items-center justify-center rounded-full font-medium ${sizeClass} ${styles} ${className}`;

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
