import type { LucideIcon } from "lucide-react";

type SectionHeaderProps = {
  icon: LucideIcon;
  iconClassName?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeader({
  icon: Icon,
  iconClassName = "bg-tip-bg text-tip-text",
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${iconClassName}`}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h2 className="mt-4 text-2xl font-bold text-slate-text">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm text-slate-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
