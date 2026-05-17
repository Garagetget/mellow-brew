"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

type IconProps = React.SVGProps<SVGSVGElement>;

const MenuIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    {...props}
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    {...props}
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  const panelOpen = open;
  const headerSolid = scrolled || panelOpen;

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={dismiss}
          className="fixed inset-0 z-40 cursor-default md:hidden"
        />
      )}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          headerSolid
            ? "bg-white/95 backdrop-blur shadow-[0_1px_0_rgba(42,31,26,0.06),0_8px_24px_-12px_rgba(42,31,26,0.18)]"
            : "bg-transparent"
        )}
      >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className={cn(
            "text-lg font-semibold tracking-tight transition-colors",
            headerSolid ? "text-ink" : "text-cream"
          )}
        >
          Mellow Brew
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  headerSolid
                    ? "text-ink/70 hover:text-ink"
                    : "text-cream/80 hover:text-cream"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button size="sm" asChild>
            <a href="#menu" onClick={() => setOpen(false)}>
              Order
            </a>
          </Button>

          <button
            ref={triggerRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden",
              headerSolid
                ? "text-ink hover:bg-brown/5"
                : "text-cream hover:bg-white/10"
            )}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        inert={!open}
        aria-hidden={!open}
        className={cn(
          "overflow-hidden border-t border-brown/10 bg-white/95 backdrop-blur transition-[max-height] duration-300 md:hidden",
          open ? "max-h-72" : "max-h-0 border-transparent"
        )}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-brown/5 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
    </>
  );
}
