import { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SkillCard({ skill }: { skill: Skill }) {
  const name = getMetafieldValue(skill.metadata?.name) || skill.title
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const years = skill.metadata?.years

  const profNum = typeof skill.metadata?.proficiency === 'number'
    ? skill.metadata.proficiency
    : parseInt(proficiency) || 0
  const profPercent = profNum > 0 && profNum <= 10 ? profNum * 10 : profNum > 0 && profNum <= 100 ? profNum : 0

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        {years !== undefined && years !== null && (
          <span className="text-xs text-gray-500">{years}y</span>
        )}
      </div>
      {proficiency && (
        <div className="mt-3">
          {profPercent > 0 ? (
            <>
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Proficiency</span>
                <span>{proficiency}</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full gradient-bg rounded-full transition-all"
                  style={{ width: `${profPercent}%` }}
                />
              </div>
            </>
          ) : (
            <span className="text-sm text-gray-400">{proficiency}</span>
          )}
        </div>
      )}
    </div>
  )
}