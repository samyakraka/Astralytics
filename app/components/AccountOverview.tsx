import { Users, TrendingUp, UserPlus } from 'lucide-react'

export default function AccountOverview() {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Account Overview</h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Users className="h-6 w-6 text-purple-500" />
          <div>
            <div className="text-xl font-bold">Total Followers: 10.5K</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <TrendingUp className="h-6 w-6 text-green-500" />
          <div>
            <div className="text-xl font-bold">Engagement Rate: 3.2%</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <UserPlus className="h-6 w-6 text-blue-500" />
          <div>
            <div className="text-xl font-bold">New Followers: +250</div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Trending Metrics</h3>
          <div className="space-y-2">
            <div className="text-gray-300">#summervibe</div>
            <div className="text-gray-300">#foodie</div>
            <div className="text-gray-300">#travelblogger</div>
          </div>
        </div>
      </div>
    </div>
  )
}

