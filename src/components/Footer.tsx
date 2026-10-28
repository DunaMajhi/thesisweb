import Link from "next/link";

const footerLinks = {
  useful: [
    "Home",
    "About Us",
    "Editorial Board",
    "Submit Paper",
    "Author Guidelines",
    "Peer Review Policy",
    "Publication Ethics",
    "Archives",
  ],
  services: [
    "Paper Submission",
    "Plagiarism Check",
    "Fast Track Review",
    "DOI Assignment",
    "Hard Copy Journal",
    "Certificate Issuance",
    "Indexing Support",
  ],
  downloads: [
    "Sample Paper Format",
    "Copyright Form",
    "Author Declaration",
    "Membership Form",
    "UGC CARE Certificate",
    "Impact Factor Certificate",
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a2332] text-gray-300">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand + Contact */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#c0392b] to-[#e67e22]">
                <span className="text-white font-black text-sm">IJ</span>
              </div>
              <div>
                <span className="text-white font-black text-2xl tracking-tight">IJVRA</span>
                <p className="text-[10px] text-gray-500 leading-none -mt-0.5">International Journal</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-5">
              A UGC CARE Group-I listed, peer-reviewed international journal dedicated to advancing research in
              vedic sciences, arts, and interdisciplinary studies.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#e67e22] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xs text-gray-400 leading-relaxed">
                  IJVRA Publications, Research Tower,<br />
                  New Delhi – 110001, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#e67e22] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:editor@ijvra.com" className="text-xs text-gray-400 hover:text-[#e67e22] transition-colors">
                  editor@ijvra.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#e67e22] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+911234567890" className="text-xs text-gray-400 hover:text-[#e67e22] transition-colors">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-4 pb-2 border-b border-gray-700 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#c0392b] rounded-full inline-block" />
              Useful Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.useful.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-[#e67e22] flex items-center gap-1.5 transition-colors group"
                  >
                    <svg className="w-3 h-3 text-gray-600 group-hover:text-[#e67e22] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 pb-2 border-b border-gray-700 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#e67e22] rounded-full inline-block" />
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-[#e67e22] flex items-center gap-1.5 transition-colors group"
                  >
                    <svg className="w-3 h-3 text-gray-600 group-hover:text-[#e67e22] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="text-white font-bold mb-4 pb-2 border-b border-gray-700 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#c0392b] rounded-full inline-block" />
              Downloads
            </h4>
            <ul className="space-y-2">
              {footerLinks.downloads.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-[#e67e22] flex items-center gap-1.5 transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#e67e22] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">Follow Us</p>
              <div className="flex gap-2">
                {["FB", "TW", "IN", "YT"].map((social, i) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-[#c0392b] flex items-center justify-center text-xs font-bold text-gray-300 hover:text-white transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-500">
              © 2024 IJVRA — International Journal of Vedic Research and Arts. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-gray-500 hover:text-[#e67e22] transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-[#e67e22] transition-colors">Terms of Use</a>
              <a href="#" className="text-xs text-gray-500 hover:text-[#e67e22] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

