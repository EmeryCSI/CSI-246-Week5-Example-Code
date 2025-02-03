import Link from "next/link";

/**
 * Home page that introduces Next.js data fetching concepts
 * and provides navigation to different examples
 */
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 bg-white rounded-lg shadow-md p-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Next.js Data Fetching Patterns
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A practical guide to different data fetching techniques in Next.js
            14. Explore real-world examples of static, dynamic, parallel, and
            streaming data fetching.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Static Rendering Example */}
          <Link
            href="/static"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-2 text-black">
              Static Rendering
            </h2>
            <p className="text-gray-600 mb-4">
              Learn how to pre-render pages at build time for optimal
              performance. Perfect for content that doesn't change frequently.
            </p>
            <div className="text-sm text-gray-500">
              <p>Key concepts:</p>
              <ul className="list-disc list-inside">
                <li>Build-time data fetching</li>
                <li>Zero loading states</li>
                <li>Fastest page loads</li>
              </ul>
            </div>
          </Link>

          {/* Dynamic Rendering Example */}
          <Link
            href="/dynamic"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-2 text-black">
              Dynamic Rendering
            </h2>
            <p className="text-gray-600 mb-4">
              Explore how to fetch fresh data on every request. Ideal for
              real-time or frequently updated content.
            </p>
            <div className="text-sm text-gray-500">
              <p>Key concepts:</p>
              <ul className="list-disc list-inside">
                <li>Request-time data fetching</li>
                <li>Always fresh content</li>
                <li>Loading states</li>
              </ul>
            </div>
          </Link>

          {/* Parallel Data Fetching Example */}
          <Link
            href="/parallel"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-2 text-black">
              Parallel Data Fetching
            </h2>
            <p className="text-gray-600 mb-4">
              See how to fetch multiple data sources simultaneously for better
              performance. Avoid request waterfalls and reduce loading times.
            </p>
            <div className="text-sm text-gray-500">
              <p>Key concepts:</p>
              <ul className="list-disc list-inside">
                <li>Promise.all() pattern</li>
                <li>Avoiding waterfalls</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </Link>

          {/* Streaming Example */}
          <Link
            href="/streaming"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-2 text-black">
              Streaming with Suspense
            </h2>
            <p className="text-gray-600 mb-4">
              Learn how to progressively render UI as data becomes available.
              Improve perceived performance with loading skeletons.
            </p>
            <div className="text-sm text-gray-500">
              <p>Key concepts:</p>
              <ul className="list-disc list-inside">
                <li>React Suspense</li>
                <li>Progressive loading</li>
                <li>Loading skeletons</li>
              </ul>
            </div>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-black">About This Demo</h2>
          <p className="text-gray-700 mb-4">
            This application demonstrates different approaches to fetching and
            rendering data in Next.js. Each example includes artificial delays
            to help visualize loading states and data fetching patterns.
          </p>
          <p className="text-gray-700">
            The examples use a movie database theme to show how these patterns
            work in a real-world context. Explore each example to understand
            when and why you might use different data fetching strategies.
          </p>
        </div>
      </div>
    </main>
  );
}
