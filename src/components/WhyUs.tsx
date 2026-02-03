import { MapPin, Target, TreeDeciduous, FileCheck, Layers } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "New Brunswick Focused",
    description: "Dedicated service across the entire province, from rural woodlands to coastal communities.",
  },
  {
    icon: Target,
    title: "Professional-Grade Accuracy",
    description: "Survey-quality data outputs that meet engineering and regulatory standards.",
  },
  {
    icon: TreeDeciduous,
    title: "Built for Rural Properties",
    description: "Experienced with large, undeveloped, and hard-to-access land parcels.",
  },
  {
    icon: FileCheck,
    title: "Clear Deliverables",
    description: "Practical outputs you can actually use—no jargon, no confusion.",
  },
  {
    icon: Layers,
    title: "Mapping & Media Together",
    description: "Get survey data and promotional visuals from a single trusted provider.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cream/70 uppercase tracking-wider mb-2">
            Our Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why 3 Fields Aerial
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            We combine technical precision with local expertise to deliver results that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20"
            >
              <div className="w-10 h-10 bg-cream/20 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-5 h-5 text-cream" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-cream/75 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
