import Link from "next/link";

const importantLinks = [
  "UGC CARE List",
  "ISSN Portal",
  "Crossref DOI",
  "Google Scholar",
  "Research Gate",
  "Academia.edu",
  "NAAS Rating",
  "Plagiarism Policy",
];

const indexingLogos = [
  { name: "Google Scholar", abbr: "GS", color: "bg-blue-100 text-blue-700" },
  { name: "Crossref", abbr: "CR", color: "bg-green-100 text-green-700" },
  { name: "ResearchGate", abbr: "RG", color: "bg-teal-100 text-teal-700" },
  { name: "EBSCO", abbr: "EB", color: "bg-purple-100 text-purple-700" },
  { name: "DOAJ", abbr: "DO", color: "bg-orange-100 text-orange-700" },
  { name: "Scopus", abbr: "SC", color: "bg-indigo-100 text-indigo-700" },
];

const metaTags = [
  "ISSN: 2394-1820",
  "E-ISSN: 2394-1839",
  "Vol. 11, Issue 4",
  "Oct–Nov 2024",
  "Frequency: Bi-Monthly",
  "Language: English",
  "Publisher: IJVRA Pub.",
  "Country: India",
  "Discipline: Multidisciplinary",
  "Open Access",
];

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Search Paper Widget */}
      <div className="sidebar-widget bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search Paper
        </h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter title / author / keyword…"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b] focus:ring-1 focus:ring-[#c0392b] transition-colors"
          />
          <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-[#c0392b] transition-colors bg-white">
            <option>All Issues</option>
            <option>Vol. 11 (2024)</option>
            <option>Vol. 10 (2023)</option>
            <option>Vol. 9 (2022)</option>
          </select>
          <button className="btn-primary w-full py-2.5 rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
        </div>
      </div>

      {/* Call for Paper Widget */}
      <div className="sidebar-widget bg-gradient-to-br from-[#c0392b] to-[#e74c3c] rounded-xl p-5 shadow-sm text-white">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <h3 className="font-bold text-sm uppercase tracking-wide">Call for Paper</h3>
        </div>
        <p className="text-xs text-red-100 mb-1 font-semibold">Volume 11 | Issue 5</p>
        <p className="text-xs text-red-100 mb-4">November – December 2024</p>
        <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-4 space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-red-100">Submission Deadline</span>
            <span className="font-bold">25 Nov 2024</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-red-100">Review Completion</span>
            <span className="font-bold">Within 5 Days</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-red-100">Publication</span>
            <span className="font-bold">30 Nov 2024</span>
          </div>
        </div>
        <Link
          href="/submit"
          className="block w-full bg-white text-[#c0392b] text-center py-2.5 rounded-lg text-sm font-bold hover:bg-red-50 transition-colors"
        >
          Submit Paper Now →
        </Link>
      </div>

      {/* Important Links */}
      <div className="sidebar-widget bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Important Links
        </h3>
        <ul className="space-y-2">
          {importantLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#c0392b] py-1.5 border-b border-gray-50 transition-colors group"
              >
                <svg className="w-3.5 h-3.5 text-[#e67e22] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Indexing Partners */}
      <div className="sidebar-widget bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
          Indexing & Abstracting
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {indexingLogos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.color} rounded-lg p-3 flex flex-col items-center justify-center text-center gap-1 cursor-default`}
              title={logo.name}
            >
              <span className="text-lg font-black">{logo.abbr}</span>
              <span className="text-[10px] font-medium leading-tight opacity-80">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Journal Meta Pills */}
      <div className="sidebar-widget bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          About Journal
        </h3>
        <div className="flex flex-wrap gap-2">
          {metaTags.map((tag) => (
            <span
              key={tag}
              className="tag-pill px-3 py-1.5 border border-gray-200 text-gray-600 text-xs font-medium rounded-full cursor-default bg-gray-50 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

