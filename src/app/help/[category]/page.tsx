import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HelpIcon } from "@/components/help/help-icon";
import { HELP_CATEGORIES, getCategory } from "@/content/help";
import { APP } from "@/lib/app-links";

type Params = { category: string };

export function generateStaticParams() {
  return HELP_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return { title: `Help Center — ${APP.name}` };
  return {
    title: `${c.title} — ${APP.name} Help`,
    description: c.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pb-24 pt-36 sm:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted"
            >
              <Link href="/help" className="inline-flex items-center gap-1 hover:text-foreground">
                <Home className="h-3.5 w-3.5" /> Help
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-subtle" />
              <span className="text-foreground">{c.title}</span>
            </nav>

            <div className="mt-6 flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                <HelpIcon name={c.icon} className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                  {c.title}
                </h1>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {c.description}
                </p>
              </div>
            </div>

            <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {c.articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/help/${c.slug}/${a.slug}`}
                    className="group flex items-center gap-4 px-5 py-4 hover:bg-elevated"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-semibold text-foreground">
                        {a.title}
                      </p>
                      <p className="mt-0.5 truncate text-sm text-muted">
                        {a.summary}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
