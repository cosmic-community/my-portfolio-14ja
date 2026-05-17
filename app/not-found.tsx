import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-7xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-6">Page not found</p>
        <Link href="/" className="inline-block px-6 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity">
          Back home
        </Link>
      </div>
    </div>
  )
}