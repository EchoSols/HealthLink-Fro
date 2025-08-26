
import QueueList from "@/components/manager/patients/QueueList";
import QueueTabs from "@/components/manager/patients/QueueTabs";
import PageHeader from "@/components/manager/staff/PageHeader";
import StatsCards from "@/components/manager/staff/StatsCard";
import AddUserModal from "@/components/modals/AddUserModal";

export default function QueuePage() {

  const stats = [
    { label: "Total Visit Requests", value: 12 },
    { label: "Available doctors", value: 12 },
    { label: "Total medical inventory", value: 12 },
    { label: "Total facilities", value: 12 },
  ];

  const queues = [
    {
      id: "#apt12345",
      name: "Sarah Sanyukaa",
      description: "Chest pain",
      serviceDate: "2024-01-15",
      imageUrl: "/man.png",
      assigned: false,
    },
    {
      id: "#apt67890",
      name: "Michael Porter",
      description: "High fever",
      serviceDate: "2024-01-20",
      imageUrl: "/man.png",
      assigned: true,
    },
    {
      id: "#apt11111",
      name: "Jane Doe",
      description: "Headache",
      serviceDate: "2024-01-25",
      imageUrl: "/man.png",
      assigned: false,
    },
  ];

  return (
    <div className="p-6">
      <PageHeader
        title="Users & Staff Management"
        description="Manage staff directory and user accounts"
        action={<AddUserModal />}
      />

      <StatsCards stats={stats} />      

      <QueueTabs
        unassignedContent={
          <QueueList queues={queues.filter((q) => !q.assigned)} />
        }
        allContent={<QueueList queues={queues} />}
      />
    </div>
  );
}
