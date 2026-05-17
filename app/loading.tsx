export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-white/10 border-t-accent-500 rounded-full animate-spin" />
        <p className="text-gray-400 mt-4">Loading...</p>
      </div>
    </div>
  )
}