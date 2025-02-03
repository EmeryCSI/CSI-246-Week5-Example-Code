/**
 * This is a Server Component that demonstrates Parallel Data Fetching in Next.js
 *
 * Key Concepts:
 * 1. Parallel data fetching means multiple data requests are initiated simultaneously
 * 2. This avoids the "waterfall" effect where requests wait for each other
 * 3. Significantly faster than sequential fetching when data requests are independent
 * 4. Uses Promise.all() to handle multiple async requests
 *
 * Compare the loading time of this page with making each request sequentially:
 * - Sequential: ~4.5s (2s + 1.5s + 1s)
 * - Parallel: ~2s (longest single request)
 */

import MovieCard from "@/app/ui/movies/movie-card";
import DirectorCard from "@/app/ui/directors/director-card";
import GenreStats from "@/app/ui/stats/genre-stats";
import { fetchDashboardData } from "@/app/lib/data";

export default async function ParallelPage() {
  // fetchDashboardData uses Promise.all() to fetch all data in parallel
  // This is much faster than fetching each piece of data sequentially
  const { movies, directors, genres } = await fetchDashboardData();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Parallel Data Fetching Example
          </h1>
          <p className="text-gray-600">
            This page demonstrates parallel data fetching. All data requests are
            initiated simultaneously using Promise.all(), avoiding the waterfall
            effect. Check the console to see the timing of the requests.
          </p>
        </div>

        {/* Render all sections once data is available */}
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest Movies</h2>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Top Directors</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {directors.map((director) => (
                <DirectorCard
                  key={director.id}
                  name={director.name}
                  moviesDirected={director.moviesDirected}
                  avgRating={director.avgRating}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Genre Overview</h2>
            <GenreStats genres={genres} />
          </section>
        </div>
      </div>
    </main>
  );
}
