import { MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serving All of New Brunswick
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            From the Acadian coast to the Saint John River Valley, from the northern forests to the Bay of Fundy — we cover the entire province.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {["Rural Properties", "Coastal Areas", "Inland Regions", "Remote Woodlands", "Urban Sites"].map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-secondary rounded-full text-foreground font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
