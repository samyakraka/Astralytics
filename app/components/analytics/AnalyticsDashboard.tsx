'use client'

import { useState } from 'react'
import DateRangePicker from './DateRangePicker'
import MetricsGrid from './MetricsGrid'
import PostDistribution from './PostDistribution'
import EngagementSummary from './EngagementSummary'
import PerformanceChart from './PerformanceChart'
import MetricsComparisonChart from './MetricsComparisonChart'
import { Download, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import CSVUpload from './CSVUpload'
import PostAnalysis from './PostAnalysis'

const metricOptions = [
  { value: 'all', label: 'All Metrics' },
  { value: 'likes', label: 'Likes' },
  { value: 'comments', label: 'Comments' },
  { value: 'shares', label: 'Shares' },
  { value: 'saves', label: 'Saves' },
  { value: 'captionlength', label: 'Caption Length' },
  { value: 'hashtagscount', label: 'Hashtag Count' },
  { value: 'posthour', label: 'Post Hour' },
]

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 1),
    to: new Date(2024, 2, 31),
  })
  const [data, setData] = useState([])
  const [selectedMetric, setSelectedMetric] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  const handleDataLoaded = (loadedData) => {
    setIsLoading(false)
    const processedData = loadedData.map(item => ({
      postid: item.postid || '',
      posttype: item.posttype || '',
      postedat: item.postedat ? new Date(item.postedat) : new Date(),
      likes: parseInt(item.likes) || 0,
      comments: parseInt(item.comments) || 0,
      shares: parseInt(item.shares) || 0,
      saves: parseInt(item.saves) || 0,
      captionlength: parseInt(item.captionlength) || 0,
      hashtagscount: parseInt(item.hashtagscount) || 0,
      posthour: parseInt(item.posthour) || 0,
      totalengagement: parseInt(item.totalengagement) || 0,
      engagementrate: parseFloat(item.engagementrate) || 0
    }))
    setData(processedData)
  }

  return (
    <div className="space-y-6 p-4 md:p-6 bg-background">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Analytics Dashboard
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <CSVUpload onDataLoaded={handleDataLoaded} />
            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger className="w-[140px] sm:w-[180px]">
                <SelectValue placeholder="Select Metric" />
              </SelectTrigger>
              <SelectContent>
                {metricOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="shrink-0">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="shrink-0">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="w-full">
          <DateRangePicker date={dateRange} setDate={setDateRange} />
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-4 text-lg text-muted-foreground">Loading analytics data...</p>
        </div>
      ) : data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-xl text-muted-foreground text-center">
            No data available. Please upload a CSV file or load sample data to see the analysis.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-6">
            <MetricsGrid data={data} />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <PostDistribution data={data} />
            <EngagementSummary data={data} />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <PerformanceChart data={data} selectedMetric={selectedMetric} />
            <MetricsComparisonChart data={data} />
          </div>
          
          <PostAnalysis data={data} />
        </div>
      )}
    </div>
  )
}

