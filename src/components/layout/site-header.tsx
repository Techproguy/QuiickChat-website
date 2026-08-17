"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#communities", label: "Communities" },
  { href: "/#ai-suite", label: "AI Suite" },
  { href: "/security", label: "Security" },
  { href: "/help", label: "Help" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
            scrolled ? "glass shadow-e2" : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center" aria-label="Quiick Chat home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Link
              href="/help"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              Help
            </Link>
            <Link
              href="/download"
              className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
            >
              Get Quiick Chat
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="grid h-9 w-9 place-items-center rounded-full text-foreground"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass mt-2 rounded-3xl p-5 md:hidden">
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/help"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "secondary" }))}
              >
                Help Center
              </Link>
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "primary" }))}
              >
                Get Quiick Chat
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
