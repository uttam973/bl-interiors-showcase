import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ClientsSection = () => {
  const majorClients = [
    'Future Group',
    'Maruti Suzuki',
    'Bimal Auto',
    'Pratham Motors',
    'RNS Motors',
    'Burman Hospitality',
    'Taco Bell',
    'Revlon',
    'Wind World',
    'Kalyani Motors',
    'Shantesha Motors'
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Operations Manager',
      company: 'Future Group',
      content: 'BL Interiors transformed our retail spaces beyond expectations. Their attention to detail and understanding of customer flow dynamics resulted in increased footfall and sales.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'Facility Head',
      company: 'Maruti Suzuki',
      content: 'Working with BL Interiors on our showroom project was exceptional. They delivered a premium experience space that perfectly represents our brand values.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      position: 'Restaurant Manager',
      company: 'Taco Bell',
      content: 'The team at BL Interiors created a vibrant and functional restaurant space that enhances our customers\' dining experience. Highly professional and creative.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Regional Director',
      company: 'Burman Hospitality',
      content: 'Their expertise in hospitality design is unmatched. Every project delivered on time with superior quality and attention to guest experience.',
      rating: 5
    }
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over two decades, we've built lasting partnerships with some of India's most respected brands and organizations.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-playfair font-semibold text-primary text-center mb-8">
            Our Major Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {majorClients.map((client, index) => (
              <div
                key={index}
                className="card-elegant p-6 text-center hover-lift hover-glow group"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-playfair font-bold text-lg">
                    {client.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-200">
                  {client}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-playfair font-semibold text-primary text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant hover-lift">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg mb-6 flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border/50 pt-4">
                    <h4 className="font-playfair font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-accent font-medium">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 card-elegant p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-playfair font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold text-accent mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;