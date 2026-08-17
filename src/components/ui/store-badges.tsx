import { APP } from "@/lib/app-links";
import { cn } from "@/lib/utils";

function AppleGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.05 12.53c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.71-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.74 2.21 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.19-.02 1.94-1.08 2.67-2.15.84-1.23 1.19-2.42 1.2-2.48-.03-.01-2.3-.88-2.32-3.5Zm-2.2-6.43c.61-.74 1.02-1.77.91-2.8-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.7-.93 2.7.98.08 1.98-.5 2.59-1.22Z" />
    </svg>
  );
}

function GooglePlayGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.1.1L13.5 12v-.1L3.7 2.2l-.1.1Z" fill="#00D0FF" />
      <path d="M17 15.3 13.5 12v-.1L17 8.7l.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1-.2Z" fill="#FFCE00" />
      <path d="m17.1 15.2-3.6-3.2L3.6 21.7c.4.4 1 .4 1.7 0l11.8-6.5Z" fill="#FF3D47" />
      <path d="M17.1 8.8 5.3 2.3c-.7-.4-1.3-.4-1.7 0l9.9 9.7 3.6-3.2Z" fill="#00F076" />
    </svg>
  );
}

/** Official-style App Store + Google Play download badges, in one row. */
export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={APP.iosStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Download ${APP.name} on the App Store`}
        className="inline-flex items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-white ring-1 ring-white/15 transition-transform hover:-translate-y-0.5"
      >
        <AppleGlyph className="h-6 w-6" />
        <span className="flex flex-col leading-none">
          <span className="text-[9px] font-medium opacity-80">Download on the</span>
          <span className="-mt-0.5 text-[15px] font-semibold">App Store</span>
        </span>
      </a>
      <a
        href={APP.androidStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get ${APP.name} on Google Play`}
        className="inline-flex items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-white ring-1 ring-white/15 transition-transform hover:-translate-y-0.5"
      >
        <GooglePlayGlyph className="h-5 w-5" />
        <span className="flex flex-col leading-none">
          <span className="text-[9px] font-medium opacity-80">GET IT ON</span>
          <span className="-mt-0.5 text-[15px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
