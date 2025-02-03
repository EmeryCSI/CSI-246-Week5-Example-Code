/**
 * This is a Server Component that demonstrates Streaming with Suspense in Next.js
 *
 * Key Concepts:
 * 1. Streaming allows you to progressively render UI as data becomes available
 * 2. React Suspense lets you show fallback content while data loads
 * 3. Each Suspense boundary can load independently
 * 4. Users see partial content faster, improving perceived performance
 *
 * Benefits:
 * - Faster initial page load
 * - Better user experience with loading states
 * - Independent loading of different sections
 * - No need to wait for all data before showing UI
 */

import { Suspense } from "react";
import {
  MovieCardSkeleton,
  DirectorCardSkeleton,
  GenreStatsSkeleton,
} from "@/app/ui/skeletons";
import MovieCard from "@/app/ui/movies/movie-card";
import DirectorCard from "@/app/ui/directors/director-card";
import GenreStats from "@/app/ui/stats/genre-stats";
import {
  fetchMovies,
  fetchTopDirectors,
  fetchGenreStats,
} from "@/app/lib/data";

/**
 * These components fetch their own data independently
 * Each one is wrapped in Suspense in the main component
 * This allows them to load in parallel and show individual loading states
 */

async function MovieSection() {
  const movies = await fetchMovies(); // 2 second delay
  return (
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
  );
}

async function DirectorSection() {
  const directors = await fetchTopDirectors(); // 1.5 second delay
  return (
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
  );
}

async function GenreSection() {
  const genres = await fetchGenreStats(); // 1 second delay
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Genre Overview</h2>
      <GenreStats genres={genres} />
    </section>
  );
}

export default function StreamingPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Streaming with Suspense Example
          </h1>
          <p className="text-gray-600">
            This page demonstrates streaming with React Suspense. Each section
            is wrapped in a Suspense boundary with a loading skeleton, allowing
            parts of the page to load independently. Notice how the UI streams
            in as the data becomes available.
          </p>
        </div>

        <div className="grid gap-8">
          {/* 
            Each section is wrapped in Suspense with a loading skeleton
            The sections will load independently in this order:
            1. Genre Overview (1s delay)
            2. Director Section (1.5s delay)
            3. Movie Section (2s delay)
          */}
          <Suspense
            fallback={
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <MovieCardSkeleton />
                <MovieCardSkeleton />
                <MovieCardSkeleton />
              </div>
            }
          >
            <MovieSection />
          </Suspense>

          <Suspense
            fallback={
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DirectorCardSkeleton />
                <DirectorCardSkeleton />
              </div>
            }
          >
            <DirectorSection />
          </Suspense>

          <Suspense fallback={<GenreStatsSkeleton />}>
            <GenreSection />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
