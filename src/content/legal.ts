/**
 * Legal content for /privacy and /terms — original, professional drafts written
 * to reflect what Quiick Chat actually does (messaging, calls, status,
 * communities, @usernames, contacts, Quiick AI). This is a product-accurate
 * draft; have it reviewed by counsel and localized before public launch.
 */

export type LegalSection = { heading: string; paragraphs: string[] };

export const LEGAL_META = {
  effectiveDate: "Effective date: to be set at launch",
  company: "Quiick Chat",
  privacyEmail: "privacy@quiickchat.com",
  supportEmail: "support@quiickchat.com",
  minAge: 16,
};

export const PRIVACY_POLICY: LegalSection[] = [
  {
    heading: "1. Overview",
    paragraphs: [
      "Quiick Chat is a private messaging and calling app. This Privacy Policy explains what information we collect, how we use it, and the choices and controls you have. We wrote it to be read, not skimmed past — in plain language, and accurate to how the app actually works.",
      "By creating an account or using Quiick Chat, you agree to the practices described here. If you don't agree, please don't use the app.",
    ],
  },
  {
    heading: "2. Information you give us",
    paragraphs: [
      "Account information. When you sign up, we collect your phone number, which is your identity on Quiick Chat, and the profile details you add — such as your name, profile photo, and an optional @username.",
      "Content you create. You create messages, voice notes, photos, videos, status updates (Memories), and posts in channels and communities. Personal messages and calls are protected by end-to-end encryption (see Section 5). Content you broadcast — such as channel posts and community messages — is delivered to the audience you choose.",
      "Contacts. If you allow it, we use your device contacts to show you which of your contacts are already on Quiick Chat and to help you start conversations. You can turn contact access off at any time in your device settings.",
      "Support and communications. If you contact us for help or report a problem, we collect the information you provide so we can assist you.",
    ],
  },
  {
    heading: "3. Information we collect automatically",
    paragraphs: [
      "Device and connection data. To operate the service reliably, we collect technical information such as your device type and operating system, app version, language and time-zone, and network and connection details.",
      "Usage and diagnostics. We collect limited information about how the app performs — for example, crash and error reports and basic feature usage — so we can fix problems and improve the experience. We aim to keep this minimal and, where possible, aggregated or de-identified.",
      "Notifications. To deliver push notifications, we work with platform push services (such as Apple and Google). A device push token is used to route notifications to your device.",
    ],
  },
  {
    heading: "4. How we use information",
    paragraphs: [
      "We use the information above to: create and secure your account; deliver your messages, calls, status, and community content; help you find and connect with people; send you notifications you've enabled; keep the service safe and prevent abuse; provide support; and improve and develop features.",
      "We do not sell your personal information, and we do not use the content of your personal messages to target advertising.",
    ],
  },
  {
    heading: "5. Messages, calls, and encryption",
    paragraphs: [
      "Your personal chats and calls are protected with end-to-end encryption, which means they are scrambled on your device and can only be unlocked on the recipient's device. No one in between — including us — can read the contents of those messages or listen to those calls.",
      "Quiick Chat is designed to be local-first: your chat history lives primarily on your device. We keep only what's needed to deliver messages reliably (for example, temporarily queuing an encrypted message until it can be delivered).",
      "Broadcast and community content. Content you post to a channel or community is, by design, visible to that audience. Treat it as you would anything you publish to a group of people.",
    ],
  },
  {
    heading: "6. Quiick AI features",
    paragraphs: [
      "Quiick Chat offers optional AI features — such as transcription, translation, smart replies, and summaries. These features are opt-in and operate on the content you choose to run them on (for example, a voice note you ask to transcribe, or a call where you enable live captions).",
      "AI features are used to help you communicate — not to build advertising profiles of you. Where processing is needed to provide a feature, we use only what's necessary to deliver it, and we tell you when a feature isn't available.",
    ],
  },
  {
    heading: "7. When we share information",
    paragraphs: [
      "Service providers. We work with trusted providers who help us run the service — for example, infrastructure, real-time calling, and push delivery. They may process information on our behalf and only for that purpose.",
      "Safety and legal reasons. We may disclose information if we reasonably believe it's necessary to comply with a valid legal request, to enforce our Terms, or to protect the safety, rights, or property of our users, the public, or Quiick Chat.",
      "We do not sell your personal information to anyone.",
    ],
  },
  {
    heading: "8. Your choices and controls",
    paragraphs: [
      "Privacy settings. You control who can see your status, your last seen, and your profile details, and who can find you by @username (Everyone, Contacts, or Nobody).",
      "Block and report. You can block anyone and report a chat, contact, channel, or post at any time.",
      "Notifications. You can manage notification sounds, previews, and quiet settings in the app and your device settings.",
      "Delete your account. You can permanently delete your account and its associated information from Settings. This action can't be undone.",
    ],
  },
  {
    heading: "9. Data retention",
    paragraphs: [
      "We keep information for as long as needed to provide the service and for the purposes described in this policy. Encrypted messages awaiting delivery are removed once delivered. When you delete your account, we delete or de-identify the information associated with it, except where we're required to retain something to meet a legal obligation or resolve a dispute.",
    ],
  },
  {
    heading: "10. Children",
    paragraphs: [
      "Quiick Chat is not intended for people under the age required to use it in their country (at least 16, or higher where local law requires). We don't knowingly collect information from anyone below that age. If you believe a child has provided us information, please contact us and we'll take appropriate steps.",
    ],
  },
  {
    heading: "11. International data transfers",
    paragraphs: [
      "Quiick Chat operates globally, so information may be processed in countries other than your own. Where we transfer information across borders, we take steps to protect it consistent with this policy and applicable law.",
    ],
  },
  {
    heading: "12. Security",
    paragraphs: [
      "We use technical and organizational measures — including end-to-end encryption for personal messages and calls, and account protections like App Lock — to protect your information. No service can promise perfect security, but we work continuously to keep Quiick Chat safe.",
    ],
  },
  {
    heading: "13. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy as the product evolves. When we make material changes, we'll update the date above and, where appropriate, notify you in the app. Your continued use of Quiick Chat after an update means you accept the revised policy.",
    ],
  },
  {
    heading: "14. Contact us",
    paragraphs: [
      "If you have questions about this policy or how your information is handled, reach us at privacy@quiickchat.com, or from inside the app at Settings → Help → Contact us.",
    ],
  },
];

