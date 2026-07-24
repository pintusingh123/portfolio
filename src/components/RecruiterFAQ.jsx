import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./buttons/Button";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "Are you available for immediate full-time / remote developer roles?",
    answer: "Yes! I am actively looking for full-time Software Engineering / Web Developer opportunities (Remote or In-office) and can join immediately.",
  },
  {
    question: "What are your core technical strengths?",
    answer: "My core stack includes Frontend with React.js, Vite, JavaScript (ES6+), and Tailwind CSS, paired with robust Backend development using Python, Django, Django REST Framework, and PostgreSQL databases.",
  },
  {
    question: "What production projects have you built?",
    answer: "I have built over 15 web projects, including TaskFlow Pro (Django Task System), Cropify (Stripe + LocalStorage Auth Image Editor), full-stack E-Commerce applications, and custom analytical trading web apps.",
  },
  {
    question: "How can hiring managers or recruiters reach you quickly?",
    answer: "You can reach me directly via phone/call (+91-800-364-2596), WhatsApp chat, or email (pintujhala4@gmail.com). I respond promptly!",
  },
];

export default function RecruiterFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#dae2fd]">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <Button title="Recruiter Q&A" />
        <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight font-display">
          Quick Answers for Hiring Managers
        </h2>
        <p className="mt-3 text-[#c7c4d7] max-w-xl text-sm sm:text-base">
          Key highlights regarding availability, technical fit, and employment readiness.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-[#c0c1ff]/15 overflow-hidden transition-all duration-300 shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#dae2fd] hover:text-[#c0c1ff] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <FaQuestionCircle className="text-[#4cd7f6] shrink-0" />
                  {item.question}
                </span>
                <FaChevronDown
                  className={`text-[#c0c1ff] transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#4cd7f6]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#c7c4d7] leading-relaxed border-t border-[#908fa0]/15">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
