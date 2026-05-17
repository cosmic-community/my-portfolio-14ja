import SectionHeader from '@/components/SectionHeader'
import SkillCard from '@/components/SkillCard'
import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import { Skill } from '@/types'

export const metadata = {
  title: 'Skills | My Portfolio',
  description: 'Technologies and skills',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  const grouped: Record<string, Skill[]> = {}
  for (const skill of skills) {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }
    const list = grouped[category]
    if (list) {
      list.push(skill)
    }
  }

  const categoryKeys = Object.keys(grouped).sort()

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills & Expertise"
          description="Technologies, tools, and platforms I work with"
        />

        {skills.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p>No skills to show yet.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {categoryKeys.map((category) => {
              const categorySkills = grouped[category]
              if (!categorySkills || categorySkills.length === 0) {
                return null
              }
              return (
                <div key={category}>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-0.5 gradient-bg rounded-full" />
                    {category}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categorySkills.map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}