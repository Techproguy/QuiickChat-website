"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import type { HelpIndexEntry } from "@/content/help";

export function HelpSearch({ index }: { index: HelpIndexEntry[] }) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return index
      .filter(
        (e) =>
          e.title.toLowerCase().includes(query) ||
          e.summary.toLowerCase().includes(query) ||
          e.categoryTitle.toLowerCase().includes(query),
      )
      .slice(0, 8);
  }, [q, index]);

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 shadow-e2">
        <Search className="h-5 w-5 shrink-0 text-muted" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search for help…"
          aria-label="Search help articles"
          className="w-full bg-transparent text-[15px] text-foreground placeholder:text-subtle focus:outline-none"
        />
        {q && (
          <button
            onClick={() => setQ("")}
            aria-label="Clear search"
            className="shrink-0 text-subtle hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {q.trim() && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-elevated shadow-e3">
          {results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-muted">
              No results for “{q}”. Try different words.
            </p>
          ) : (
            <ul className="max-h-[60vh] overflow-y-auto">
              {results.map((r) => (
                <li key={`${r.categorySlug}/${r.slug}`}>
                  <Link
                    href={`/help/${r.categorySlug}/${r.slug}`}
                    className="block border-b border-border px-4 py-3 last:border-0 hover:bg-card"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {r.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      {r.categoryTitle} · {r.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
