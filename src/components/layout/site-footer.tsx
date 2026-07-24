import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.417-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Chats", href: "#product" },
      { label: "Memories", href: "#product" },
      { label: "Communities", href: "#product" },
      { label: "Calls", href: "#product" },
      { label: "Quiick AI", href: "#ai-suite" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Careers", href: "#top" },
      { label: "Blog", href: "#top" },
      { label: "Brand", href: "#top" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Support", href: "#top" },
      { label: "Security", href: "#security" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-divider py-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-muted">
              The AI-first communication platform — chat, call, and connect,
              all in one place.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#top"
                aria-label="Quiick Chat on X"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent-text"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="#top"
                aria-label="Quiick Chat on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent-text"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#top"
                aria-label="Quiick Chat on GitHub"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent-text"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-divider pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Quiick Chat. All rights reserved.</p>
          <p>Made for people who talk to people they care about.</p>
        </div>
      </Container>
    </footer>
  );
}
