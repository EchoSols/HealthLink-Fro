import FiltersBar from "@/components/manager/staff/FiltersBar";
import PageHeader from "@/components/manager/staff/PageHeader";
import StaffList from "@/components/manager/staff/StaffList";
import StaffTabs from "@/components/manager/staff/StaffTabs";
import StatsCards from "@/components/manager/staff/StatsCard";


export default function StaffPage() {
  const stats = [
    { label: "Total Staff", value: 12 },
    { label: "Available departments", value: 12 },
    { label: "Active staff", value: 12 },
    { label: "Nurses", value: 12 },
  ];

  return (
    <div className="p-6">
      <PageHeader
        title="Users & Staff Management"
        description="Manage staff directory and user accounts"
        buttonText="Add User"
      />
      <StatsCards stats={stats} />
      <FiltersBar
        filterLabel="Filter By Role"
        filterOptions={[
          { value: "all", label: "All" },
          { value: "doctor", label: "Doctor" },
          { value: "nurse", label: "Nurse" },
        ]}
        searchPlaceholder="Search..."
      />
      <StaffTabs staffContent={<StaffList />} departmentContent={<div>Department management content here</div>} />
    </div>
  );
}
