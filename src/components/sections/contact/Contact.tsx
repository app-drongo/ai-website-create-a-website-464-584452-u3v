'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Zap,
  Shield,
  Globe,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handleScheduleDemo = () => {
    router.push('/pricing');
  };

  const handleStartBuilding = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Enterprise Sales',
      description: 'Discuss custom solutions',
      contact: 'enterprise@acmesaas.com',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Technical Support',
      description: '24/7 developer assistance',
      contact: '+1 (555) 123-SAAS',
      action: 'Call Now',
    },
    {
      icon: MessageSquare,
      title: 'Live Developer Chat',
      description: 'Real-time technical help',
      contact: 'Sub-100ms response time',
      action: 'Start Chat',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Developer Way, Suite 500',
      timezone: 'PST (UTC-8)',
      focus: 'Engineering Hub',
    },
    {
      city: 'New York',
      address: '456 Enterprise Blvd, Floor 25',
      timezone: 'EST (UTC-5)',
      focus: 'Sales & Operations',
    },
    {
      city: 'London',
      address: '789 Cloud Street, Building Tech',
      timezone: 'GMT (UTC+0)',
      focus: 'European Operations',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Zap className="size-3 mr-2" />
            Contact Acme SaaS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              10x Faster?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of developers building with 99.9% uptime and sub-100ms response times.
            Our team is here to help you scale your applications with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Schedule Your Demo
              </CardTitle>
              <CardDescription>
                Get a personalized walkthrough of Acme SaaS and see how we can accelerate your
                development workflow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Alex Developer"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="alex@techcorp.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="TechCorp Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="We're building a high-performance API that needs to handle 10k+ requests per second..."
                  />
                </div>

                <div className="space-y-3">
                  <Button type="submit" className="w-full text-base py-6 group">
                    Schedule Demo Call
                    <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full text-base py-6"
                    onClick={handleStartBuilding}
                  >
                    Start Building Today
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Developer Support
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Globe className="size-5 text-primary" />
                Global Presence
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {office.focus}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Hours & SLA */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Shield className="size-5 text-primary" />
                  Support & SLA
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Developer Support</span>
                    <span>24/7 Chat & Email</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Enterprise Support</span>
                    <span>24/7 Phone & Priority</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="text-primary font-medium">Sub-100ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Uptime</span>
                    <span className="text-primary font-medium">99.9% SLA</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    SOC 2 compliant with dedicated success manager for Enterprise
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={handleScheduleDemo}>
                  View Enterprise Plans
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
