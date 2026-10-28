import Link from "next/link";

export default function PublicationCharges() {
  return (
    <section className="py-8" id="charges">
      <div className="mb-6">
        <h2 className="section-title text-2xl font-bold text-gray-800">Publication Charges</h2>
        <p className="text-gray-500 text-sm mt-3">
          Affordable and transparent fee structure — no hidden charges
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {/* Indian Authors */}
        <div className="pricing-card bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-sm relative">
          {/* Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#c0392b] to-[#e67e22]" />

          <div className="p-7 pt-8">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇮🇳</span>
                <h3 className="font-bold text-gray-800 text-lg">Indian Authors</h3>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">Most Popular</span>
            </div>
            <p className="text-sm text-gray-500 mb-5">For authors from Indian institutions</p>

            <div className="text-center py-5 border-y border-gray-100">
              <p className="text-5xl font-black text-[#c0392b]">₹599</p>
              <p className="text-sm text-gray-400 mt-1">per paper</p>
            </div>

            <ul className="space-y-3 mt-5">
              {[
                "DOI Assignment",
                "Certificate of Publication",
                "Soft copy of journal",
                "Online indexing",
                "UGC CARE compliance letter",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <Link
              href="#pay"
              className="btn-primary mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Pay Now ₹599
            </Link>
          </div>
        </div>

        {/* Foreign Authors */}
        <div className="pricing-card bg-gradient-to-br from-[#1a2332] to-[#2c3e50] rounded-2xl overflow-hidden shadow-sm relative">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#e67e22] to-[#f39c12]" />

          <div className="p-7 pt-8">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                <h3 className="font-bold text-white text-lg">Foreign Authors</h3>
              </div>
              <span className="bg-orange-500 bg-opacity-20 text-orange-300 text-xs font-bold px-2.5 py-1 rounded-full border border-orange-500 border-opacity-30">International</span>
            </div>
            <p className="text-sm text-gray-400 mb-5">For authors outside India</p>

            <div className="text-center py-5 border-y border-white border-opacity-10">
              <p className="text-5xl font-black text-[#e67e22]">$40</p>
              <p className="text-sm text-gray-400 mt-1">per paper (USD)</p>
            </div>

            <ul className="space-y-3 mt-5">
              {[
                "DOI Assignment",
                "Certificate of Publication",
                "Soft copy of journal",
                "Online indexing",
                "Priority review process",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-[#e67e22] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <Link
              href="#pay"
              className="btn-accent mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Pay Now $40
            </Link>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-3xl">
        <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <p className="text-sm text-amber-700">
          <strong>Note:</strong> Payment should be made only after receiving the acceptance letter. No fees are
          charged for rejected papers. All transactions are secured via verified payment gateways.
        </p>
      </div>
    </section>
  );
}

