import { SectionTitle } from "@/features/base";

export const Metrics = () => {
  return (
    <section>
      <SectionTitle
        title="Our Success In Numbers"
        subtitle="See how GDSC has impacted our community"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2 *:text-center md:grid-cols-4">
        <div className="space-y-2 border border-border rounded-sm p-4">
          <div className="text-2xl font-bold">$1K+</div>
          <p className="text-blue">Funding</p>
        </div>
        <div className="space-y-2 border border-border rounded-sm p-4">
          <div className="text-2xl font-bold">100+</div>
          <p className="text-blue">Registered Members</p>
        </div>
        <div className="space-y-2 border border-border rounded-sm p-4">
          <div className="text-2xl font-bold">20+</div>
          <p className="text-blue">Events</p>
        </div>
        <div className="space-y-2 border border-border rounded-sm p-4">
          <div className="text-2xl font-bold">90%</div>
          <p className="text-blue">Job Offer Rate</p>
        </div>
      </div>
    </section>
  );
};
