import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Filter } from 'lucide-react';
import portfolioShowroom from '@/assets/portfolio-showroom.jpg';
import portfolioRestaurant from '@/assets/portfolio-restaurant.jpg';
import portfolioResidential from '@/assets/portfolio-residential.jpg';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Maruti Suzuki Showroom',
      category: 'Automotive',
      client: 'Maruti Suzuki',
      image: portfolioShowroom,
      description: 'Modern automotive showroom with premium display areas and customer experience zones.',
      tags: ['Commercial', 'Automotive', 'Premium']
    },
    {
      id: 2,
      title: 'Taco Bell Restaurant',
      category: 'Hospitality',
      client: 'Taco Bell',
      image: portfolioRestaurant,
      description: 'Vibrant restaurant interior design with contemporary dining experience.',
      tags: ['Restaurant', 'Commercial', 'F&B']
    },
    {
      id: 3,
      title: 'Luxury Residence',
      category: 'Residential',
      client: 'Private Client',
      image: portfolioResidential,
      description: 'Elegant residential interior with premium finishes and sophisticated design.',
      tags: ['Residential', 'Luxury', 'Premium']
    },
    {
      id: 4,
      title: 'Future Group Store',
      category: 'Retail',
      client: 'Future Group',
      image: portfolioShowroom,
      description: 'Retail space design focused on customer flow and product showcase.',
      tags: ['Retail', 'Commercial', 'Chain Store']
    },
    {
      id: 5,
      title: 'Corporate Office',
      category: 'Office',
      client: 'Wind World',
      image: portfolioResidential,
      description: 'Professional office interior with modern workspaces and collaboration areas.',
      tags: ['Office', 'Corporate', 'Workspace']
    },
    {
      id: 6,
      title: 'Hotel Suite',
      category: 'Hospitality',
      client: 'Burman Hospitality',
      image: portfolioRestaurant,
      description: 'Luxurious hotel suite design with comfort and elegance at its core.',
      tags: ['Hotel', 'Hospitality', 'Luxury']
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Automotive', 'Retail', 'Office'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of projects spanning residential, commercial, and hospitality sectors across India.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={activeFilter === category ? "btn-gold" : "hover:border-accent hover:text-accent"}
              onClick={() => setActiveFilter(category)}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-elegant hover-lift group overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="btn-gold w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-accent font-medium mb-2">
                  Client: {project.client}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether it's residential, commercial, or hospitality - we're ready to bring your vision to life with our expertise and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gold">
                Start Your Project
              </Button>
              <Button variant="outline" className="hover:border-accent hover:text-accent">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;