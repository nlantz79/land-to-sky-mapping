import { 
  Map, 
  Box, 
  Layers, 
  Mountain, 
  TrendingUp, 
  Leaf, 
  Camera, 
  Home, 
  Video 
} from "lucide-react";

const mappingServices = [
  {
    icon: Map,
    title: "Orthomosaics (Orthophotos)",
    description: "High-resolution, georeferenced, map-accurate top-down imagery for precise measurements and analysis.",
  },
  {
    icon: Box,
    title: "3D Models",
    description: "Textured 3D terrain and object models for planning, visualization, and stakeholder presentations.",
  },
  {
    icon: Layers,
    title: "Point Clouds",
    description: "Classified, georeferenced 3D data sets compatible with CAD and GIS software.",
  },
  {
    icon: Mountain,
    title: "Digital Elevation Models",
    description: "DSM includes ground, buildings, and vegetation. DTM provides bare-earth terrain data.",
  },
  {
    icon: TrendingUp,
    title: "Contour Lines",
    description: "Accurate topographic contour lines derived from elevation data for engineering and planning.",
  },
  {
    icon: Leaf,
    title: "Plant Health Mapping (NDVI)",
    description: "Multispectral analysis to assess crop and vegetation health, identify stress areas, and optimize management.",
  },
];

const mediaServices = [
  {
    icon: Camera,
    title: "Aerial Photography",
    description: "Professional drone photography for properties, events, and promotional materials.",
  },
  {
    icon: Video,
    title: "Aerial Videography",
    description: "Cinematic aerial video for real estate, tourism, and brand storytelling.",
  },
  {
    icon: Home,
    title: "Real Estate & 3D Tours",
    description: "Property aerials and interactive 3D virtual tours for listings and marketing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Mapping Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Survey-Grade Data
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Drone Mapping & Survey Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade geospatial data products for land assessment, planning, and decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mappingServices.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Services */}
        <div>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Visual Content
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Aerial Media Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compelling aerial visuals for real estate, tourism, and brand promotion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mediaServices.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
