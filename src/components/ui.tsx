"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { useLocaleHref } from "@/lib/i18n";

export function Button({
  children,
  href,
  variant = "solid",
  className = "",
  ...props
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "ghost" | "light";
} & Omit<ComponentProps<"a">, "href">) {
  const localize = useLocaleHref();
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 will-change-transform";
  const styles = {
    solid:
      "bg-accent text-white hover:bg-accent-ink hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(47,109,240,0.7)]",
    outline:
      "border border-ink/20 text-ink hover:border-ink hover:-translate-y-0.5",
    ghost: "text-ink hover:text-accent",
    light:
      "bg-paper text-ink hover:-translate-y-0.5 hover:bg-white shadow-[0_10px_30px_-14px_rgba(0,0,0,0.5)]",
  }[variant];

  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={localize(href)} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a className={cls} {...props}>
      {children}
    </a>
  );
}

export function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          {align === "center" && <span className="hidden h-px w-8 bg-accent sm:block" />}
          <span className="eyebrow text-accent">{eyebrow}</span>
          {align === "center" && <span className="hidden h-px w-8 bg-accent sm:block" />}
        </div>
      )}
      <h2
        className={`display mt-4 text-4xl sm:text-5xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-paper/70" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
