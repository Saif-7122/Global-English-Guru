import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Refund and Cancellation Policy",
};

export default function RefundPolicy() {
  return (
    <>
      <main id="site-content" className="py-16 min-h-screen bg-slate-50">
        <div className="container-xl">
          <SectionHeading
            title="Refund and Cancellation Policy"
            subtitle={`Last updated: ${new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}`}
            centered={false}
          />
          <div className="max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-slate">
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Cancellations</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              If you need to cancel your enrolment before the batch begins, please contact our support team. [Detailed cancellation timeline to be provided].
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Refunds</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Once the batch commences, strictly no refund is provided.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
