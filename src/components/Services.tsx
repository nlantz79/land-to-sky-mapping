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
    description: "High-resolution, georeferenced, map-accurate top-down imagery.",
  },
  {
    icon: Box,
    title: "3D Models",
    description: "Textured 3D terrain and object models for planning and visualization.",
  },
  {
    icon: Layers,
    title: "Point Clouds",
    description: "Classified, georeferenced 3D data sets.",
  },
  {
    icon: Mountain,
    title: "Digital Elevation Models (DEMs)",
    description: "DSM: ground + buildings + vegetation. DTM: bare-earth terrain only.",
  },
  {
    icon: TrendingUp,
    title: "Contours",
    description: "Accurate topographic contour lines from elevation data.",
  },
  {
    icon: Leaf,
    title: "Plant Health & Vegetation Mapping (NDVI)",
    description: "Multispectral analysis for crop and vegetation health.",
  },
];

const mediaServices = [
  {
    icon: Camera,
    title: "Drone Photography & Videography",
    description: "Professional aerial photos and cinematic video for any project.",
  },
  {
    icon: Home,
    title: "Real Estate Aerials & 3D Tours",
    description: "Property aerials and interactive 3D virtual tours for listings.",
  },
  {
    icon: Video,
    title: "Promotional & Tourism Visuals",
    description: "Compelling visuals for tourism, camps, Airbnbs, brands, and events.",
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
              Geospatial Data
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Drone Mapping & Survey Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade geospatial data for land assessment, planning, and visualization.
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
