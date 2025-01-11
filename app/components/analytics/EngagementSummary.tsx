'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function EngagementSummary({ data }) {
  const engagementByType = data.reduce((acc, post) => {
    if (!acc[post.posttype]) {
      acc[post.posttype] = { total: 0, count: 0 }
    }
    acc[post.posttype].total += post.engagementrate
    acc[post.posttype].count += 1
    return acc
  }, {})

  const chartData = Object.entries(engagementByType).map(([type, { total, count }]) => ({
    type,
    rate: parseFloat((total / count).toFixed(2))
  }))

  return (
    <div className="p-4 sm:p-6 backdrop-blur-sm bg-card/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
      <h3 className="text-lg font-semibold mb-4 sm:mb-6">Engagement Summary</h3>
      <div className="h-[250px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                borderRadius: '4px',
              }}
            />
            <Bar dataKey="rate" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

