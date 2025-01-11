import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', followers: 4000 },
  { name: 'Feb', followers: 5000 },
  { name: 'Mar', followers: 6000 },
  { name: 'Apr', followers: 7000 },
  { name: 'May', followers: 8500 },
  { name: 'Jun', followers: 10000 },
]

export default function AudienceGrowth() {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 hover:bg-opacity-20 transition-all duration-200 ease-in-out">
      <h2 className="text-xl font-semibold mb-4">Audience Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              borderRadius: '4px',
            }}
          />
          <Area type="monotone" dataKey="followers" stroke="#9333ea" fill="url(#colorGradient)" />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#9333ea" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

