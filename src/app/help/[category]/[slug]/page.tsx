import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home, Info } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HELP_CATEGORIES, getArticle } from "@/content/help";
import { APP } from "@/lib/app-links";

type Params = { category: string; slug: string };

export function generateStaticParams() {
  return HELP_CATEGORIES.flatMap((c) =>
    c.articles.map((a) => ({ category: c.slug, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const found = getArticle(category, slug);
  if (!found) return { title: `Help Center — ${APP.name}` };
  return {
    title: `${found.article.title} — ${APP.name} Help`,
    description: found.article.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;
  const found = getArticle(category, slug);
  if (!found) notFound();
  const { category: c, article: a } = found;
  const related = c.articles.filter((x) => x.slug !== a.slug).slice(0, 4);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pb-24 pt-36 sm:pt-40">
        <Container>
          <div className="mx-auto max-w-2xl">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-sm text-muted"
            >
              <Link href="/help" className="inline-flex items-center gap-1 hover:text-foreground">
                <Home className="h-3.5 w-3.5" /> Help
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-subtle" />
              <Link href={`/help/${c.slug}`} className="hover:text-foreground">
                {c.title}
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-subtle" />
              <span className="truncate text-foreground">{a.title}</span>
            </nav>

            <article className="mt-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                {a.title}
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {a.summary}
              </p>

              <div className="mt-8 space-y-5">
                {a.body.map((block, i) => {
                  if (block.type === "p") {
                    return (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-foreground/90"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "steps") {
                    return (
                      <ol key={i} className="space-y-3">
                        {block.items.map((item, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent">
                              {j + 1}
                            </span>
                            <span className="text-[15px] leading-relaxed text-foreground/90">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  // note
                  return (
                    <div
                      key={i}
                      className="flex gap-3 rounded-2xl border border-border bg-card p-4"
                    >
                      <Info className="h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm leading-relaxed text-muted">
                        {block.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>

            {related.length > 0 && (
              <div className="mt-14 border-t border-border pt-8">
                <p className="text-sm font-bold uppercase tracking-widest text-muted">
                  Related articles
                </p>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/help/${c.slug}/${r.slug}`}
                        className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-text hover:text-accent-bright"
                      >
                        {r.title}
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
