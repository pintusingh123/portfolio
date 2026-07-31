export default function ProjectCard({
  title,
  description,
  role,
  tags,
  href,
  bg,
  titleColor,
  descriptionColor,
  tagBg,
  tagColor,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex size-full flex-col gap-2 rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] px-6 py-6 shadow-[4px_4px_0_0_#241f1b] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c1633b] sm:px-9 sm:py-8 ${bg}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className={`min-w-0 font-hand pt-1 text-[28px] leading-[1.1] break-words sm:text-[32px] ${titleColor}`}>
          {title}
          <span className="sr-only"> (opens in a new tab)</span>
        </h3>
        <span
          aria-hidden
          className={`shrink-0 font-sans text-2xl leading-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${titleColor}`}
        >
          ↗
        </span>
      </div>

      <p className={`font-sans text-base leading-[1.6] ${descriptionColor}`}>{description}</p>

      <p className={`font-sans text-sm leading-[1.6] opacity-90 ${descriptionColor}`}>
        <span className="font-bold">My role — </span>
        {role}
      </p>

      <div className="flex flex-wrap gap-2 pt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded px-2 py-0.5 font-sans text-sm ${tagBg} ${tagColor}`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </a>
  );
}
