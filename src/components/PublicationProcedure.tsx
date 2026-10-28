const steps = [
  {
    num: "01",
    title: "Submit Manuscript",
    desc: "Authors submit paper through our online submission portal. All formats (DOC/DOCX/PDF) are accepted.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Peer Review",
    desc: "Double-blind peer review by subject expert reviewers. Typically completed within 3–5 working days.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Revision & Payment",
    desc: "Authors revise as per reviewer comments and complete the affordable publication fee payment.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Publication",
    desc: "Paper is published in the current issue, assigned DOI, and indexed across all major databases.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function PublicationProcedure() {
  return (
    <section className="py-8">
      <div className="mb-6">
        <h2 className="section-title text-2xl font-bold text-gray-800">Publication Procedure</h2>
        <p className="text-gray-500 text-sm mt-3">Simple 4-step process to get your paper published</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#e67e22] to-[#c0392b] z-10" />
            )}

            {/* Step number background */}
            <div className="absolute top-4 right-4 text-6xl font-black text-gray-50 leading-none select-none">
              {step.num}
            </div>

            {/* Icon circle */}
            <div className="step-icon relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#e67e22] bg-orange-50 px-2 py-0.5 rounded-full">
                  Step {step.num}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

