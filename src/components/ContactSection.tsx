import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ContactForm } from '@/components/forms/ContactForm';
import { ServiceInquiryForm } from '@/components/forms/ServiceInquiryForm';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  FileText
} from 'lucide-react';

const ContactSection = () => {
  const [serviceDialogOpen, setServiceDialogOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        'No 16/1, Omshakti Residency',
        '9th Main Road, 14th Cross',
        'NS Palya, BG Road',
        'Bangalore – 560076'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98806 17307']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['bl.interiors@yahoo.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 5:00 PM'
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your project and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="flex justify-center">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-primary mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Inquiry */}
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                  Need a Detailed Quote?
                </h3>
                <p className="text-muted-foreground mb-6">
                  For service-specific inquiries and comprehensive project quotes, use our detailed service form.
                </p>
                <Dialog open={serviceDialogOpen} onOpenChange={setServiceDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="btn-gold w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Request Service Quote
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Service Inquiry</DialogTitle>
                      <DialogDescription>
                        Please fill out this form for detailed service quotes and project discussions.
                      </DialogDescription>
                    </DialogHeader>
                    <ServiceInquiryForm onSuccess={() => setServiceDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
                  Why Choose BL Interiors?
                </h3>
                
                <div className="space-y-4">
                  {[
                    'Free initial consultation and site visit',
                    '20+ years of industry experience',
                    'End-to-end project management',
                    'On-time delivery guarantee',
                    'Post-completion support and warranty'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;