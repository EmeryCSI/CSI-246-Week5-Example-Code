/**
 * This file simulates a data layer that could be replaced with real API calls or database queries.
 * In a real application, these functions would likely be calling an external API or database.
 */

// TypeScript interfaces define the shape of our data
// This helps with type safety and autocompletion
interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  director: string;
  description: string;
}

interface Director {
  id: number;
  name: string;
  moviesDirected: number;
  avgRating: number;
}

interface Genre {
  name: string;
  movieCount: number;
}

// Mock data that simulates what we might get from a database
// In a real app, this would come from your database or API
const movies: Movie[] = [
  {
    id: 1,
    title: "The Digital Network",
    year: 2023,
    rating: 4.5,
    genre: "Sci-Fi",
    director: "Sarah Johnson",
    description:
      "A thrilling journey into the future of AI and human connection.",
  },
  {
    id: 2,
    title: "Mountain's Echo",
    year: 2024,
    rating: 4.8,
    genre: "Drama",
    director: "Michael Chen",
    description:
      "An emotional story of survival and human spirit in the wilderness.",
  },
  {
    id: 3,
    title: "City Lights Out",
    year: 2023,
    rating: 4.2,
    genre: "Thriller",
    director: "James Wilson",
    description: "When the city goes dark, secrets come to light.",
  },
  // Add more movies as needed
];

const directors: Director[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    moviesDirected: 15,
    avgRating: 4.6,
  },
  {
    id: 2,
    name: "Michael Chen",
    moviesDirected: 8,
    avgRating: 4.4,
  },
  {
    id: 3,
    name: "James Wilson",
    moviesDirected: 12,
    avgRating: 4.3,
  },
];

const genres: Genre[] = [
  { name: "Sci-Fi", movieCount: 45 },
  { name: "Drama", movieCount: 82 },
  { name: "Thriller", movieCount: 38 },
  { name: "Comedy", movieCount: 67 },
];

/**
 * Helper function to simulate network delay
 * In a real app, this delay would be actual network latency or database query time
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Data fetching functions with artificial delays
 * These demonstrate different loading states in the UI
 *
 * In Next.js, when these functions are called directly in Server Components,
 * they are executed on the server, making them secure for database access
 */

// Simulates a slower API call (2 seconds)
export async function fetchMovies(): Promise<Movie[]> {
  console.log("Fetching movies...");
  await delay(2000); // Longest delay to demonstrate loading states
  return movies;
}

// Simulates a medium-speed API call (1.5 seconds)
export async function fetchTopDirectors(): Promise<Director[]> {
  console.log("Fetching directors...");
  await delay(1500);
  return directors;
}

// Simulates a faster API call (1 second)
export async function fetchGenreStats(): Promise<Genre[]> {
  console.log("Fetching genre stats...");
  await delay(1000);
  return genres;
}

// Simulates fetching a single movie by ID
export async function fetchMovieById(id: number): Promise<Movie | undefined> {
  console.log(`Fetching movie ${id}...`);
  await delay(1000);
  return movies.find((movie) => movie.id === id);
}

/**
 * Example of parallel data fetching using Promise.all()
 * This is more efficient than sequential fetches as all requests start simultaneously
 *
 * In a real app, this could be multiple API calls or database queries that don't depend on each other
 */
export async function fetchDashboardData() {
  const [moviesData, directorsData, genresData] = await Promise.all([
    fetchMovies(),
    fetchTopDirectors(),
    fetchGenreStats(),
  ]);

  return {
    movies: moviesData,
    directors: directorsData,
    genres: genresData,
  };
}
