import Link from "next/link";

export default function UGCInfoCard() {
  return (
    <section id="about" className="py-8">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#c0392b] flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-white font-bold text-lg">
            About UGC CARE Notification — IJVRA
          </h2>
          <span className="ml-auto bg-[#c0392b] text-white text-xs px-3 py-1 rounded-full font-semibold flex-shrink-0">
            Updated 2024
          </span>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Text content */}
            <div className="md:col-span-2 space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-[#c0392b]">IJVRA (International Journal of Vedic Research and Arts)</strong> is
                a UGC CARE Group-I listed, peer-reviewed, refereed and indexed open-access international journal.
                The journal publishes original research papers, review articles, case studies, and short communications
                across humanities, arts, social sciences, and interdisciplinary studies.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                As per the <strong>UGC notification dated November 2023</strong>, publications in UGC CARE listed
                journals carry significant academic credit for promotion, recruitment, and PhD compliance at
                universities across India. IJVRA meets all UGC criteria for quality research publishing with its
                double-blind peer review process and ISSN certification.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["ISSN Certified", "Scopus Indexed", "Impact Factor: 7.82", "H-Index: 14", "NAAS Rated"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-red-50 border border-red-200 text-[#c0392b] text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "7.82", label: "Impact Factor" },
                { val: "14+", label: "H-Index" },
                { val: "2500+", label: "Papers Published" },
                { val: "48+", label: "Countries" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-gray-50 to-red-50 border border-gray-100 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-black text-[#c0392b]">{stat.val}</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/submit"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Submit Your Paper
            </Link>
            <Link
              href="#ugc"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-all text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              UGC CARE Certificate
            </Link>
            <Link
              href="#guidelines"
              className="btn-accent inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Author Guidelines
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

