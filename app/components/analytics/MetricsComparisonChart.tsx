'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function MetricsComparisonChart({ data }) {
  // Process data to get average metrics by post type
  const processedData = data.reduce((acc, post) => {
    if (!acc[post.posttype]) {
      acc[post.posttype] = {
        type: post.posttype,
        likes: 0,
        comments: 0,
        shares: 0,
        saves: 0,
        count: 0
      }
    }
    acc[post.posttype].likes += post.likes
    acc[post.posttype].comments += post.comments
    acc[post.posttype].shares += post.shares
    acc[post.posttype].saves += post.saves
    acc[post.posttype].count += 1
    return acc
  }, {})

  const chartData = Object.values(processedData).map(item => ({
    type: item.type,
    likes: Math.round(item.likes / item.count),
    comments: Math.round(item.comments / item.count),
    shares: Math.round(item.shares / item.count),
    saves: Math.round(item.saves / item.count),
  }))

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Metrics Comparison by Post Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="type" stroke="currentColor" />
              <YAxis stroke="currentColor" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 24, 39, 0.95)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Legend />
              <Bar dataKey="likes" fill="#ec4899" name="Likes" />
              <Bar dataKey="comments" fill="#8b5cf6" name="Comments" />
              <Bar dataKey="shares" fill="#6366f1" name="Shares" />
              <Bar dataKey="saves" fill="#10b981" name="Saves" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

