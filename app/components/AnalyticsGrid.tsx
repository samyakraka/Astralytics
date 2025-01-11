import PostPerformance from './PostPerformance'
import EngagementChart from './EngagementChart'
import AudienceGrowth from './AudienceGrowth'

export default function AnalyticsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <PostPerformance />
      <EngagementChart />
      <AudienceGrowth />
    </div>
  )
}

