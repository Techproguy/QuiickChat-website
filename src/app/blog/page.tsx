import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BLOG_POSTS } from "@/content/blog";
import { APP } from "@/lib/app-links";

export const metadata: Metadata = {
  title: `Blog — ${APP.name}`,
  description: `News and updates from the ${APP.name} team.`,
};

export default function BlogIndex() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pb-24 pt-36 sm:pt-40">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              News &amp; updates
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Product news, announcements, and notes from the team.
            </p>

            <div className="mt-12 space-y-4">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-e2"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-subtle">
                    {post.date}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
