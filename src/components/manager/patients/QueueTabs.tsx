"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface QueueTabsProps {
  unassignedContent: React.ReactNode;
  allContent: React.ReactNode;
}

export default function QueueTabs({ unassignedContent, allContent }: QueueTabsProps) {
  return (
    <Tabs defaultValue="unassigned">
      <TabsList>
        <TabsTrigger value="unassigned">Unassigned</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
      </TabsList>
      <TabsContent value="unassigned">{unassignedContent}</TabsContent>
      <TabsContent value="all">{allContent}</TabsContent>
    </Tabs>
  );
}
