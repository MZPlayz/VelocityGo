import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LocationSearch() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="rides" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="rides">Rides</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Where to?"
          className="w-full border-none bg-muted py-6 pl-12 text-base font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
      </div>
    </div>
  );
}
