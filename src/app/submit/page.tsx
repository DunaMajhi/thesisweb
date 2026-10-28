"use client";

import { useState, useId, useEffect } from "react";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

interface AuthorData {
  name: string;
  designation: string;
  institution: string;
  phone: string;
  email: string;
}

const initialAuthor: AuthorData = {
  name: "",
  designation: "",
  institution: "",
  phone: "",
  email: "",
};

export default function SubmitPaperPage() {
  // Paper Details
  const [paperTitle, setPaperTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [keywords, setKeywords] = useState("");
  const [researchType, setResearchType] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [file, setFile] = useState<File | null>(null);

  // Author Details
  const [authorCategory, setAuthorCategory] = useState("");
  const [numAuthors, setNumAuthors] = useState<number>(1);
  const [authors, setAuthors] = useState<AuthorData[]>([
    { ...initialAuthor },
    { ...initialAuthor },
    { ...initialAuthor },
    { ...initialAuthor },
    { ...initialAuthor },
  ]);

  // Address of Communication
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");
  const [postalCode, setPostalCode] = useState("");

  // Verification & Notes
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [editorMessage, setEditorMessage] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaNums, setCaptchaNums] = useState({ a: 3, b: 5 });

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [submittedPaperId, setSubmittedPaperId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const fileInputId = useId();

  // Initialize random captcha
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptchaNums({ a, b });
    setCaptchaInput("");
  };

  const handleAuthorChange = (index: number, field: keyof AuthorData, value: string) => {
    setAuthors((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const ext = selected.name.split(".").pop()?.toLowerCase();
      if (ext !== "doc" && ext !== "docx") {
        setFormError("Only MS Word files (.doc or .docx) are allowed for review.");
        return;
      }
      setFile(selected);
      setFormError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation
    if (!paperTitle.trim()) {
      setFormError("Please enter the Paper Title.");
      return;
    }
    if (!abstract.trim()) {
      setFormError("Please provide an Abstract for your manuscript.");
      return;
    }
    if (!keywords.trim()) {
      setFormError("Please enter at least 3-5 keywords.");
      return;
    }
    if (!researchType) {
      setFormError("Please select a Research Type.");
      return;
    }
    if (!researchArea) {
      setFormError("Please select a Research Area.");
      return;
    }
    if (!file) {
      setFormError("Please upload your manuscript file (.doc / .docx).");
      return;
    }
    if (!authorCategory) {
      setFormError("Please select the primary Author Category.");
      return;
    }

    // Validate Author 1
    const author1 = authors[0];
    if (!author1.name.trim() || !author1.email.trim() || !author1.phone.trim()) {
      setFormError("Please provide Name, Email, and Contact Number for Author 1 (Corresponding Author).");
      return;
    }

    // Validate Address
    if (!addressLine1.trim() || !city.trim() || !state.trim() || !postalCode.trim()) {
      setFormError("Please fill in complete Address of Communication (Line 1, City, State, Postal Code).");
      return;
    }

    // Captcha validation
    if (parseInt(captchaInput, 10) !== captchaNums.a + captchaNums.b) {
      setFormError(`Captcha answer is incorrect! ${captchaNums.a} + ${captchaNums.b} = ? Please try again.`);
      generateCaptcha();
      return;
    }

    // Terms
    if (!termsAccepted) {
      setFormError("You must accept the terms, copyright declaration and publication ethics.");
      return;
    }

    // Simulate submission
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      const generatedId = `IJVRA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedPaperId(generatedId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  const resetForm = () => {
    setSubmittedPaperId(null);
    setPaperTitle("");
    setAbstract("");
    setKeywords("");
    setResearchType("");
    setResearchArea("");
    setFile(null);
    setAuthorCategory("");
    setNumAuthors(1);
    setAuthors([
      { ...initialAuthor },
      { ...initialAuthor },
      { ...initialAuthor },
      { ...initialAuthor },
      { ...initialAuthor },
    ]);
    setAddressLine1("");
    setAddressLine2("");
    setCity("");
    setState("");
    setPostalCode("");
    setTermsAccepted(false);
    setReferenceCode("");
    setEditorMessage("");
    generateCaptcha();
  };

  return (
    <>
      <UtilityBar />
      <Navbar />

      {/* Breadcrumb banner */}
      <section className="bg-gradient-to-r from-[#1a2332] via-[#243348] to-[#1a2332] text-white py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-[#e67e22] font-semibold">Submit Paper</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Online Paper Submission Portal
              </h1>
              <p className="text-sm text-gray-300 mt-1">
                International Journal of Vedic Research and Arts (IJVRA) • UGC CARE Listed
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Current Issue Submissions Open
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-600/30 text-red-200 border border-red-500/30">
                ₹599 / $40
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-column layout */}
      <main className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-8 items-start">
            {/* ══ LEFT MAIN FORM COLUMN ══ */}
            <div className="min-w-0">
              {/* SUCCESS CONFIRMATION MODAL / CARD */}
              {submittedPaperId ? (
                <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-2">
                    Submission Successful
                  </span>
                  <h2 className="text-2xl font-black text-gray-900 mb-2">
                    Manuscript Submitted Successfully!
                  </h2>
                  <p className="text-gray-600 text-sm max-w-lg mx-auto mb-6">
                    Thank you for submitting your research paper to <strong>IJVRA</strong>. An acknowledgment email
                    has been sent to <strong>{authors[0].email || "your registered email"}</strong> with the tracking details.
                  </p>

                  <div className="bg-gradient-to-br from-gray-50 to-red-50/40 border border-gray-200 rounded-xl p-5 max-w-md mx-auto mb-6 text-left">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-xs text-gray-500 font-medium">Tracking Paper ID</span>
                      <span className="text-base font-black text-[#c0392b] font-mono">{submittedPaperId}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 text-xs">
                      <span className="text-gray-500">Paper Title</span>
                      <span className="font-semibold text-gray-800 truncate max-w-[220px]" title={paperTitle}>
                        {paperTitle}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 text-xs">
                      <span className="text-gray-500">Corresponding Author</span>
                      <span className="font-semibold text-gray-800">{authors[0].name}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 text-xs">
                      <span className="text-gray-500">Estimated Review Time</span>
                      <span className="font-bold text-amber-600">3 – 5 Working Days</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-semibold transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      Print Acknowledgment
                    </button>
                    <button
                      onClick={resetForm}
                      className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold shadow-md"
                    >
                      Submit Another Paper
                    </button>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-semibold transition-colors"
                    >
                      Return to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ── 1. IMPORTANT INSTRUCTIONS ALERT BOX ── */}
                  <div className="bg-amber-50/80 border-l-4 border-[#c0392b] rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#c0392b]/10 text-[#c0392b] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
                          Important Instructions for Manuscript Submission
                        </h2>
                        <ul className="text-xs text-gray-700 space-y-1.5 list-disc list-inside pt-1 leading-relaxed">
                          <li>
                            Submit original, unpublished research papers only. All submissions undergo plagiarism checks (must be &lt; 10%).
                          </li>
                          <li>
                            Manuscripts must strictly be in <strong>MS Word format (.doc or .docx)</strong>. PDF files are not accepted for review.
                          </li>
                          <li>
                            Provide complete affiliations, institutional emails, and mobile numbers for all listed authors.
                          </li>
                          <li>
                            Publication charges are <strong>₹599 for Indian authors</strong> and <strong>$40 for Foreign authors</strong>, payable only <em>after acceptance</em>.
                          </li>
                          <li>
                            A unique <strong>Paper Tracking ID</strong> will be generated upon submission for future status tracking and correspondence.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FORM ERROR MESSAGE */}
                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2 animate-shake">
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* ── 2. PAPER DETAILS SECTION ── */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center gap-3 pb-4 mb-5 border-b border-gray-100">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c0392b] to-[#e67e22] text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-900 text-lg">Paper Details</h2>
                        <p className="text-xs text-gray-500">Provide title, abstract, keywords, and upload your manuscript</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Paper Title */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Paper Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={paperTitle}
                          onChange={(e) => setPaperTitle(e.target.value)}
                          placeholder="e.g. A Comprehensive Study of Ancient Vedic Mathematical Principles in Modern Cryptography"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c0392b] focus:ring-1 focus:ring-[#c0392b] transition-all bg-white"
                        />
                      </div>

                      {/* Abstract */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Abstract <span className="text-red-500">*</span>
                          </label>
                          <span className="text-[11px] text-gray-400">Recommended: 150 – 350 words</span>
                        </div>
                        <textarea
                          required
                          rows={4}
                          value={abstract}
                          onChange={(e) => setAbstract(e.target.value)}
                          placeholder="Enter a structured abstract highlighting background, objectives, methodology, key findings, and conclusion…"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c0392b] focus:ring-1 focus:ring-[#c0392b] transition-all bg-white leading-relaxed resize-y"
                        />
                      </div>

                      {/* Keywords */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Keywords <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={keywords}
                          onChange={(e) => setKeywords(e.target.value)}
                          placeholder="e.g. Vedic Mathematics, Cryptography, Modular Arithmetic, Algorithm Efficiency (comma separated)"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c0392b] focus:ring-1 focus:ring-[#c0392b] transition-all bg-white"
                        />
                      </div>

                      {/* Research Type, Research Area, Country Code Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                            Research Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            value={researchType}
                            onChange={(e) => setResearchType(e.target.value)}
                            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                          >
                            <option value="">Select Type</option>
                            <option value="Research Paper">Research Paper</option>
                            <option value="Review Paper">Review Paper</option>
                            <option value="Case Study">Case Study</option>
                            <option value="Short Communication">Short Communication</option>
                            <option value="Comparative Study">Comparative Study</option>
                            <option value="Methodology Article">Methodology Article</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                            Research Area <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            value={researchArea}
                            onChange={(e) => setResearchArea(e.target.value)}
                            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                          >
                            <option value="">Select Area</option>
                            <option value="Vedic Sciences & Ancient Knowledge">Vedic Sciences & Ancient Knowledge</option>
                            <option value="Arts, Literature & Humanities">Arts, Literature & Humanities</option>
                            <option value="Social Sciences & Education">Social Sciences & Education</option>
                            <option value="Computer Science & IT">Computer Science & IT</option>
                            <option value="Management & Commerce">Management & Commerce</option>
                            <option value="Physical & Life Sciences">Physical & Life Sciences</option>
                            <option value="Interdisciplinary Research">Interdisciplinary Research</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                            Country Code <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                          >
                            <option value="+91">+91 (India)</option>
                            <option value="+1">+1 (USA / Canada)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+61">+61 (Australia)</option>
                            <option value="+971">+971 (UAE)</option>
                            <option value="+49">+49 (Germany)</option>
                            <option value="+65">+65 (Singapore)</option>
                            <option value="+60">+60 (Malaysia)</option>
                            <option value="+880">+880 (Bangladesh)</option>
                            <option value="+977">+977 (Nepal)</option>
                            <option value="+234">+234 (Nigeria)</option>
                            <option value="+27">+27 (South Africa)</option>
                          </select>
                        </div>
                      </div>

                      {/* Upload Paper file input */}
                      <div className="pt-2">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Upload Manuscript File (.doc / .docx) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative border-2 border-dashed border-gray-300 hover:border-[#c0392b] rounded-2xl p-6 text-center transition-colors bg-gray-50/50 hover:bg-red-50/20 cursor-pointer">
                          <input
                            id={fileInputId}
                            type="file"
                            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <div className="flex flex-col items-center justify-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-red-100 text-[#c0392b] flex items-center justify-center">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                              </svg>
                            </div>
                            {file ? (
                              <div>
                                <p className="font-semibold text-gray-800 text-sm">{file.name}</p>
                                <p className="text-xs text-emerald-600 mt-0.5">
                                  {(file.size / (1024 * 1024)).toFixed(2)} MB • File Ready for Upload
                                </p>
                              </div>
                            ) : (
                              <div>
                                <p className="text-sm font-semibold text-gray-700">
                                  Drag and drop your manuscript here, or <span className="text-[#c0392b] underline">browse</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  Accepted formats: <strong>.doc, .docx</strong> (Max size: 25 MB)
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── 3. AUTHOR DETAILS SECTION ── */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center gap-3 pb-4 mb-5 border-b border-gray-100">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c0392b] to-[#e67e22] text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-900 text-lg">Author Details</h2>
                        <p className="text-xs text-gray-500">Provide details for primary author and co-authors</p>
                      </div>
                    </div>

                    {/* Author Category & Number of Authors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Author Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={authorCategory}
                          onChange={(e) => setAuthorCategory(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        >
                          <option value="">Select Author Category</option>
                          <option value="Academician / Faculty">Academician / Faculty</option>
                          <option value="Research Scholar (PhD / M.Phil)">Research Scholar (PhD / M.Phil)</option>
                          <option value="Postgraduate Student (PG)">Postgraduate Student (PG)</option>
                          <option value="Undergraduate Student (UG)">Undergraduate Student (UG)</option>
                          <option value="Industry Professional / Corporate">Industry Professional / Corporate</option>
                          <option value="Independent Researcher">Independent Researcher</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Number of Authors <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={numAuthors}
                          onChange={(e) => setNumAuthors(parseInt(e.target.value, 10))}
                          className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        >
                          <option value={1}>1 Author</option>
                          <option value={2}>2 Authors</option>
                          <option value={3}>3 Authors</option>
                          <option value={4}>4 Authors</option>
                          <option value={5}>5 Authors</option>
                        </select>
                      </div>
                    </div>

                    {/* 5 Author Field Groups */}
                    <div className="space-y-5">
                      {[0, 1, 2, 3, 4].slice(0, numAuthors).map((index) => {
                        const author = authors[index];
                        const isPrimary = index === 0;

                        return (
                          <div
                            key={index}
                            className={`rounded-xl border p-4 transition-all ${
                              isPrimary
                                ? "border-red-200 bg-red-50/30"
                                : "border-gray-200 bg-gray-50/50"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200/60">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                                    isPrimary
                                      ? "bg-[#c0392b] text-white"
                                      : "bg-gray-300 text-gray-700"
                                  }`}
                                >
                                  {index + 1}
                                </span>
                                <h3 className="font-bold text-sm text-gray-800">
                                  {isPrimary
                                    ? "Author 1 (Corresponding Author)"
                                    : `Author ${index + 1} (Co-Author)`}
                                </h3>
                              </div>
                              {isPrimary && (
                                <span className="bg-red-100 text-[#c0392b] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                  Primary Contact
                                </span>
                              )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {/* Name */}
                              <div>
                                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                  Full Name {isPrimary && <span className="text-red-500">*</span>}
                                </label>
                                <div className="relative">
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                  </span>
                                  <input
                                    type="text"
                                    required={isPrimary}
                                    value={author.name}
                                    onChange={(e) => handleAuthorChange(index, "name", e.target.value)}
                                    placeholder="e.g. Dr. Ramesh Sharma"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:border-[#c0392b] bg-white transition-all"
                                  />
                                </div>
                              </div>

                              {/* Designation */}
                              <div>
                                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                  Designation
                                </label>
                                <div className="relative">
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                  </span>
                                  <input
                                    type="text"
                                    value={author.designation}
                                    onChange={(e) => handleAuthorChange(index, "designation", e.target.value)}
                                    placeholder="e.g. Associate Professor / Scholar"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:border-[#c0392b] bg-white transition-all"
                                  />
                                </div>
                              </div>

                              {/* University/College */}
                              <div>
                                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                  University / College / Institute
                                </label>
                                <div className="relative">
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                  </span>
                                  <input
                                    type="text"
                                    value={author.institution}
                                    onChange={(e) => handleAuthorChange(index, "institution", e.target.value)}
                                    placeholder="e.g. Banaras Hindu University"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:border-[#c0392b] bg-white transition-all"
                                  />
                                </div>
                              </div>

                              {/* Contact Number */}
                              <div>
                                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                  Contact Number {isPrimary && <span className="text-red-500">*</span>}
                                </label>
                                <div className="relative">
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                  </span>
                                  <input
                                    type="tel"
                                    required={isPrimary}
                                    value={author.phone}
                                    onChange={(e) => handleAuthorChange(index, "phone", e.target.value)}
                                    placeholder="e.g. 9876543210"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:border-[#c0392b] bg-white transition-all"
                                  />
                                </div>
                              </div>

                              {/* Email */}
                              <div className="sm:col-span-2 lg:col-span-2">
                                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                  Email Address {isPrimary && <span className="text-red-500">*</span>}
                                </label>
                                <div className="relative">
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                  </span>
                                  <input
                                    type="email"
                                    required={isPrimary}
                                    value={author.email}
                                    onChange={(e) => handleAuthorChange(index, "email", e.target.value)}
                                    placeholder="e.g. ramesh.sharma@bhu.ac.in"
                                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:border-[#c0392b] bg-white transition-all"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── 4. ADDRESS OF COMMUNICATION SECTION ── */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center gap-3 pb-4 mb-5 border-b border-gray-100">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c0392b] to-[#e67e22] text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-900 text-lg">Address of Communication</h2>
                        <p className="text-xs text-gray-500">Mailing address for hardcopy publication certificates and journal reprints</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Address Line 1 */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Address Line 1 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={addressLine1}
                          onChange={(e) => setAddressLine1(e.target.value)}
                          placeholder="House / Flat No., Department, Building Name"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        />
                      </div>

                      {/* Address Line 2 */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Address Line 2 (Optional)
                        </label>
                        <input
                          type="text"
                          value={addressLine2}
                          onChange={(e) => setAddressLine2(e.target.value)}
                          placeholder="Street, Landmark, Area"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Varanasi / New Delhi"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        />
                      </div>

                      {/* State */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          State / Province <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="e.g. Uttar Pradesh / Delhi"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        />
                      </div>

                      {/* Country */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        >
                          <option value="India">India</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="Germany">Germany</option>
                          <option value="Singapore">Singapore</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Postal Code */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Postal Code / PIN <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          placeholder="e.g. 221005"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── 5. VERIFICATION & SUBMISSION CONTROLS ── */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-5">
                    {/* Reference Code & Message */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Reference Code (Optional)
                        </label>
                        <input
                          type="text"
                          value={referenceCode}
                          onChange={(e) => setReferenceCode(e.target.value)}
                          placeholder="e.g. Conference ID / Promo / Advisor Code"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                        />
                      </div>

                      {/* Simple Math Captcha */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Security Captcha <span className="text-red-500">*</span>
                          </label>
                          <button
                            type="button"
                            onClick={generateCaptcha}
                            className="text-[11px] text-[#c0392b] hover:underline flex items-center gap-1 font-medium"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Refresh
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="px-4 py-2.5 bg-gray-100 rounded-xl font-mono font-bold text-gray-800 border border-gray-200 select-none tracking-widest text-center text-sm">
                            {captchaNums.a} + {captchaNums.b} =
                          </div>
                          <input
                            type="number"
                            required
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            placeholder="Result"
                            className="w-28 px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 font-mono text-center focus:outline-none focus:border-[#c0392b] transition-all bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Message for Editor */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Special Message for Editor (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={editorMessage}
                        onChange={(e) => setEditorMessage(e.target.value)}
                        placeholder="Any special remarks, suggested reviewers, or comments for the editorial board…"
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#c0392b] transition-all bg-white resize-y"
                      />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          required
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                          className="mt-1 w-4 h-4 text-[#c0392b] border-gray-300 rounded focus:ring-[#c0392b] cursor-pointer"
                        />
                        <span className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                          I hereby declare that this manuscript is <strong>original</strong>, has not been published elsewhere, and is not currently under review by another journal or conference. I agree to abide by <strong>IJVRA&apos;s Publication Ethics</strong>, Copyright Policy, and UGC CARE guidelines.
                        </span>
                      </label>
                    </div>

                    {/* Action button */}
                    <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-gray-400">
                        ⚡ Quick double-blind peer review within 3–5 working days
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-60 cursor-pointer"
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Uploading & Submitting…
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Submit Paper Now
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* ══ RIGHT SIDEBAR ══ */}
            <div className="mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-20">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFAB />
    </>
  );
}

