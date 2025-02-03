import MovieCard from "@/app/ui/movies/movie-card";
import { fetchMovies } from "@/app/lib/data";

// This page will be statically generated at build time
export default async function StaticPage() {
  const movies = await fetchMovies();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Static Rendering Example</h1>
          <p className="text-gray-600">
            This page demonstrates static rendering. The movie data is fetched
            at build time and will remain the same until the next deployment.
            This is great for content that doesn't change often. Notice that
            unlike the dynamic page, there is no loading delay when you refresh
            because the content is pre-rendered.
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

// Enable static rendering
export const dynamic = "force-static";
