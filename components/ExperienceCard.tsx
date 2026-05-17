import { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const jobTitle = getMetafieldValue(experience.metadata?.job_title) || experience.title
  const company = getMetafieldValue(experience.metadata?.company)
  const location = getMetafieldValue(experience.metadata?.location)
  const description = getMetafieldValue(experience.metadata?.description)
  const startDate = formatDate(getMetafieldValue(experience.metadata?.start_date))
  const endDateRaw = getMetafieldValue(experience.metadata?.end_date)
  const isCurrent = experience.metadata?.current === true
  const endDate = isCurrent ? 'Present' : formatDate(endDateRaw)
  const logo = experience.metadata?.company_logo

  return (
    <div className="card p-6 md:p-8">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-white/5 p-2">
            <img
              src={`${logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={company}
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl font-bold">{jobTitle}</h3>
              {company && <p className="text-gray-300">{company}{location && <span className="text-gray-500"> · {location}</span>}</p>}
            </div>
            <div className="text-sm text-gray-400 flex-shrink-0">
              {startDate} — {endDate}
            </div>
          </div>
          {description && (
            <p className="text-gray-400 mt-3 leading-relaxed whitespace-pre-line">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}