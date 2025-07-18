import { Clock, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const recentLocations = [
  {
    icon: <Clock className="h-5 w-5 text-muted-foreground" />,
    name: "Home",
    address: "123 Main St, Anytown, USA",
  },
  {
    icon: <MapPin className="h-5 w-5 text-muted-foreground" />,
    name: "Office",
    address: "456 Business Ave, Downtown",
  },
];

export function RecentLocations() {
  return (
    <div className="space-y-4">
      {recentLocations.map((location, index) => (
        <div key={location.name}>
          <div className="group flex cursor-pointer items-center gap-4">
            <div className="rounded-full bg-muted p-3">
              {location.icon}
            </div>
            <div>
              <p className="font-semibold transition-colors group-hover:text-primary">{location.name}</p>
              <p className="text-sm text-muted-foreground">{location.address}</p>
            </div>
          </div>
          {index < recentLocations.length - 1 && <Separator className="mt-4" />}
        </div>
      ))}
    </div>
  );
}
