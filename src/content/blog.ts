/**
 * Blog / Newsroom content. Data-driven so the index, post pages, and sitemap
 * derive from this file. Keep posts genuine and product-accurate.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // display string
  author: string;
  body: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "introducing-quiick-chat",
    title: "Introducing Quiick Chat",
    excerpt:
      "One calm app for chat, calls, status, and communities — private by design, and thoughtfully built.",
    date: "Launch",
    author: "The Quiick Chat team",
    body: [
      { type: "p", text: "Messaging apps got fast, then stopped. They move your words perfectly and understand them not at all — and they scatter the way you talk across a handful of separate apps. We wanted something calmer: one place to chat, call, share, and belong." },
      { type: "h", text: "Everything in one place" },
      { type: "p", text: "Quiick Chat brings together 1:1 and group messaging, crystal-clear voice and video calls, Memories that fade when they should, and Communities — organized Spaces and broadcast Channels — so you're not app-hopping just to keep up with the people who matter." },
      { type: "h", text: "Private by design" },
      { type: "p", text: "Your personal messages and calls are protected with end-to-end encryption, and privacy controls are the default, not something you dig for. You decide who sees your status, who can find you, and who can reach you — with block and report tools everywhere you need them." },
      { type: "h", text: "Helpful, ambient AI" },
      { type: "p", text: "Quiick AI is woven through the app rather than bolted on: transcription for voice notes and calls, translation so you can read anything in your language, smart replies, and summaries to catch up fast. It's opt-in, and honest when a feature isn't available yet." },
      { type: "h", text: "Built for creators and communities" },
      { type: "p", text: "Channels let you broadcast to an audience with posts, polls, quizzes, questions, and music — and a real insights dashboard shows your reach, growth, and where your audience is. Communities give your people a home, organized into channels with roles and moderation." },
      { type: "p", text: "This is just the start. We're building Quiick Chat to be the calmer, more capable way to stay close — and we're glad you're here." },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
