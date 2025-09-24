import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, TrendingUp, Briefcase, Star, Phone, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const JoinAdvisors = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "High Commission Structure",
      description: "Competitive commission rates with performance bonuses and growth incentives"
    },
    {
      icon: Briefcase,
      title: "Premium Portfolio Access",
      description: "Exclusive access to luxury properties and high-value investment opportunities"
    },
    {
      icon: Users,
      title: "Professional Support",
      description: "Comprehensive training, marketing support, and dedicated team collaboration"
    },
    {
      icon: Star,
      title: "Brand Excellence",
      description: "Associate with a prestigious brand known for innovation and luxury in real estate"
    }
  ];

  const requirements = [
    "Licensed real estate professional in Mexico",
    "Minimum 2 years of experience in luxury real estate",
    "Proven track record of high-value transactions",
    "Excellent communication skills in Spanish and English",
    "Strong network of high-net-worth individuals",
    "Commitment to KGroup's standards of excellence"
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
            
            <Link to="/">
              <Button variant="minimal" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-hero font-light text-foreground">
                Unite al 
                <span className="block">KGroup</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Partner with KGroup and elevate your career in luxury real estate. 
                We're seeking exceptional advisors to join our prestigious network.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" className="group">
                <Users className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
              <Button variant="minimal">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Interview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Why Choose KGroup?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exceptional benefits and opportunities for elite real estate professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card border border-border hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-heading">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-2xl space-y-4">
              <h2 className="text-display font-light">Requirements & Qualifications</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We seek experienced professionals who share our commitment to excellence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-2xl items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-heading">What We Offer</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Join a select group of real estate professionals who represent the pinnacle 
                    of luxury property services in Mexico. Our advisors enjoy unparalleled 
                    support, resources, and commission structures.
                  </p>
                  <p>
                    We provide comprehensive training on our cutting-edge technology platform, 
                    marketing support, and access to an exclusive network of high-net-worth clients 
                    seeking premium real estate opportunities.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-light mb-1">5-7%</div>
                    <div className="text-caption text-muted-foreground">COMMISSION RATE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light mb-1">24/7</div>
                    <div className="text-caption text-muted-foreground">SUPPORT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-2xl space-y-4">
              <h2 className="text-display font-light">Ready to Join Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Submit your application and start your journey with KGroup
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-2xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-heading mb-4">Contact Our Recruitment Team</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>+52 55 6080 8129</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>groupkellar@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-heading mb-4">Application Process</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">1</div>
                      <span>Submit application form with required documents</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">2</div>
                      <span>Initial phone screening with recruitment team</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">3</div>
                      <span>In-person interview and portfolio review</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">4</div>
                      <span>Onboarding and training program</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 border border-border">
                <h3 className="text-heading mb-6">Apply to Join KGroup</h3>
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
                  <input 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Phone Number"
                  />
                  <input 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Real Estate License Number"
                  />
                  <input 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Years of Experience"
                  />
                  <textarea 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                    rows={4}
                    placeholder="Tell us about your experience and why you want to join KGroup..."
                  />
                  <Button variant="luxury" className="w-full">
                    Submit Application
                  </Button>
                </div>
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

export default JoinAdvisors;