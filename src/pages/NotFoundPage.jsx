import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="text-center py-24">
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <Link to="/" className="underline">Go back home</Link>
    </section>
  )
}