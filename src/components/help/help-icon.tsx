import {
  AtSign,
  Heart,
  Image,
  MessageCircle,
  Phone,
  Radio,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  MessageCircle,
  Image,
  Phone,
  Heart,
  Users,
  Radio,
  Sparkles,
  ShieldCheck,
  Settings,
  AtSign,
  Zap,
};

export function HelpIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? LifeBuoy;
  return <Icon className={className} />;
}
