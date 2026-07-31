import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#faf6f0] px-6 py-24 sm:py-32 lg:px-8 text-[#4a4038]">
      <div className="text-center">
        <p className="font-sans text-base font-bold text-[#c1633b]">404</p>
        <h1 className="mt-4 font-hand text-[clamp(2.5rem,6vw+1rem,4.5rem)] leading-none text-[#241f1b]">
          Page Not Found
        </h1>
        <p className="mt-4 font-sans text-base sm:text-lg text-[#4a4038] max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#241f1b] bg-[#241f1b] px-6 py-3 font-hand text-lg text-[#f7f1e6] shadow-[4px_4px_0_0_#d8c7ac] transition-transform hover:-translate-y-0.5"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
