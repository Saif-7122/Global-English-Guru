import { SITE } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Terms and Conditions",
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-slate-50">
        <div className="container-xl">
          <SectionHeading
            title="Terms and Conditions"
            subtitle={`Last updated: ${new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}`}
            centered={false}
          />
          <div className="max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-slate">
            <p className="text-sm text-slate-500 mb-8 italic">
              [PLACEHOLDER] Formal terms and conditions must be drafted by legal counsel. This is a temporary placeholder.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Course Enrolment</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              By enrolling in a course at {SITE.name}, you agree to participate actively and maintain a respectful learning environment for all students.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Class Attendance</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Since classes are highly interactive, attendance is crucial. Please review our specific policies on missed classes and makeup sessions during enrolment.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Intellectual Property</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              All course materials, including videos, documents, and methodologies provided during the sessions, remain the intellectual property of {SITE.name} and may not be distributed without permission.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
