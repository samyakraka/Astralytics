'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function PerformanceChart({ data, selectedMetric }) {
  const sortedData = [...data].sort((a, b) => new Date(a.postedat) - new Date(b.postedat))

  const chartData = sortedData.map(post => ({
    date: new Date(post.postedat).toLocaleDateString(),
    [selectedMetric]: post[selectedMetric]
  }))

  const getColor = () => {
    switch (selectedMetric) {
      case 'likes': return '#8b5cf6'
      case 'comments': return '#ec4899'
      case 'shares': return '#6366f1'
      case 'saves': return '#10b981'
      default: return '#8b5cf6'
    }
  }

  return (
    <div className="p-4 sm:p-6 backdrop-blur-sm bg-card/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
      <h3 className="text-lg font-semibold mb-4 sm:mb-6">Performance Over Time</h3>
      <div className="h-[250px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="date" stroke="currentColor" />
            <YAxis stroke="currentColor" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                borderRadius: '4px',
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey={selectedMetric} 
              stroke={getColor()} 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

