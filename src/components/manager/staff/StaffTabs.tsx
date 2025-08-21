"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface StaffTabsProps {
  staffContent: React.ReactNode;
  departmentContent: React.ReactNode;
}

export default function StaffTabs({ staffContent, departmentContent }: StaffTabsProps) {
  return (
    <Tabs defaultValue="staff">
      <TabsList>
        <TabsTrigger value="staff">Staff directory</TabsTrigger>
        <TabsTrigger value="department">Department management</TabsTrigger>
      </TabsList>
      <TabsContent value="staff">{staffContent}</TabsContent>
      <TabsContent value="department">{departmentContent}</TabsContent>
    </Tabs>
  );
}
