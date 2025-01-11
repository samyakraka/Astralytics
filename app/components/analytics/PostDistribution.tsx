'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const COLORS = ['#ec4899', '#8b5cf6', '#6366f1', '#10b981']

export default function PostDistribution({ data }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const postTypes = data.reduce((acc, post) => {
    acc[post.posttype] = (acc[post.posttype] || 0) + 1
    return acc
  }, {})

  const chartData = Object.entries(postTypes).map(([name, value]) => ({
    name,
    value,
    percentage: ((value as number / data.length) * 100).toFixed(1)
  }))

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-background/90 p-3 rounded-lg border border-border shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <p className="font-medium text-foreground dark:text-white">{data.name}</p>
          <p className="text-sm text-muted-foreground dark:text-gray-300">{`${data.value} posts (${data.percentage}%)`}</p>
        </div>
      )
    }
    return null
  }

  const renderColorfulLegendText = (value: string) => {
    const item = chartData.find(d => d.name === value)
    return (
      <span className={`text-sm text-foreground dark:text-gray-300 ${isMobile ? 'text-center' : ''}`}>
        {`${value} (${item?.percentage}%)`}
      </span>
    )
  }

  return (
    <Card className="dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-foreground dark:text-white">Post Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] sm:h-[400px] md:h-[450px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={isMobile ? 40 : 60}
                outerRadius={isMobile ? 60 : 80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percentage }) => isMobile ? '' : `${name} (${percentage}%)`}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    className="stroke-background dark:stroke-gray-800 hover:opacity-80 transition-opacity"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                formatter={renderColorfulLegendText}
                layout={isMobile ? "horizontal" : "vertical"}
                align={isMobile ? "center" : "right"}
                verticalAlign={isMobile ? "bottom" : "middle"}
                wrapperStyle={isMobile ? { paddingTop: '20px' } : {}}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

