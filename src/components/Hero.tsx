import heroImage from "@/assets/hero-aerial.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-forest/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 animate-fade-up">
            Professional Drone Mapping, Survey Data & Aerial Media
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Serving All of New Brunswick
          </p>
          <p className="text-lg text-cream/75 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            High-precision orthomosaics, 3D terrain models, elevation data, and professional aerial photography for landowners, farmers, builders, and professionals across the province.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="btn-hero-primary">
              Request a Quote
            </a>
            <a href="#services" className="btn-hero-secondary">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cream/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
