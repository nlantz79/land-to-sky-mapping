import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="container-custom py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="3 Fields Aerial" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-cream/60 max-w-xs">
              Professional drone mapping, survey data, and aerial media services across New Brunswick, Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#services" className="text-sm hover:text-cream transition-colors">Services</a>
              <a href="#industries" className="text-sm hover:text-cream transition-colors">Industries</a>
              <a href="#why-us" className="text-sm hover:text-cream transition-colors">Why Us</a>
              <a href="#gallery" className="text-sm hover:text-cream transition-colors">Gallery</a>
              <a href="#contact" className="text-sm hover:text-cream transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Contact</h4>
            <p className="text-sm mb-2">Serving all of New Brunswick, Canada</p>
            <a 
              href="mailto:info@3fieldsaerial.com" 
              className="text-sm text-accent hover:text-cream transition-colors"
            >
              info@3fieldsaerial.com
            </a>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-10 pt-6 text-center">
          <p className="text-sm text-cream/50">
            © {new Date().getFullYear()} 3 Fields Aerial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
