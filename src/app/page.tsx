import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import HighlightStrip from "@/components/HighlightStrip";
import UGCInfoCard from "@/components/UGCInfoCard";
import QuickLinks from "@/components/QuickLinks";
import PublicationProcedure from "@/components/PublicationProcedure";
import PublicationCharges from "@/components/PublicationCharges";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function HomePage() {
  return (
    <>
      {/* ── Top utility bar ── */}
      <UtilityBar />

      {/* ── Sticky Navbar ── */}
      <Navbar />

      {/* ── Hero / Highlight Strip ── */}
      <HighlightStrip />

      {/* ── Main 2-column layout ── */}
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-8">
            {/* ══ LEFT / MAIN COLUMN ══ */}
            <div className="min-w-0">
              {/* UGC Info Card */}
              <UGCInfoCard />

              {/* Quick Links (12-card 3×4 grid) */}
              <QuickLinks />

              {/* Publication Procedure */}
              <PublicationProcedure />

              {/* Publication Charges */}
              <PublicationCharges />
            </div>

            {/* ══ RIGHT / SIDEBAR ══ */}
            <div className="mt-8 lg:mt-0">
              {/* Sticky on large screens */}
              <div className="lg:sticky lg:top-20">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Floating WhatsApp FAB ── */}
      <WhatsAppFAB />
    </>
  );
}
