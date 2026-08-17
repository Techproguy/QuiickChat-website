/**
 * Help Center content — the single source of truth for quiickchat.com/help.
 * Data-driven so the category and article pages, search index, and sitemap all
 * derive from this one file. Modeled on a full WhatsApp-style help center but
 * for Quiick Chat's real feature set. Keep copy accurate to the product and
 * honest — mark anything not yet shipped as "coming soon".
 */

export type HelpBlock =
  | { type: "p"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "note"; text: string };

export type HelpArticle = {
  slug: string;
  title: string;
  summary: string;
  body: HelpBlock[];
};

export type HelpCategory = {
  slug: string;
  title: string;
  description: string;
  /** Lucide icon name, mapped to a component in the UI layer. */
  icon: string;
  articles: HelpArticle[];
};

const p = (text: string): HelpBlock => ({ type: "p", text });
const steps = (items: string[]): HelpBlock => ({ type: "steps", items });
const note = (text: string): HelpBlock => ({ type: "note", text });

export const HELP_CATEGORIES: HelpCategory[] = [
  // 1 ────────────────────────────────────────────────────────────────────────
  {
    slug: "get-started",
    title: "Get Started",
    description: "Create your account, set up your profile, and find your people.",
    icon: "Rocket",
    articles: [
      {
        slug: "create-an-account",
        title: "Create your Quiick Chat account",
        summary: "Sign up with your phone number in a couple of minutes.",
        body: [
          p("Quiick Chat uses your phone number as your identity, so getting started is quick."),
          steps([
            "Download Quiick Chat from the App Store or Google Play.",
            "Open the app and enter your phone number.",
            "Enter the 6-digit code we send you by SMS.",
            "Add your name and a profile photo — and you're in.",
          ]),
          note("You can change your name, photo, and @username any time in Settings."),
        ],
      },
      {
        slug: "verify-phone-number",
        title: "Verify your phone number",
        summary: "Trouble receiving your verification code?",
        body: [
          p("If your SMS code doesn't arrive, try these steps:"),
          steps([
            "Check that you entered your number with the correct country code.",
            "Make sure you have signal or Wi-Fi calling for SMS.",
            "Wait for the timer, then tap Resend code.",
            "If SMS still fails, choose to get the code by phone call where available.",
          ]),
        ],
      },
      {
        slug: "set-up-profile",
        title: "Set up your profile",
        summary: "Your name, photo, and about.",
        body: [
          steps([
            "Go to Settings and tap your profile at the top.",
            "Tap your photo to add or change it.",
            "Edit your name and about text.",
          ]),
        ],
      },
      {
        slug: "claim-a-username",
        title: "Claim your @username",
        summary: "Get a handle so people can find and message you.",
        body: [
          p("A @username lets people reach you without sharing your phone number. It's optional and you can claim or change it whenever you like."),
          steps([
            "Go to Settings → Profile.",
            "Tap Username and pick an available handle.",
            "Choose who can find you by @username: Everyone, Contacts, or Nobody.",
          ]),
          note("Changing your handle has a short cooldown, and your old handle is reserved for a while so links keep working."),
        ],
      },
      {
        slug: "find-contacts",
        title: "Find friends already on Quiick Chat",
        summary: "See which of your contacts you can chat with right away.",
        body: [
          p("Quiick Chat checks which of your saved contacts are already on the app so you can start chatting immediately."),
          steps([
            "Allow contact access when prompted (or later in Settings).",
            "Open New Chat to see contacts who are on Quiick Chat.",
            "Search by name or @username to start a conversation.",
          ]),
        ],
      },
      {
        slug: "invite-friends",
        title: "Invite friends who aren't on Quiick Chat yet",
        summary: "Bring the people you talk to most.",
        body: [
          steps([
            "Open New Chat and find a contact who isn't on Quiick Chat.",
            "Tap Invite to send them a link by SMS or another app.",
          ]),
        ],
      },
    ],
  },

  // 2 ────────────────────────────────────────────────────────────────────────
  {
    slug: "chats",
    title: "Chats & Messages",
    description: "Send messages, react, reply, edit, search, and organize your chats.",
    icon: "MessageCircle",
    articles: [
      {
        slug: "send-a-message",
        title: "Send your first message",
        summary: "Start a 1:1 or group conversation.",
        body: [
          steps([
            "Tap New Chat.",
            "Pick a contact, or search by name or @username.",
            "Type your message and tap send.",
          ]),
          note("To start a group, tap New Group, add people, then name your group."),
        ],
      },
      {
        slug: "react-reply-forward",
        title: "React, reply, and forward",
        summary: "Do more with any message.",
        body: [
          p("Long-press a message to open its menu."),
          steps([
            "React with any emoji — tap and hold, then pick one.",
            "Reply to quote a specific message.",
            "Forward to send it to other chats.",
            "Star to save it, or copy the text.",
          ]),
        ],
      },
      {
        slug: "edit-and-delete",
        title: "Edit or delete a message",
        summary: "Fix a typo or take a message back.",
        body: [
          p("Long-press your own message, then choose Edit or Delete."),
          note("Editing and Delete for everyone are available for a window of time after you send. Deleting for everyone removes it from the chat for all participants."),
        ],
      },
      {
        slug: "voice-notes",
        title: "Send a voice note",
        summary: "Record and send audio, hands-free.",
        body: [
          steps([
            "In a chat, tap and hold the microphone.",
            "Slide up to lock recording so you don't have to keep holding.",
            "Slide to cancel to discard, or release to send.",
          ]),
          note("Play voice notes at 1x, 1.5x, or 2x, and they continue playing back-to-back."),
        ],
      },
      {
        slug: "video-notes",
        title: "Record a video note",
        summary: "Send a short, round video message.",
        body: [
          p("Video notes are quick, round video messages — great for saying something with a look, not just words."),
          steps([
            "In a chat, switch the record control to video.",
            "Tap and hold to record your short clip, then release to send.",
          ]),
        ],
      },
      {
        slug: "search-in-chats",
        title: "Search your messages",
        summary: "Find a message fast.",
        body: [
          steps([
            "Open a chat and tap search, or search from the Chats list.",
            "Type a word or phrase.",
            "Step through matches with next/previous.",
          ]),
        ],
      },
      {
        slug: "polls-in-chats",
        title: "Create a poll in a chat",
        summary: "Ask a group to vote.",
        body: [
          steps([
            "Open the attachment menu in a chat and choose Poll.",
            "Add your question and options.",
            "Send — everyone can vote and see results live.",
          ]),
        ],
      },
      {
        slug: "organize-chats",
        title: "Pin, archive, mute, and mark unread",
        summary: "Keep your Chats list tidy.",
        body: [
          steps([
            "Swipe a chat to archive it, or long-press for more actions.",
            "Pin important chats to the top.",
            "Mute a chat's notifications for a while or forever.",
            "Mark a chat read or unread.",
          ]),
        ],
      },
      {
        slug: "wallpapers",
        title: "Change your chat wallpaper",
        summary: "Personalize how chats look.",
        body: [
          steps([
            "Go to Settings → Chats → Wallpaper.",
            "Choose a color or theme.",
          ]),
        ],
      },
    ],
  },

  // 3 ────────────────────────────────────────────────────────────────────────
  {
    slug: "media",
    title: "Photos, Videos & Media",
    description: "Share and edit photos, videos, documents, GIFs, and location.",
    icon: "Image",
    articles: [
      {
        slug: "share-media",
        title: "Share photos, videos, and files",
        summary: "Everything you can attach to a chat.",
        body: [
          steps([
            "Open a chat and tap the attachment icon.",
            "Choose Photos, Camera, Document, Location, or GIF.",
            "Add a caption if you like, then send.",
          ]),
        ],
      },
      {
        slug: "edit-before-sending",
        title: "Edit photos and videos before sending",
        summary: "Crop, trim, add text, stickers, and draw.",
        body: [
          p("The built-in editor lets you polish media before it goes out."),
          steps([
            "Pick or capture a photo or video.",
            "Crop, rotate, or trim; add text, stickers, or filters; or draw.",
            "Add a caption and send.",
          ]),
        ],
      },
      {
        slug: "photo-video-quality",
        title: "Choose photo and video quality",
        summary: "Send in HD or save data with standard quality.",
        body: [
          p("Before sending, pick Standard (smaller, faster) or HD (higher quality). HD items show an HD badge."),
        ],
      },
      {
        slug: "view-and-save-media",
        title: "View, save, and forward media",
        summary: "Open the full-screen viewer.",
        body: [
          steps([
            "Tap any photo or video to open it full-screen.",
            "Swipe between media in the same chat.",
            "Save, forward, or react from the viewer.",
          ]),
        ],
      },
      {
        slug: "auto-download",
        title: "Control media auto-download",
        summary: "Decide what downloads automatically.",
        body: [
          steps([
            "Go to Settings → Storage and data.",
            "Set what auto-downloads on Wi-Fi and on mobile data.",
          ]),
        ],
      },
      {
        slug: "gifs-and-stickers",
        title: "Send GIFs and stickers",
        summary: "Add some personality.",
        body: [
          steps([
            "Open the attachment or emoji panel in a chat.",
            "Search GIFs, or pick a sticker or emoji.",
          ]),
        ],
      },
    ],
  },

  // 4 ────────────────────────────────────────────────────────────────────────
  {
    slug: "calls",
    title: "Voice & Video Calls",
    description: "Call one person or a group, share your screen, and use call links.",
    icon: "Phone",
    articles: [
      {
        slug: "make-a-call",
        title: "Make a voice or video call",
        summary: "Call one person or a whole group.",
        body: [
          steps([
            "Open a chat and tap the voice or video call icon.",
            "For a group call, start from a group chat or add people from the call screen.",
            "Switch between voice and video any time during the call.",
          ]),
        ],
      },
      {
        slug: "group-calls",
        title: "Start a group call",
        summary: "Bring several people together.",
        body: [
          steps([
            "Start a call from a group, or add people mid-call.",
            "See who's ringing, who joined, and who declined.",
          ]),
        ],
      },
      {
        slug: "screen-sharing",
        title: "Share your screen on a call",
        summary: "Show, don't tell.",
        body: [
          steps([
            "On a video call, open the controls and tap Share screen.",
            "Confirm the system prompt to start sharing.",
            "Tap Stop sharing when you're done.",
          ]),
        ],
      },
      {
        slug: "live-captions-translation",
        title: "Live captions and translation on calls",
        summary: "Follow the conversation, in your language.",
        body: [
          p("Quiick AI can show a live transcript and captions during a call, and translate what's said — helpful across languages or when you can't have sound on."),
          note("AI call features are opt-in and rolling out — the app tells you when they're available."),
        ],
      },
      {
        slug: "call-links",
        title: "Share a call link",
        summary: "Let people join without adding them first.",
        body: [
          steps([
            "From the Calls tab, create a call link.",
            "Share it — anyone with the link can join the call.",
          ]),
        ],
      },
      {
        slug: "decline-with-message",
        title: "Decline a call with a message",
        summary: "Can't talk right now? Say so.",
        body: [
          p("When a call comes in, choose to decline with a quick message instead of just hanging up."),
        ],
      },
      {
        slug: "call-audio-routing",
        title: "Speaker, Bluetooth, and audio output",
        summary: "Choose where call audio plays.",
        body: [
          steps([
            "During a call, tap the speaker/audio button.",
            "Pick the earpiece, speaker, or a connected Bluetooth device.",
          ]),
        ],
      },
    ],
  },

  // 5 ────────────────────────────────────────────────────────────────────────
  {
    slug: "memories",
    title: "Memories (Status)",
    description: "Share photo and video updates that fade when they should.",
    icon: "Heart",
    articles: [
      {
        slug: "post-a-memory",
        title: "Post a Memory",
        summary: "Share a photo, video, or text update.",
        body: [
          steps([
            "Open Memories and tap to create.",
            "Pick a photo or video, or write a text update.",
            "Add music, text, or effects, then share.",
          ]),
        ],
      },
      {
        slug: "memory-audience",
        title: "Choose who sees your Memories",
        summary: "Your audience, exactly as you set it.",
        body: [
          steps([
            "When posting, tap the audience option.",
            "Choose Everyone, Contacts, Close Friends, or a custom list.",
          ]),
          note("\"Close Friends\" stays exactly that — it never quietly widens to everyone."),
        ],
      },
      {
        slug: "reply-to-a-memory",
        title: "Reply and react to Memories",
        summary: "Respond privately to someone's update.",
        body: [
          p("Open someone's Memory and reply — it goes to your private chat with them. You can also react."),
        ],
      },
      {
        slug: "who-viewed-memory",
        title: "See who viewed your Memory",
        summary: "Check your seen list.",
        body: [
          p("Open your own Memory and swipe up (or tap the seen indicator) to see who viewed it."),
        ],
      },
      {
        slug: "delete-a-memory",
        title: "Delete a Memory",
        summary: "Take an update down early.",
        body: [
          steps([
            "Open your Memory.",
            "Open the menu and tap Delete.",
          ]),
        ],
      },
    ],
  },

  // 6 ────────────────────────────────────────────────────────────────────────
  {
    slug: "communities",
    title: "Communities & Spaces",
    description: "Bring people together in Spaces, organized into channels with roles.",
    icon: "Users",
    articles: [
      {
        slug: "what-are-communities",
        title: "What are Communities, Spaces, and Channels?",
        summary: "How it all fits together.",
        body: [
          p("A community is your home for a group of people on Quiick Chat. Inside it:"),
          steps([
            "Spaces organize your people into focused channels, with roles and moderation.",
            "Channels broadcast to everyone who follows you — with posts, polls, quizzes, questions, and music.",
          ]),
        ],
      },
      {
        slug: "create-a-space",
        title: "Create a Space",
        summary: "Start a community hub.",
        body: [
          steps([
            "Open Communities and create a new Space.",
            "Add a name, photo, and description.",
            "Create channels inside it and invite members.",
          ]),
        ],
      },
      {
        slug: "join-via-link",
        title: "Join a group, Space, or Channel from a link",
        summary: "What happens when you tap an invite link.",
        body: [
          p("When someone shares a Quiick Chat invite link, tapping it opens the app straight to the group, community, or channel."),
          steps([
            "Tap the invite link on your phone.",
            "If you have Quiick Chat, it opens the invite automatically.",
            "If not, you'll see a web page with a button to get the app — then open the link again.",
          ]),
        ],
      },
      {
        slug: "add-members",
        title: "Add members by contact or @username",
        summary: "Grow your community.",
        body: [
          steps([
            "Open your Space and go to Members.",
            "Add people from your contacts, or by @username.",
            "Assign a role if you want them to help manage it.",
          ]),
        ],
      },
      {
        slug: "roles-and-moderation",
        title: "Roles, permissions, and moderation",
        summary: "Keep your community healthy.",
        body: [
          p("Owners and staff can manage members, set who can post, remove or ban people, and transfer ownership. Members can block and report, too."),
        ],
      },
      {
        slug: "leave-a-community",
        title: "Leave or mute a community",
        summary: "Step back when you need to.",
        body: [
          steps([
            "Open the Space or channel.",
            "Choose Mute to quiet notifications, or Leave to exit.",
          ]),
        ],
      },
    ],
  },

  // 7 ────────────────────────────────────────────────────────────────────────
  {
    slug: "channels",
    title: "Channels & Creators",
    description: "Broadcast to followers with rich posts, and grow with insights.",
    icon: "Radio",
    articles: [
      {
        slug: "create-a-channel",
        title: "Create a Channel and post",
        summary: "Broadcast to an audience.",
        body: [
          steps([
            "Open Communities and create a new Channel.",
            "Tap compose to post text, photos, video, voice, documents, or location.",
            "Followers can react, comment, and reply privately.",
          ]),
        ],
      },
      {
        slug: "polls-quizzes-questions",
        title: "Post polls, quizzes, and questions",
        summary: "Make your posts interactive.",
        body: [
          steps([
            "In the composer, choose Poll, Quiz, or Question.",
            "For a quiz, add options and mark the correct answer.",
            "For a question, ask followers to send private answers.",
          ]),
        ],
      },
      {
        slug: "music-posts",
        title: "Post music to your Channel",
        summary: "Share a track with artwork.",
        body: [
          steps([
            "In the composer, choose Music.",
            "Pick a track and add a title and artist.",
            "Followers can play it right in the feed.",
          ]),
        ],
      },
      {
        slug: "channel-insights",
        title: "Understand your Channel Insights",
        summary: "Reach, growth, and audience for creators.",
        body: [
          p("Insights shows how your Channel is doing across three tabs:"),
          steps([
            "Reach — accounts reached, and followers vs non-followers.",
            "Growth — new followers over time and posting activity.",
            "Followers — your total audience and top regions.",
          ]),
        ],
      },
      {
        slug: "respond-feature",
        title: "Collect private responses",
        summary: "Let followers reply just to you.",
        body: [
          p("Turn on Responses for a post so followers can send private replies only you see. You can share the best ones back to the channel — anonymously."),
        ],
      },
      {
        slug: "manage-followers",
        title: "Manage your followers",
        summary: "See and moderate who follows you.",
        body: [
          steps([
            "Open your Channel and go to Followers.",
            "Remove or block a follower if needed.",
          ]),
        ],
      },
    ],
  },

  // 8 ────────────────────────────────────────────────────────────────────────
  {
    slug: "quiick-ai",
    title: "Quiick AI",
    description: "Transcription, translation, smart replies, and summaries.",
    icon: "Sparkles",
    articles: [
      {
        slug: "what-is-quiick-ai",
        title: "What is Quiick AI?",
        summary: "Ambient help, woven through the app.",
        body: [
          p("Quiick AI helps you communicate — transcribing voice notes and calls, translating messages, suggesting replies, and summarizing long threads. It's opt-in and works on the content you choose."),
        ],
      },
      {
        slug: "transcribe-voice",
        title: "Transcribe a voice note or call",
        summary: "Read what was said.",
        body: [
          steps([
            "Open a voice note and choose Transcribe.",
            "On a call, turn on live captions to see a running transcript.",
          ]),
        ],
      },
      {
        slug: "translate-messages",
        title: "Translate a message",
        summary: "Read anything in your language.",
        body: [
          steps([
            "Long-press a message and choose Translate.",
            "Set your preferred language so translations match it.",
          ]),
        ],
      },
      {
        slug: "smart-replies-writing",
        title: "Smart replies and writing help",
        summary: "Say it better, faster.",
        body: [
          p("Get reply suggestions and writing help right in the composer — to fix grammar or rephrase a draft before you send. It sounds like you, not a bot."),
        ],
      },
      {
        slug: "conversation-summaries",
        title: "Summarize a conversation",
        summary: "Catch up in seconds.",
        body: [
          p("Ask Quiick AI to summarize a long thread — or a whole Space — so you can catch up quickly."),
        ],
      },
    ],
  },

  // 9 ────────────────────────────────────────────────────────────────────────
  {
    slug: "privacy-safety",
    title: "Privacy, Safety & Security",
    description: "Encryption, blocking, reporting, App Lock, and audience controls.",
    icon: "ShieldCheck",
    articles: [
      {
        slug: "encryption",
        title: "How Quiick Chat protects your messages",
        summary: "End-to-end encryption and what it means.",
        body: [
          p("Your personal messages and calls are protected with end-to-end encryption, so they stay between you and the people you're talking to — no one in between can read them."),
          note("Combine this with privacy controls, block/report tools, and App Lock for full peace of mind."),
        ],
      },
      {
        slug: "block-and-report",
        title: "Block or report someone",
        summary: "Stay in control of who can reach you.",
        body: [
          steps([
            "Open the chat, contact, channel, or post.",
            "Open the menu and choose Block or Report.",
            "Blocking stops their calls and messages; reporting sends it to our team.",
          ]),
        ],
      },
      {
        slug: "app-lock",
        title: "Turn on App Lock",
        summary: "Protect the app with a PIN or biometrics.",
        body: [
          steps([
            "Go to Settings → Privacy → App Lock.",
            "Set a PIN and, if you like, enable Face ID or fingerprint.",
          ]),
          note("App Lock adds escalating lockouts against repeated wrong attempts."),
        ],
      },
      {
        slug: "audience-controls",
        title: "Control who sees your status and profile",
        summary: "Your audience, exactly as you set it.",
        body: [
          steps([
            "Go to Settings → Privacy.",
            "Set visibility for status, last seen, profile photo, and who can find you.",
          ]),
        ],
      },
      {
        slug: "hide-message-preview",
        title: "Hide message previews on your lock screen",
        summary: "Keep notifications discreet.",
        body: [
          steps([
            "Go to Settings → Notifications.",
            "Turn off message previews, or show name only.",
          ]),
        ],
      },
      {
        slug: "who-can-find-you",
        title: "Control who can find and message you",
        summary: "Discoverability on your terms.",
        body: [
          steps([
            "Go to Settings → Privacy.",
            "Set who can find you by @username: Everyone, Contacts, or Nobody.",
          ]),
        ],
      },
      {
        slug: "last-seen-and-read-receipts",
        title: "Last seen, online, and read receipts",
        summary: "Choose what others can see.",
        body: [
          p("In Settings → Privacy, control who can see your last seen and online status. Read receipts are two-way — if you turn them off, you won't see others' either."),
        ],
      },
      {
        slug: "delete-your-account",
        title: "Delete your account",
        summary: "Permanently remove your account.",
        body: [
          p("Deleting your account removes your profile, your chats on your device, and your account information."),
          steps([
            "Go to Settings → Account → Delete Account.",
            "Confirm your identity and follow the prompts.",
          ]),
          note("This can't be undone. Back up anything you want to keep first."),
        ],
      },
    ],
  },

  // 10 ───────────────────────────────────────────────────────────────────────
  {
    slug: "account-settings",
    title: "Account & Settings",
    description: "Notifications, storage, appearance, and troubleshooting.",
    icon: "Settings",
    articles: [
      {
        slug: "notifications",
        title: "Manage notifications",
        summary: "Sounds, previews, and quiet mode.",
        body: [
          steps([
            "Go to Settings → Notifications.",
            "Set sounds, message previews, and Quiet Mode.",
            "Mute individual chats or communities as needed.",
          ]),
        ],
      },
      {
        slug: "custom-ringtones",
        title: "Set custom call ringtones",
        summary: "Pick how calls sound.",
        body: [
          steps([
            "Go to Settings → Notifications → Call ringtone.",
            "Choose a ringtone from the picker.",
          ]),
        ],
      },
      {
        slug: "storage-and-data",
        title: "Manage storage and data",
        summary: "See what's taking up space.",
        body: [
          steps([
            "Go to Settings → Storage and data.",
            "Review large chats and clear media you don't need.",
            "Set auto-download preferences for Wi-Fi and mobile data.",
          ]),
        ],
      },
      {
        slug: "appearance-and-theme",
        title: "Change appearance and language",
        summary: "Light, dark, and language.",
        body: [
          steps([
            "Go to Settings → Appearance for light or dark theme.",
            "Go to Settings → Language to change the app language.",
          ]),
        ],
      },
      {
        slug: "notifications-not-working",
        title: "Notifications aren't coming through",
        summary: "Troubleshoot missed notifications.",
        body: [
          steps([
            "Check that notifications are allowed for Quiick Chat in your device settings.",
            "Make sure the chat or community isn't muted.",
            "Check that Quiet Mode isn't silencing them.",
            "Ensure the app can run in the background and isn't battery-restricted.",
          ]),
        ],
      },
      {
        slug: "calls-not-connecting",
        title: "Calls won't connect",
        summary: "Fix call quality and connection issues.",
        body: [
          steps([
            "Check your internet connection — calls need a stable network.",
            "Grant microphone and camera permissions in your device settings.",
            "Close and reopen the app, then try again.",
          ]),
        ],
      },
      {
        slug: "contact-support",
        title: "Contact support",
        summary: "Reach our team.",
        body: [
          p("Get help from inside the app at Settings → Help → Contact us, or email support@quiickchat.com."),
        ],
      },
    ],
  },
];

// --- Derived helpers -------------------------------------------------------

export function getCategory(slug: string): HelpCategory | undefined {
  return HELP_CATEGORIES.find((c) => c.slug === slug);
}

export function getArticle(categorySlug: string, articleSlug: string) {
  const category = getCategory(categorySlug);
  const article = category?.articles.find((a) => a.slug === articleSlug);
  return category && article ? { category, article } : undefined;
}

export type HelpIndexEntry = {
  categorySlug: string;
  categoryTitle: string;
  slug: string;
  title: string;
  summary: string;
};

export function buildHelpIndex(): HelpIndexEntry[] {
  return HELP_CATEGORIES.flatMap((c) =>
    c.articles.map((a) => ({
      categorySlug: c.slug,
      categoryTitle: c.title,
      slug: a.slug,
      title: a.title,
      summary: a.summary,
    })),
  );
}
