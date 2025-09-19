import Card from "@/components/doctor/Card";
import TopQueue from "@/components/doctor/TopQueue";
import NextInQueue from "@/components/doctor/NextQueue";
import RecentNotifications from "@/components/doctor/RecentNotification";
import CalendarCard from "@/components/doctor/CalendarCard";
import { Chatbot } from "@/components/patient/Chatbot";

const Page = () => {
  const data = [
    { title: "Waiting", total: 12 },
    { title: "In consultation", total: 12 },
    { title: "Referred", total: 12 },
    { title: "Completed", total: 12 },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="font-semibold text-3xl text-gray-900 mb-2">Welcome back, John</h1>
        <p className="text-gray-600 text-lg">
          Here&apos;s your health overview for today
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.map((item, idx) => (
          <Card key={idx} title={item.title} total={item.total} />
        ))}
      </div>

      {/* Queue Section - Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <TopQueue />
        </div>
        <div className="lg:col-span-1">
          <NextInQueue />
        </div>
      </div>

      {/* Notifications and Calendar - Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentNotifications />
        </div>
        <div className="lg:col-span-1">
          <CalendarCard />
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default Page;
