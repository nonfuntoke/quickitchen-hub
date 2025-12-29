import { LucideIcon } from "lucide-react";

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  sublabel?: string;
  delay?: number;
}

const LinkButton = ({ href, icon: Icon, label, sublabel, delay = 0 }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button flex items-center gap-4 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 text-left">
        <div className="font-semibold text-base">{label}</div>
        {sublabel && (
          <div className="text-sm opacity-70">{sublabel}</div>
        )}
      </div>
      <svg
        className="w-5 h-5 opacity-50 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

export default LinkButton;
