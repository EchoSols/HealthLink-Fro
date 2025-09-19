const RecentNotifications = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl text-gray-900">Recent Notifications</h2>
        <button className="text-sm text-[#118CDB] hover:underline font-medium">View more</button>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-600 mb-6">Here are your recent notifications.</p>
        
        {/* Placeholder notification items to match TopQueue height */}
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">New patient registration</p>
                <p className="text-sm text-gray-600">Sarah Johnson has registered for consultation</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-600 rounded-full px-2 py-1">New</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">Appointment reminder</p>
                <p className="text-sm text-gray-600">Upcoming appointment with John Doe at 2:00 PM</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-600 rounded-full px-2 py-1">Reminder</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">Lab results ready</p>
                <p className="text-sm text-gray-600">Blood test results for Maria Garcia are available</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
              <span className="text-xs bg-green-100 text-green-600 rounded-full px-2 py-1">Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentNotifications
