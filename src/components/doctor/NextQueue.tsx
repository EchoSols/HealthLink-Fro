import { Button } from "@/components/ui/button"
import Link from "next/link"

const NextInQueue = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <h2 className="font-semibold text-xl text-gray-900 mb-4">Next In Queue</h2>

      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-700">#DEP1234</span>
        <span className="text-xs border border-red-500 text-red-500 rounded-full px-3 py-1 font-medium">URGENT</span>
      </div>

      <div className="space-y-3 mb-6 flex-1">
        <p className="text-sm text-gray-500">10:00 AM</p>
        <div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Patient: </span>Sarah Johnson
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Complaint: </span>
            Chest pain and shortness of breath
          </p>
        </div>
      </div>

      <Link href={`/doctor/patients/apt23056`}>
        <Button className="w-full bg-[#118CDB] hover:bg-[#0F7BC4] text-white py-2 mt-auto">View Details</Button>
      </Link>
    </div>
  )
}

export default NextInQueue
