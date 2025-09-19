import { Button } from "@/components/ui/button"
import Link from "next/link"

const patients = [
  { name: "Sarah Johnson", desc: "Chest pain and shortness of breath", position: 3 },
  { name: "Sarah Johnson", desc: "Chest pain and shortness of breath", position: 3 },
  { name: "Sarah Johnson", desc: "Chest pain and shortness of breath", position: 3 },
]

const TopQueue = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl text-gray-900">Top Queue</h2>
        <Link href={`/doctor/patients`}>
          <button className="text-sm text-[#118CDB] hover:underline font-medium">View more</button>
        </Link>
      </div>
      <p className="text-sm text-gray-600 mb-6">Here are your top queues.</p>

      <div className="space-y-4">
        {patients.map((p, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
            <div className="space-y-1">
              <p className="font-semibold text-gray-900">{p.name}</p>
              <p className="text-sm text-gray-600">{p.desc}</p>
              <p className="text-xs text-gray-500">Position: {p.position}</p>
            </div>
            <div className="flex gap-3">
              <Link href={`/doctor/patients/apt23056`}>
                <Button variant="outline" size="sm" className="border-gray-300">View Details</Button>
              </Link>
              <Button size="sm" className="bg-[#118CDB] hover:bg-[#0F7BC4] text-white">Call In</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopQueue
