import StatsOverview from './StatsOverview'
import AnalyticsGrid from './AnalyticsGrid'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Social Media Analytics</h1>
      <StatsOverview />
      <AnalyticsGrid />
    </div>
  )
}

