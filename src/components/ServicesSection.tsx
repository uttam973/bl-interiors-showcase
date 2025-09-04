import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Palette, 
  TreePine, 
  ClipboardCheck, 
  Zap, 
  Wind, 
  Wrench,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: 'Architecture',
      description: 'Complete architectural design and planning services for residential and commercial projects.',
      features: ['Structural Design', '3D Visualization', 'Planning Permits', 'Construction Drawings']
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Comprehensive interior design solutions that blend functionality with aesthetic appeal.',
      features: ['Space Planning', 'Furniture Selection', 'Color Schemes', 'Lighting Design']
    },
    {
      icon: ClipboardCheck,
      title: 'Turnkey Projects',
      description: 'End-to-end project management from concept to completion with seamless execution.',
      features: ['Project Planning', 'Vendor Management', 'Quality Control', 'Timely Delivery']
    },
    {
      icon: TreePine,
      title: 'Landscaping',
      description: 'Beautiful outdoor spaces and garden design that complement your interior aesthetics.',
      features: ['Garden Design', 'Plant Selection', 'Irrigation Systems', 'Maintenance Plans']
    },
    {
      icon: Zap,
      title: 'Electrical Works',
      description: 'Complete electrical installations and smart home automation systems.',
      features: ['Wiring & Installation', 'Smart Home Systems', 'Lighting Solutions', 'Safety Systems']
    },
    {
      icon: Wind,
      title: 'Air Conditioning',
      description: 'HVAC design and installation for optimal comfort and energy efficiency.',
      features: ['HVAC Design', 'Installation', 'Maintenance', 'Energy Optimization']
    },
    {
      icon: Wrench,
      title: 'Project Management',
      description: 'Professional project oversight ensuring quality, timeline, and budget adherence.',
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Client Communication']
    },
    {
      icon: Building,
      title: 'Utilities',
      description: 'Complete utility services including plumbing, sewerage, and water systems.',
      features: ['Plumbing Systems', 'Water Management', 'Sewerage Solutions', 'Utility Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive interior design and construction services to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-elegant hover-lift group h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-gold rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="text-accent hover:text-accent/80 hover:bg-accent/10 p-0 h-auto justify-start font-medium text-sm mt-auto"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project requirements and create something extraordinary together.
            </p>
            <Button className="btn-gold">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;