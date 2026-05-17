import SectionHeader from '@/components/SectionHeader'
import ExperienceCard from '@/components/ExperienceCard'
import { getWorkExperience } from '@/lib/cosmic'

export const metadata = {
  title: 'Experience | My Portfolio',
  description: 'My professional journey',
}

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          eyebrow="Career"
          title="Work Experience"
          description="My professional journey and key roles"
        />

        {experiences.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p>No experience entries yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}