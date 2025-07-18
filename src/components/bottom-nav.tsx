import { Home, LayoutGrid, List, User } from "lucide-react";

export function BottomNav() {
  const navItems = [
    { icon: <Home className="size-6" />, label: "Home", active: true },
    { icon: <LayoutGrid className="size-6" />, label: "Services", active: false },
    { icon: <List className="size-6" />, label: "Activity", active: false },
    { icon: <User className="size-6" />, label: "Account", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-background border-t shadow-t-lg">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex w-full flex-col items-center justify-center gap-1 transition-colors hover:text-primary ${
              item.active ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
