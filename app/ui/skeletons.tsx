/**
 * This file contains skeleton loading components used throughout the application
 *
 * Key Concepts:
 * 1. Skeleton components provide visual feedback while content loads
 * 2. They mimic the shape and structure of the actual content
 * 3. Animations (like pulse) indicate that content is loading
 * 4. Improves perceived performance and user experience
 *
 * Tailwind Classes Used:
 * - animate-pulse: Adds a pulsing animation
 * - bg-gray-100/200: Light gray backgrounds for the skeleton
 * - rounded: Rounded corners
 * - Various sizing and spacing utilities
 */

// Skeleton for movie cards - matches the structure of MovieCard component
export function MovieCardSkeleton() {
  return (
    <div className="p-4 border rounded-lg bg-gray-100 animate-pulse">
      {/* Title placeholder */}
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      {/* Content placeholders */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}

// Skeleton for director cards - matches the structure of DirectorCard component
export function DirectorCardSkeleton() {
  return (
    <div className="p-4 border rounded-lg bg-gray-100 animate-pulse">
      {/* Name placeholder */}
      <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
      {/* Stats placeholders */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
}

// Skeleton for genre stats - matches the structure of GenreStats component
export function GenreStatsSkeleton() {
  return (
    <div className="p-4 border rounded-lg bg-gray-100 animate-pulse">
      {/* Title placeholder */}
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
      {/* Stats bars placeholders */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
}

// Combined dashboard skeleton that shows all loading states together
export function DashboardSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <DirectorCardSkeleton />
      <DirectorCardSkeleton />
      <GenreStatsSkeleton />
    </div>
  );
}
