import TeamSection from '../components/team/TeamSection'

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Team</h1>
      <TeamSection showTitle={false} />
    </div>
  )
}

