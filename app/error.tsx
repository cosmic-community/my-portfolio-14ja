'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-3">Something went wrong</h2>
        <p className="text-gray-400 mb-6">We couldn't load this page. Please try again.</p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  )
}