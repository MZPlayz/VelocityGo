
"use client";

import type { ReactNode } from "react";
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

interface SuggestionCardProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export function SuggestionCard({ icon, label, className }: SuggestionCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/booking');
  };

  return (
    <div className={cn("group block", className)}>
       <Button variant="ghost" className="h-auto w-auto p-0 m-0" onClick={handleClick}>
        <div className="flex flex-col items-center">
            <Card className="mb-2 flex aspect-square items-center justify-center bg-muted p-4 transition-colors group-hover:bg-primary/5">
                <div className="text-muted-foreground transition-colors group-hover:text-primary">
                {icon}
                </div>
            </Card>
            <p className="text-sm font-semibold">{label}</p>
        </div>
       </Button>
    </div>
  );
}
