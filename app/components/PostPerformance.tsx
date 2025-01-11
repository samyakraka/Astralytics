import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Photo', likes: 4000, comments: 2400 },
  { name: 'Video', likes: 3000, comments: 1398 },
  { name: 'Carousel', likes: 2000, comments: 9800 },
  { name: 'Reels', likes: 2780, comments: 3908 },
]

export default function PostPerformance() {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 hover:bg-opacity-20 transition-all duration-200 ease-in-out">
      <h2 className="text-xl font-semibold mb-4">Post Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              borderRadius: '4px',
            }}
          />
          <Bar dataKey="likes" fill="#6366f1" />
          <Bar dataKey="comments" fill="#9333ea" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

