import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

const stats = [
  { name: 'Total Followers', value: '10.5K', trend: 5.3 },
  { name: 'Engagement Rate', value: '3.2%', trend: -0.8 },
  { name: 'Reach', value: '45.2K', trend: 12.1 },
  { name: 'Impressions', value: '102.7K', trend: 8.4 },
]

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 hover:bg-opacity-20 transition-all duration-200 ease-in-out"
        >
          <h2 className="text-lg font-semibold mb-2">{stat.name}</h2>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">{stat.value}</span>
            <span className={`flex items-center ${stat.trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stat.trend > 0 ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
              {Math.abs(stat.trend)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

