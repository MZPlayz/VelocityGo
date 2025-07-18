import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ServiceTabs() {
  return (
    <Tabs defaultValue="rides" className="flex w-full justify-center">
      <TabsList className="grid w-full max-w-xs grid-cols-1">
        <TabsTrigger value="rides">Rides</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
