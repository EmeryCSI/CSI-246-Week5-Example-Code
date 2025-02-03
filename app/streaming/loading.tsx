import { DashboardSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
        <DashboardSkeleton />
      </div>
    </main>
  );
}
