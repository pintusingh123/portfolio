import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "Are you available for immediate full-time / remote developer roles?",
    answer:
      "Yes! I am actively looking for full-time Software Engineering / Web Developer opportunities (remote or in-office) and can join immediately.",
  },
  {
    question: "What are your core technical strengths?",
    answer:
      "My core stack is frontend with React.js, Vite, JavaScript (ES6+), and Tailwind CSS, paired with backend development using Python, Django, Django REST Framework, and PostgreSQL.",
  },
  {
    question: "What production projects have you built?",
    answer:
      "I've built over 15 web projects, including TaskFlow (a Django task system), Cropify (a Stripe-powered image editor), a full-stack e-commerce platform, and a custom analytical trading web app.",
  },
  {
    question: "How can hiring managers or recruiters reach you quickly?",
    answer:
      "You can reach me directly via phone/call (+91-800-364-2596), WhatsApp chat, or email (pintujhala4@gmail.com). I respond promptly!",
  },
];

export default function RecruiterFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col items-center text-center mb-10">
        <span className="font-sans text-sm font-bold tracking-[0.7px] text-[#9a4f2f] uppercase">
          Recruiter Q&A
        </span>
        <h2 className="mt-3 font-hand text-[clamp(1.75rem,4vw+1rem,2.5rem)] leading-[1.2] text-[#241f1b]">
          Quick Answers for Hiring Managers
        </h2>
        <p className="mt-3 font-sans text-base text-[#4a4038] max-w-xl">
          Key highlights regarding availability, technical fit, and employment readiness.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.question}
              className="rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] bg-white shadow-[4px_4px_0_0_#241f1b] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-sans text-sm sm:text-base font-bold text-[#241f1b] transition-colors hover:text-[#9a4f2f]"
              >
                <span className="flex items-center gap-3">
                  <FaQuestionCircle className="text-[#c1633b] shrink-0" />
                  {item.question}
                </span>
                <FaChevronDown
                  className={`shrink-0 text-[#c1633b] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 pt-1 font-sans text-sm sm:text-base text-[#4a4038] leading-relaxed border-t border-[#d8c7ac]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
