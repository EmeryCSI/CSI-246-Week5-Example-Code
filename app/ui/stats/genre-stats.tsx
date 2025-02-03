interface GenreStatsProps {
  genres: {
    name: string;
    movieCount: number;
  }[];
}

export default function GenreStats({ genres }: GenreStatsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Genre Statistics
      </h3>
      <div className="space-y-4">
        {genres.map((genre) => (
          <div key={genre.name} className="flex justify-between items-center">
            <span className="text-gray-600">{genre.name}</span>
            <div className="flex items-center gap-2">
              <div
                className="h-2 bg-blue-200 rounded-full"
                style={{ width: `${(genre.movieCount / 100) * 100}px` }}
              />
              <span className="text-sm text-gray-500">{genre.movieCount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
