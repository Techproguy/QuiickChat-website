import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BLOG_POSTS, getPost } from "@/content/blog";
import { APP } from "@/lib/app-links";

type Params = { slug: string };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: `Blog — ${APP.name}` };
  return { title: `${post.title} — ${APP.name}`, description: post.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pb-24 pt-36 sm:pt-40">
        <Container>
          <article className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All posts
            </Link>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-accent-text">
              {post.date} · {post.author}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground">
              {post.title}
            </h1>

            <div className="mt-8 space-y-5">
              {post.body.map((block, i) =>
                block.type === "h" ? (
                  <h2
                    key={i}
                    className="pt-2 text-xl font-bold text-foreground"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p
                    key={i}
                    className="text-[16px] leading-relaxed text-foreground/90"
                  >
                    {block.text}
                  </p>
                ),
              )}
            </div>
          </article>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
