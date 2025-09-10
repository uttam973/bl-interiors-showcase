import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Building } from 'lucide-react';
import heroImage from '@/assets/hero-interior.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Interior Design by BL Interiors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight pt-32">
              Transforming Spaces with{' '}
              <span className="text-accent">Elegance</span>,{' '}
              <span className="text-accent">Innovation</span>, and{' '}
              <span className="text-accent">Love</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              For over 20 years, BL Interiors has been creating exceptional interior designs and turnkey projects across India. From luxury residences to commercial spaces, we bring your vision to life with unmatched craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="btn-gold text-lg px-8 py-4">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/30 hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-2 mx-auto">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-playfair font-bold text-white">20+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-2 mx-auto">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-playfair font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-2 mx-auto">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-playfair font-bold text-white">50+</div>
                <div className="text-sm text-white/80">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right side can be used for additional content or kept empty for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;