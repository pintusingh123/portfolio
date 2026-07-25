import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#0b1326] px-6 py-24 sm:py-32 lg:px-8 text-[#dae2fd]">
      <div className="text-center">
        <p className="text-base font-bold text-[#4cd7f6]">404</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display">
          Page Not Found
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#c7c4d7] max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-full bg-gradient-to-r from-[#c0c1ff] to-[#4cd7f6] px-6 py-3 text-sm font-bold text-[#07006c] hover:brightness-110 shadow-lg transition hover:scale-105"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
