import { ReactNode } from "react";

interface LinkSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const LinkSection = ({ title, children, delay = 0 }: LinkSectionProps) => {
  return (
    <section className="w-full">
      <h2 
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        {title}
      </h2>
      <div className="space-y-3">
        {children}
      </div>
    </section>
  );
};

export default LinkSection;