export const TERMS_OF_SERVICE: LegalSection[] = [
  {
    heading: "1. Agreement to these Terms",
    paragraphs: [
      "These Terms of Service (\"Terms\") govern your use of the Quiick Chat app and related services. By creating an account or using Quiick Chat, you agree to these Terms. If you don't agree, please don't use the service.",
    ],
  },
  {
    heading: "2. Who can use Quiick Chat",
    paragraphs: [
      "You must be at least 16 years old — or older where your country requires — to use Quiick Chat. By using the service, you confirm that you meet this requirement and that you're able to enter into these Terms.",
    ],
  },
  {
    heading: "3. Your account",
    paragraphs: [
      "You register with your phone number, which is your identity on Quiick Chat. You're responsible for the activity on your account and for keeping your device and account secure — for example, by using App Lock. Tell us promptly if you believe your account has been compromised.",
      "You agree to provide accurate information and to keep your @username and profile details truthful — impersonating another person or organization isn't allowed.",
    ],
  },
  {
    heading: "4. Using the service",
    paragraphs: [
      "We grant you a personal, non-exclusive, non-transferable, revocable license to use Quiick Chat for your own communication, in line with these Terms.",
      "You agree not to: use the service for anything unlawful, harmful, or abusive; send spam or bulk unsolicited messages; harass, threaten, or endanger others; distribute malware or attempt to disrupt or reverse-engineer the service; infringe others' rights; or collect people's information without permission. We may act on violations, including limiting or ending access.",
    ],
  },
  {
    heading: "5. Your content",
    paragraphs: [
      "You own the content you create. To operate the service — for example, to deliver your messages to their recipients or your channel posts to your followers — you grant us the limited rights needed to transmit, store, and display that content as part of running Quiick Chat. We don't claim ownership of your content.",
      "You're responsible for the content you send and post, and for making sure you have the rights to share it. Content you broadcast to channels or communities reaches the audience you choose — post accordingly.",
    ],
  },
  {
    heading: "6. Communities and Channels",
    paragraphs: [
      "Quiick Chat lets you create and join communities (Spaces) and broadcast through Channels. If you run one, you're responsible for how it's used, for moderating it reasonably, and for complying with these Terms. We provide tools — including blocking, reporting, and removal — to help keep communities safe, and we may remove content or accounts that break these Terms.",
    ],
  },
  {
    heading: "7. Quiick AI features",
    paragraphs: [
      "Optional AI features (such as transcription, translation, smart replies, and summaries) are provided to help you communicate. They may not always be accurate or available, and they're offered on an \"as is\" basis. Use good judgment before relying on AI-generated output.",
    ],
  },
  {
    heading: "8. Privacy",
    paragraphs: [
      "Your use of Quiick Chat is also governed by our Privacy Policy, which explains what we collect and how we handle it. Please read it alongside these Terms.",
    ],
  },
  {
    heading: "9. Third-party services",
    paragraphs: [
      "Quiick Chat relies on third-party services (for example, app stores, push notification services, and real-time calling infrastructure). Their terms and policies apply to your use of those services, and we're not responsible for them.",
    ],
  },
  {
    heading: "10. Intellectual property",
    paragraphs: [
      "Quiick Chat, its name, logo, and the app itself are protected by intellectual-property rights and belong to us or our licensors. These Terms don't give you any right to use our branding without permission.",
    ],
  },
  {
    heading: "11. Suspension and termination",
    paragraphs: [
      "You can stop using Quiick Chat and delete your account at any time. We may suspend or end your access if you breach these Terms, if it's necessary to protect the service or other users, or if we're required to by law. Some provisions — like content licenses needed to deliver already-sent messages, disclaimers, and limitations of liability — survive termination.",
    ],
  },
  {
    heading: "12. Disclaimers",
    paragraphs: [
      "Quiick Chat is provided \"as is\" and \"as available.\" We work hard to make it reliable, but we don't guarantee that it will always be uninterrupted, error-free, or that messages and calls will always be delivered without delay. To the fullest extent permitted by law, we disclaim warranties not expressly stated here.",
    ],
  },
  {
    heading: "13. Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Quiick Chat and its team won't be liable for indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, or goodwill arising from your use of the service.",
    ],
  },
  {
    heading: "14. Changes to these Terms",
    paragraphs: [
      "We may update these Terms as the service evolves. When we make material changes, we'll update the date above and, where appropriate, notify you in the app. Continuing to use Quiick Chat after an update means you accept the revised Terms.",
    ],
  },
  {
    heading: "15. Contact us",
    paragraphs: [
      "Questions about these Terms? Reach us at support@quiickchat.com, or from inside the app at Settings → Help → Contact us.",
    ],
  },
];
