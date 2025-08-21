import QueueList from "@/components/manager/patients/QueueList";
import QueueTabs from "@/components/manager/patients/QueueTabs";
import FiltersBar from "@/components/manager/staff/FiltersBar";
import PageHeader from "@/components/manager/staff/PageHeader";
import StatsCards from "@/components/manager/staff/StatsCard";

export default function QueuePage() {
  const stats = [
    { label: "Total Visit Requests", value: 12 },
    { label: "Available doctors", value: 12 },
    { label: "Total medical inventory", value: 12 },
    { label: "Total facilities", value: 12 },
  ];

  return (
    <div className="p-6">
      <PageHeader
        title="Queue Management"
        description="Manage patient queues and workloads"
        buttonText="Add Queue"
      />
      <StatsCards stats={stats} />
      <FiltersBar
        filterLabel="Filter By Date"
        filterOptions={[
          { value: "today", label: "Today" },
          { value: "week", label: "This Week" },
          { value: "month", label: "This Month" },
        ]}
        searchPlaceholder="Search..."
      />
      <QueueTabs 
        unassignedContent={<QueueList />} 
        allContent={<QueueList />} 
      />
    </div>
  );
}
