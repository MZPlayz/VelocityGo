import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface SuggestionCardProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export function SuggestionCard({ icon, label, className }: SuggestionCardProps) {
  return (
    <a href="#" className={cn("group block", className)}>
      <Card className="mb-2 flex aspect-square items-center justify-center bg-muted p-4 transition-colors group-hover:bg-primary/5">
        <div className="text-muted-foreground transition-colors group-hover:text-primary">
          {icon}
        </div>
      </Card>
      <p className="text-sm font-semibold">{label}</p>
    </a>
  );
}
