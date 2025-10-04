'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description:
        'Streamline workflows with intelligent automation that learns from your business patterns and optimizes processes in real-time.',
      badge: 'AI Technology',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description:
        'SOC 2 Type II compliant infrastructure with zero-trust architecture and advanced threat detection.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Cloud-Native Architecture',
      description:
        'Built for scale with microservices architecture that grows with your business needs seamlessly.',
      badge: 'Infrastructure',
    },
    {
      icon: Globe,
      title: 'Multi-Region Deployment',
      description:
        'Deploy across 15+ global regions with 99.99% uptime SLA and automatic failover protection.',
      badge: 'Reliability',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Advanced business intelligence with predictive insights and customizable dashboards for data-driven decisions.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'White-Label Solutions',
      description:
        'Complete brand customization with API-first approach for seamless integration into your ecosystem.',
      badge: 'Customization',
    },
    {
      icon: Code2,
      title: 'Developer Experience',
      description:
        'Comprehensive REST APIs, GraphQL endpoints, and SDKs with extensive documentation and sandbox environment.',
      badge: 'Developer Tools',
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description:
        'Dedicated customer success team with 24/7 technical support and guaranteed response times.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'Data Sovereignty',
      description:
        'Complete data ownership with GDPR compliance, encryption at rest, and configurable data residency.',
      badge: 'Privacy',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewFeatures = () => {
    window.location.href = '/features';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise SaaS Platform
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acme SaaS delivers cutting-edge technology solutions that empower businesses to innovate
            faster, scale efficiently, and maintain competitive advantage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Experience the power of next-generation SaaS technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Free Trial
            </button>
            <button
              onClick={handleViewFeatures}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Explore Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
