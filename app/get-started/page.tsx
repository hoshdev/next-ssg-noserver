import Post from "@/components/Post";
import Link from "next/link";
import { Suspense } from "react";

export default function GetStarted({
  searchParams,
}: {
  searchParams: { [k: string]: string };
}) {
  console.log("searchParams", searchParams);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-blue-600">Get Started</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-lg">
        Join us today and experience the best features for your business.
      </p>
      <Suspense fallback={<div>Loading....</div>}>
        <Post />
      </Suspense>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
