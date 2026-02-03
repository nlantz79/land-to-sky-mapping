import galleryOrthomosaic from "@/assets/gallery-orthomosaic.jpg";
import gallery3DModel from "@/assets/gallery-3d-model.jpg";
import galleryConstruction from "@/assets/gallery-construction.jpg";
import galleryWaterfront from "@/assets/gallery-waterfront.jpg";

const galleryItems = [
  {
    image: galleryOrthomosaic,
    title: "Orthomosaic Mapping",
    description: "High-resolution georeferenced aerial imagery",
  },
  {
    image: gallery3DModel,
    title: "3D Terrain Model",
    description: "Textured terrain visualization for planning",
  },
  {
    image: galleryConstruction,
    title: "Construction Progress",
    description: "Site documentation and inspection",
  },
  {
    image: galleryWaterfront,
    title: "Waterfront Property",
    description: "Real estate and property marketing",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sample Deliverables
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of our mapping outputs and aerial photography across New Brunswick.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-cream font-semibold mb-1">{item.title}</h3>
                  <p className="text-cream/75 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
