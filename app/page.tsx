//import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Our Landing Page</h1>
        <p className="mt-4 text-lg">
          A place where you can find everything you need.
        </p>

        <div className="mt-6">
          <Link
            href="/get-started"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200"
          >
            Get Started Now!
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Fast & Optimized</h3>
            <p className="mt-2 text-gray-600">Load your site in seconds.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Modern Design</h3>
            <p className="mt-2 text-gray-600">
              Attractive and easy-to-use interface.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">SEO Optimized</h3>
            <p className="mt-2 text-gray-600">
              Improve your ranking on Google.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Testimonials</h2>
        <div className="mt-8 max-w-3xl mx-auto">
          <p className="text-lg italic text-gray-700">
            "This platform changed my business. It's incredibly easy to use and
            efficient."
          </p>
          <p className="mt-4 font-semibold">- John Doe, CEO of Company X</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
