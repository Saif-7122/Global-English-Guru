import { SITE } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-slate-50">
        <div className="container-xl">
          <SectionHeading
            title="Privacy Policy"
            subtitle={`Last updated: ${new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}`}
            centered={false}
          />
          <div className="max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-slate">
            <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg mb-8 text-sm font-medium">
              Note: This is a placeholder policy document. Final legal terms will be updated shortly by legal counsel.
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Information Collection</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We collect information you provide directly to us when you register for a demo, fill out a form, or communicate with us via WhatsApp. This may include your name, email address, and phone number.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Use of Information</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our courses, and to communicate with you about upcoming batches and educational materials.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Consent for Recordings</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Selected class activities and practice sessions may be recorded for educational feedback and progress tracking. These recordings are not used for marketing purposes without your explicit written consent.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Contact Us</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at {SITE.email}.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
