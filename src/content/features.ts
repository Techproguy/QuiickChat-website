/**
 * The complete Quiick Chat feature catalog — every capability, down to the
 * unit, grouped by area. Drives the /features page. Keep accurate to the app.
 */

export type FeatureGroup = {
  slug: string;
  title: string;
  tagline: string;
  icon: string; // lucide name, mapped in the UI
  features: { name: string; desc: string }[];
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    slug: "messaging",
    title: "Messaging",
    tagline: "Fast, expressive 1:1 and group chats that open instantly.",
    icon: "MessageCircle",
    features: [
      { name: "1:1 & group chats", desc: "Message anyone, or bring a group together." },
      { name: "Rich media", desc: "Photos, videos, documents, GIFs, stickers, and location." },
      { name: "Voice notes", desc: "Hold to record, slide to lock, slide to cancel — with 1×/1.5×/2× playback and continuous play." },
      { name: "Video notes", desc: "Round, instant video messages." },
      { name: "Any-emoji reactions", desc: "React with any emoji, double-tap to react, with haptics." },
      { name: "Reply, forward, star", desc: "Quote a message, forward it on, or star it to save." },
      { name: "Edit & delete", desc: "Fix a typo or delete for everyone, within the window." },
      { name: "1:1 & group polls", desc: "Ask a question and tally votes live." },
      { name: "In-chat search", desc: "Step through matches with a live counter." },
      { name: "Organize", desc: "Pin, archive, mute, mark unread, and multi-select for bulk actions." },
      { name: "Wallpapers", desc: "Personalize how your chats look." },
      { name: "Reliable delivery", desc: "Failed-and-resend, auto-download controls, durable media." },
    ],
  },
  {
    slug: "media",
    title: "Photos, Video & Editing",
    tagline: "Capture, polish, and view media beautifully.",
    icon: "Image",
    features: [
      { name: "Built-in editor", desc: "Crop, rotate, trim and mute video, add text, stickers, filters, or draw." },
      { name: "HD / SD quality", desc: "Send in HD (with a badge) or save data with standard quality." },
      { name: "Full-screen viewer", desc: "Swipe between media, pinch-zoom and pan, swipe down to dismiss." },
      { name: "Aspect-ratio bubbles", desc: "Photos keep their shape; albums lay out as clean mosaics." },
      { name: "Smart compression", desc: "Media is optimized before it sends — smaller, still sharp." },
    ],
  },
  {
    slug: "calls",
    title: "Voice & Video Calls",
    tagline: "Crystal-clear calls, solo or in a group.",
    icon: "Phone",
    features: [
      { name: "Voice & video", desc: "1:1 or group, with a seamless voice-to-video upgrade mid-call." },
      { name: "Screen sharing", desc: "Show your screen live on a call." },
      { name: "Smart audio routing", desc: "One-tap speaker and per-device Bluetooth output." },
      { name: "Network-quality indicator", desc: "See call quality live, and degrade gracefully." },
      { name: "Call links", desc: "Share a link so anyone can join." },
      { name: "Decline with a message", desc: "Can't talk? Send a quick reply instead." },
      { name: "Add to call", desc: "Turn a 1:1 into a group without dropping." },
      { name: "Custom ringtones", desc: "Choose how your calls sound." },
      { name: "Minimizable call", desc: "Pop the call into a floating bubble and keep going." },
      { name: "Full call history", desc: "Every call with date, time, and duration; missed vs silenced." },
    ],
  },
  {
    slug: "memories",
    title: "Memories (Status)",
    tagline: "Share your day — seen by exactly who you choose.",
    icon: "Heart",
    features: [
      { name: "Photo, video & text", desc: "Post an update in whatever form fits the moment." },
      { name: "Music & effects", desc: "Add a track, text, and effects before you share." },
      { name: "Audience controls", desc: "Everyone, Contacts, Close Friends, or a custom list — respected exactly." },
      { name: "Replies & reactions", desc: "Followers reply privately to your chat, or react." },
      { name: "Seen state", desc: "See who viewed your update." },
      { name: "Background posting", desc: "Post uploads in the background — no waiting." },
    ],
  },
  {
    slug: "communities",
    title: "Communities, Spaces & Channels",
    tagline: "A home for your people — and an audience for creators.",
    icon: "Users",
    features: [
      { name: "Spaces", desc: "Community hubs organized into channels, with roles and moderation." },
      { name: "Add members", desc: "By contact or @username; invite by link, QR, or search." },
      { name: "Roles & moderation", desc: "Owner and staff roles, remove/ban, ownership transfer." },
      { name: "Broadcast Channels", desc: "Post text, photos, video, voice, documents, and location to followers." },
      { name: "Interactive posts", desc: "Polls, quizzes (with a right answer), questions, and music." },
      { name: "Engagement", desc: "Reactions, comments, forwarding, and per-post view counts." },
      { name: "Private responses", desc: "Followers reply privately; admins can share the best back, anonymously." },
      { name: "Creator Insights", desc: "Reach, follower growth, top regions, followers vs non-followers, and top posts." },
      { name: "Follower management", desc: "See followers and remove or block when needed." },
    ],
  },
  {
    slug: "identity",
    title: "Identity & Contacts",
    tagline: "Be reachable on your terms.",
    icon: "AtSign",
    features: [
      { name: "@usernames", desc: "Claim a handle and be reachable without sharing your number." },
      { name: "Discoverability", desc: "Choose who can find you by @username: Everyone, Contacts, or Nobody." },
      { name: "Change cooldown", desc: "Your old handle is reserved for a while so links keep working." },
      { name: "Contact sync", desc: "See which contacts are on Quiick Chat, kept up to date." },
    ],
  },
  {
    slug: "ai",
    title: "Quiick AI",
    tagline: "Ambient intelligence woven through everything — opt-in, and honest.",
    icon: "Sparkles",
    features: [
      { name: "Speech-to-text", desc: "Transcribe voice notes the moment they arrive." },
      { name: "Live call transcript & captions", desc: "Follow a call in real time, on screen." },
      { name: "Message translation", desc: "Read any message in your language, right where it was sent." },
      { name: "In-call translation", desc: "Translate what's said, live, during a call." },
      { name: "Per-speaker transcript", desc: "Calls are transcribed with who-said-what attribution." },
      { name: "Post-call summary & notes", desc: "Get the gist and action items after a call." },
      { name: "AI voice playback", desc: "Have any message — yours or translated — read aloud naturally." },
      { name: "Translate & listen", desc: "Read it and hear it together, for languages you're learning." },
      { name: "Smart replies", desc: "Context-aware reply suggestions in the composer." },
      { name: "AI writing help", desc: "Fix grammar or rephrase a draft — it sounds like you." },
      { name: "Dictation", desc: "Speak your message and watch it type." },
      { name: "Conversation summaries", desc: "Catch up on a long thread — or a whole Space — in seconds." },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy & Security",
    tagline: "Private by design, with real controls.",
    icon: "ShieldCheck",
    features: [
      { name: "End-to-end encryption", desc: "Your messages and calls stay between you and the recipient." },
      { name: "App Lock", desc: "PIN and biometrics, with escalating lockouts against brute-force." },
      { name: "Audience & privacy controls", desc: "Control status, last seen, profile, and who can find or reach you." },
      { name: "Private previews", desc: "Hide message content on your lock screen." },
      { name: "Block & report", desc: "For chats, contacts, channels, and posts — everywhere." },
      { name: "Delete account", desc: "Permanently remove your account and its data, with confirmation." },
      { name: "Multi-account isolation", desc: "Accounts are kept fully separate on the device." },
    ],
  },
  {
    slug: "experience",
    title: "Experience & Platform",
    tagline: "The details that make it feel effortless.",
    icon: "Zap",
    features: [
      { name: "Local-first speed", desc: "Chats open from cache before the network even answers." },
      { name: "Light & dark themes", desc: "A calm, consistent look in both." },
      { name: "Smart time & locale", desc: "12h/24h and dates that respect your system and language." },
      { name: "Rich notifications", desc: "Avatars, big-picture previews, grouping, and per-type sounds." },
      { name: "Notification actions & badges", desc: "Reply from the notification; accurate unread badges." },
      { name: "Quiet Mode & focus", desc: "Quiet the noise when you need to." },
      { name: "Offline resilience", desc: "A clear connectivity banner and graceful reconnects." },
      { name: "Accessibility", desc: "Live-region announcements, labels, and comfortable tap targets." },
      { name: "iPhone & Android", desc: "A beautifully consistent experience on both, free." },
    ],
  },
];
