/**
 * This is a Server Component that demonstrates Dynamic Rendering in Next.js
 *
 * Key Concepts:
 * 1. Dynamic Rendering means the page is generated on each request
 * 2. Fresh data is fetched every time someone visits the page
 * 3. Great for pages where data changes frequently
 * 4. Slower than static pages but always shows current data
 *
 * Use cases:
 * - Dashboards
 * - User-specific content
 * - Real-time data displays
 * - Search results
 */

import MovieCard from "@/app/ui/movies/movie-card";
import { fetchMovies } from "@/app/lib/data";

// This page will be dynamically rendered at request time
export default async function DynamicPage() {
  // This data fetch happens on EVERY request
  // Unlike the static page, this will always show fresh data
  const movies = await fetchMovies();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Dynamic Rendering Example</h1>
          <p className="text-gray-600">
            This page demonstrates dynamic rendering. The movie data is fetched
            at request time, meaning it will always show the latest data. Notice
            the artificial delay added to simulate a real API call.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              genre={movie.genre}
              director={movie.director}
              description={movie.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

// This Next.js configuration option forces dynamic rendering
// This means the page will be rendered fresh on every request
export const dynamic = "force-dynamic";
