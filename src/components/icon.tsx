import {
  Bot,
  CheckCircle2,
  Code2,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  Mic,
  PenTool,
  Rocket,
  Search,
  ShoppingCart,
  Sparkles,
  Target,
  TestTube2,
  TrendingUp,
  Video,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  video: Video,
  sparkles: Sparkles,
  target: Target,
  mail: Mail,
  layout: LayoutDashboard,
  shopping: ShoppingCart,
  check: CheckCircle2,
  mic: Mic,
  trending: TrendingUp,
  bot: Bot,
  code: Code2,
  search: Search,
  pen: PenTool,
  test: TestTube2,
  rocket: Rocket,
  support: LifeBuoy,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} />;
}
