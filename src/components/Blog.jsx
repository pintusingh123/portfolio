import { useMemo, useState } from "react";

const posts = [
  {
    title: "Building a Modern Portfolio with React & Tailwind",
    date: "May 2026",
    readingTime: "5 min read",
    excerpt:
      "A walkthrough of the decisions, animations, and responsive design patterns I used to build a polished portfolio experience.",
    tags: ["React", "Tailwind", "Portfolio"],
    category: "Web Design",
  },
  {
    title: "Creating Smooth Motion with Mouse Smoke Effects",
    date: "April 2026",
    readingTime: "4 min read",
    excerpt:
      "How I implemented interactive cursor-driven visuals that feel modern without sacrificing performance.",
    tags: ["Animation", "UX", "JavaScript"],
    category: "JavaScript",
  },
  {
    title: "Designing Component-First UI for Faster Development",
    date: "March 2026",
    readingTime: "6 min read",
    excerpt:
      "Tips for turning reusable UI building blocks into consistent, maintainable app sections.",
    tags: ["Components", "Design", "Architecture"],
    category: "React",
  },
  {
    title: "How I Structure Projects for Growth and Clarity",
    date: "February 2026",
    readingTime: "3 min read",
    excerpt:
      "A practical method for organizing files, routes, and theme styles in personal apps and client websites.",
    tags: ["Best Practices", "Project Structure", "Workflow"],
    category: "Productivity",
  },
];

const categories = ["All", "React", "Web Design", "JavaScript", "Productivity"];

function Blog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.tags.includes(activeCategory) ||
        post.category === activeCategory;
      const matchesSearch =
        normalizedQuery === "" ||
        [post.title, post.excerpt, post.tags.join(" "), post.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
            Blog
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Stories from my developer journey.
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            Explore articles, insights, and practical notes about building
            better websites, polished interactions, and stronger developer
            habits.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.7fr_0.9fr]">
          <section className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">
                    Search & filter
                  </p>
                  <h2 className="text-2xl font-semibold text-white">
                    Find the article you need
                  </h2>
                </div>
                <div className="relative w-full sm:w-[360px]">
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search articles, tags, or keywords..."
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/95 px-5 py-3 text-sm text-slate-100 outline-none ring-yellow-400/10 transition focus:border-yellow-400 focus:ring-2"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeCategory === category
                        ? "bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/10"
                        : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article
                    key={post.title}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-7 shadow-xl shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-yellow-400/30"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-yellow-300">
                          {post.category}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                          {post.title}
                        </h3>
                      </div>
                      <span className="inline-flex rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200">
                        {post.readingTime}
                      </span>
                    </div>

                    <p className="mt-5 text-base leading-7 text-slate-300">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                      <span>{post.date}</span>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 transition hover:text-white"
                      >
                        Read more
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </a>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 text-center text-slate-400">
                  <p className="text-lg font-semibold text-white">
                    No articles match your search.
                  </p>
                  <p className="mt-3 text-sm text-slate-400">
                    Try another keyword or choose a different category.
                  </p>
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">
                Featured topics
              </p>
              <h2 className="text-2xl font-semibold text-white">
                What I write about most
              </h2>
              <p className="text-slate-400">
                Focus areas for articles, guides, and quick notes I publish
                regularly.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                "Design systems and reusable UI",
                "Interactive animations and motion",
                "Performance-focused front-end",
                "Project planning and workflow",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-yellow-400/15 bg-yellow-400/5 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">
                Want a custom story?
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Let’s write something together.
              </h3>
              <p className="mt-3 text-slate-300">
                I can share ideas, tutorials, or project breakdowns tailored to
                your website, portfolio, or product.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
              >
                Message me
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Blog;
