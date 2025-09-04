import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters in creating spaces that perfectly reflect your vision and needs.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We blend cutting-edge design trends with timeless elegance to create unique interiors.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to ensure their dreams become beautiful reality.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior quality and craftsmanship in every project we undertake.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            About <span className="text-accent">BL Interiors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2007 by visionary designer Mr. Bhanwar Lal Jangid, BL Interiors has grown into one of India's most trusted names in interior design and turnkey projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair font-semibold text-primary mb-4">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a passion for transforming spaces has evolved into two decades of excellence in interior design and architecture. Under the leadership of Mr. Bhanwar Lal Jangid, our team has successfully executed projects across India, from luxury residences to commercial complexes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With our head office in Bangalore and a skilled team of engineers, designers, project managers, and site supervisors, we've built lasting relationships with prestigious clients including Future Group, Maruti Suzuki, Taco Bell, and many more.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-3xl font-playfair font-bold text-accent mb-1">2007</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-accent mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="card-elegant p-8 text-center">
            <div className="w-24 h-24 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h4 className="text-2xl font-playfair font-semibold text-primary mb-2">
              Mr. Bhanwar Lal Jangid
            </h4>
            <p className="text-accent font-medium mb-4">Founder & Proprietor</p>
            <p className="text-muted-foreground leading-relaxed">
              A visionary leader with over two decades of experience in interior design and architecture. His commitment to excellence and innovation has shaped BL Interiors into a trusted brand across India.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="card-elegant hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;