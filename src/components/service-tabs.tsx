import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ServiceTabs() {
  return (
    <Tabs defaultValue="rides" className="flex w-full justify-center">
      <TabsList className="grid w-full max-w-xs grid-cols-2">
        <TabsTrigger value="rides">Rides</TabsTrigger>
        <TabsTrigger value="eats">Eats</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
