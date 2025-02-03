interface MovieCardProps {
  title: string;
  year: number;
  rating: number;
  genre: string;
  director: string;
  description: string;
}

export default function MovieCard({
  title,
  year,
  rating,
  genre,
  director,
  description,
}: MovieCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
          {year}
        </span>
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
          <span className="flex items-center">⭐ {rating.toFixed(1)}</span>
          <span>{genre}</span>
        </div>
        <p className="text-sm text-gray-500">Directed by {director}</p>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
