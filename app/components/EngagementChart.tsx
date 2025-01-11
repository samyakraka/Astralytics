import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', engagement: 4000 },
  { name: 'Tue', engagement: 3000 },
  { name: 'Wed', engagement: 5000 },
  { name: 'Thu', engagement: 2780 },
  { name: 'Fri', engagement: 1890 },
  { name: 'Sat', engagement: 2390 },
  { name: 'Sun', engagement: 3490 },
]

export default function EngagementChart() {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 hover:bg-opacity-20 transition-all duration-200 ease-in-out">
      <h2 className="text-xl font-semibold mb-4">Weekly Engagement</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              borderRadius: '4px',
            }}
          />
          <Line type="monotone" dataKey="engagement" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

