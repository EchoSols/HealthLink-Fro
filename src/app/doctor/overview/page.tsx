import Card from "@/components/doctor/Card"
import TopQueue from "@/components/doctor/TopQueue"
import NextInQueue from "@/components/doctor/NextQueue"
import RecentNotifications from "@/components/doctor/RecentNotification"
import CalendarCard from "@/components/doctor/CalendarCard"

const Page = () => {
  const data = [
    { title: "Waiting", total: 12 },
    { title: "In consultation", total: 12 },
    { title: "Referred", total: 12 },
    { title: "Completed", total: 12 },
  ]

  return (
    <div className="w-full p-6 space-y-6">
      <h1 className="font-semibold text-2xl">Welcome back, John</h1>
      <p className="text-gray-600">Here&apos;s your health overview for today</p>

      {/* Status Cards */}
      <div className="flex gap-4">
        {data.map((item, idx) => (
          <Card key={idx} title={item.title} total={item.total} />
        ))}
      </div>

      {/* Queue + Next in Queue */}
      <div className="flex gap-4">
        <TopQueue />
        <NextInQueue />
      </div>

      {/* Notifications + Calendar */}
      <div className="flex gap-4">
        <RecentNotifications />
        <CalendarCard />
      </div>
    </div>
  )
}

export default Page
