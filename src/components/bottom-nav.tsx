
"use client";

import Link from "next/link";
import { Home, LayoutGrid, List, User, Shield } from "lucide-react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: <Home className="size-6" />, label: "Home", href: "/" },
    { icon: <LayoutGrid className="size-6" />, label: "Services", href: "/services" },
    { icon: <List className="size-6" />, label: "Activity", href: "/activity" },
    { icon: <User className="size-6" />, label: "Account", href: "/account" },
    { icon: <Shield className="size-6" />, label: "Admin", href: "/admin" },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-background border-t shadow-t-lg">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex w-full flex-col items-center justify-center gap-1 transition-colors hover:text-primary",
              pathname === item.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
