interface DirectorCardProps {
  name: string;
  moviesDirected: number;
  avgRating: number;
}

export default function DirectorCard({
  name,
  moviesDirected,
  avgRating,
}: DirectorCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{name}</h3>
      <div className="space-y-2 text-sm text-gray-600">
        <p>Movies Directed: {moviesDirected}</p>
        <p>Average Rating: ⭐ {avgRating.toFixed(1)}</p>
      </div>
    </div>
  );
}
