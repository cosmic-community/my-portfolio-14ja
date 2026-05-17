export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  )
}