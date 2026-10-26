import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <section className="text-center py-24">
      <h1 className="text-4xl font-bold mb-4">
        {isRouteErrorResponse(error) ? error.status : 'Something went wrong'}
      </h1>
      <p className="mb-6">{error?.statusText || error?.message}</p>
      <Link to="/" className="underline">Go back home</Link>
    </section>
  )
}