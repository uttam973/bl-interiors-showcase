const TrustedBySection = () => {
  // Sample company names - replace with actual client logos
  const companies = [
    "Microsoft", "Google", "Amazon", "Apple", "Meta", "Netflix", "Tesla", "Nike", 
    "Coca-Cola", "Samsung", "Oracle", "Adobe", "Intel", "IBM", "Spotify", "Uber"
  ];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 500+ successful projects with India's most prestigious brands and organizations
          </p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative">
          {/* Gradient overlays to fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Scrolling logos */}
          <div className="flex animate-logo-scroll">
            {/* First set of logos */}
            <div className="flex items-center space-x-12 flex-shrink-0">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-16 px-8 bg-card rounded-lg shadow-sm border border-border/50 hover:border-border transition-colors duration-300 flex-shrink-0"
                >
                  <span className="text-lg font-inter font-semibold text-muted-foreground whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 flex-shrink-0 ml-12">
              {companies.map((company, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center justify-center h-16 px-8 bg-card rounded-lg shadow-sm border border-border/50 hover:border-border transition-colors duration-300 flex-shrink-0"
                >
                  <span className="text-lg font-inter font-semibold text-muted-foreground whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;