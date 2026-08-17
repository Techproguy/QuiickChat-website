import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quiick Chat — Communication, Understood.",
    short_name: "Quiick Chat",
    description:
      "The AI-first communication platform: chat, call, share Memories, and build Communities — all in one place.",
    start_url: "/",
    display: "standalone",
    background_color: "#090C10",
    theme_color: "#090C10",
    icons: [
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/app-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
