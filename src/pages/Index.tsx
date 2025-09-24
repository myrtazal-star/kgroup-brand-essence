import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Search, MapPin, TrendingUp, Shield, Users, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import heroProperty from "@/assets/hero-property.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Index = () => {
  const featuredProperties = [
    {
      id: "1",
      title: "Residencias Meridian",
      location: "Polanco, Ciudad de México",
      price: "$4.2M",
      area: "223 m²",
      bedrooms: 3,
      bathrooms: 2,
      imageUrl: property1,
      featured: true
    },
    {
      id: "2", 
      title: "Oficina Ejecutiva",
      location: "Santa Fe, Ciudad de México",
      price: "$850K",
      area: "111 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: property2
    },
    {
      id: "3",
      title: "Penthouse Skyline",
      location: "Zona Rosa, Ciudad de México",
      price: "$12.5M", 
      area: "446 m²",
      bedrooms: 4,
      bathrooms: 3,
      imageUrl: property3,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            
            <nav className="hidden md:flex items-center gap-8 text-caption">
              <a href="#properties" className="hover:text-muted-foreground transition-colors">Properties</a>
              <a href="#services" className="hover:text-muted-foreground transition-colors">Services</a>
              <a href="#about" className="hover:text-muted-foreground transition-colors">About</a>
              <a href="#contact" className="hover:text-muted-foreground transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="minimal" size="sm">Sign In</Button>
              <Button variant="luxury" size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroProperty} 
            alt="Interior de propiedad de lujo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-hero font-light text-foreground">
                Where Luxury Meets 
                <span className="block">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Discover exclusive properties through our sophisticated platform, 
                designed for discerning clients who value both elegance and technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" className="group">
                Explore Properties
                <Search className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="minimal">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated collection of premium real estate opportunities in Mexico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center mt-xl">
            <Button variant="outline" className="px-8">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions with unmatched expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8 bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-heading">Property Discovery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Access exclusive listings and off-market opportunities through our extensive network.
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-heading">Market Analysis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Data-driven insights and market intelligence to inform your investment decisions.
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-heading">Concierge Service</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                White-glove service from initial consultation through closing and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-2xl items-center">
            <div className="space-y-6">
              <h2 className="text-display font-light">Redefining Real Estate Excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  KGroup represents the intersection of luxury and innovation in real estate. 
                  We leverage cutting-edge technology and deep market expertise to deliver 
                  unparalleled service to our distinguished clientele in Mexico.
                </p>
                <p>
                  Our platform combines sophisticated algorithms with human insight, 
                  ensuring every transaction meets the highest standards of excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-light mb-1">$2.4B+</div>
                  <div className="text-caption text-muted-foreground">TRANSACTIONS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light mb-1">500+</div>
                  <div className="text-caption text-muted-foreground">CLIENTS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light mb-1">15+</div>
                  <div className="text-caption text-muted-foreground">YEARS</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted border border-border flex items-center justify-center">
                <Users className="w-16 h-16 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Begin your real estate journey with a consultation
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-2xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-heading mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>+52 55 6080 8129</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>groupkellar@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Av. Paseo de Reforma 180, Ciudad de México</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/kellargroup/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 border border-border">
              <h3 className="text-heading mb-6">Schedule Consultation</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="First Name"
                  />
                  <input 
                    className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Last Name"
                  />
                </div>
                <input 
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Email Address"
                />
                <textarea 
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  rows={4}
                  placeholder="Tell us about your real estate needs..."
                />
                <Button variant="luxury" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border bg-background py-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <div className="text-caption text-muted-foreground">
              © 2024 KGroup. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;