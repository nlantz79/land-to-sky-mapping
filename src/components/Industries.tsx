import { 
  Tractor, 
  TreeDeciduous, 
  Home, 
  Building, 
  HardHat, 
  ClipboardCheck,
  TreePine,
  Hotel,
  Landmark,
  Zap,
  Film,
  Map
} from "lucide-react";

const industries = [
  { icon: Tractor, label: "Farmers & Homesteaders" },
  { icon: Map, label: "Rural Landowners" },
  { icon: HardHat, label: "Builders & Contractors" },
  { icon: Home, label: "Real Estate Agents" },
  { icon: Building, label: "Land Developers" },
  { icon: ClipboardCheck, label: "Inspectors & Insurance" },
  { icon: TreePine, label: "Forestry & Logging" },
  { icon: TreeDeciduous, label: "Environmental Work" },
  { icon: Hotel, label: "Tourism & Lodges" },
  { icon: Landmark, label: "Municipalities" },
  { icon: Zap, label: "Utilities & Infrastructure" },
  { icon: Film, label: "Content Creators" },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Who We Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From rural properties to commercial developments, we provide actionable aerial data and media for diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.label}
              className="bg-card rounded-lg p-4 text-center hover:shadow-card transition-shadow group"
            >
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
