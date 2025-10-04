'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Check, Star, Zap, Shield, Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [activeFeature, setActiveFeature] = useState(0);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/pricing'); // Lead to conversion/pricing page
  };

  const handleSecondaryAction = () => {
    router.push('/contact'); // Lead to contact for demos/questions
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Rocket,
      title: 'Deploy in Minutes',
      description: 'Get your SaaS running with zero configuration',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 compliant with end-to-end encryption',
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Handle millions of requests without breaking a sweat',
    },
  ];

  const productImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-6">
              <Star className="size-3 mr-1" />
              Trusted by 50,000+ developers worldwide
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Build SaaS products
              <span className="text-primary"> 10x faster </span>
              than ever before
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acme SaaS provides the complete infrastructure stack for modern software teams. From
              authentication to payments, we handle the complexity so you can focus on what matters.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    activeFeature === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <feature.icon className="size-4" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </button>
              ))}
            </div>

            {/* Active feature description */}
            <Card className="p-4 mb-8 bg-card/50 backdrop-blur">
              <p className="text-sm text-muted-foreground">{features[activeFeature].description}</p>
            </Card>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group text-base" onClick={handlePrimaryAction}>
                Start Building Today
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={handleSecondaryAction}
              >
                Schedule Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="size-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-primary">{i}</span>
                  </div>
                ))}
              </div>
              <span>
                <strong className="text-foreground">15,000+</strong> successful deployments this
                month
              </span>
            </div>
          </div>

          {/* Right: Product showcase */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main product image */}
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-muted relative">
                  <img
                    src={productImages[activeFeature]}
                    alt="Acme SaaS Dashboard"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </Card>

              {/* Floating cards */}
              <Card className="absolute -top-4 -right-4 p-3 shadow-xl bg-background/95 backdrop-blur">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium">99.9% Uptime</span>
                </div>
              </Card>

              <Card className="absolute -bottom-4 -left-4 p-3 shadow-xl bg-background/95 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-primary" />
                  <span className="text-xs font-medium">Sub-100ms Response</span>
                </div>
              </Card>

              <Card className="absolute top-1/2 -left-6 p-3 shadow-xl bg-background/95 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-accent" />
                  <span className="text-xs font-medium">SOC2 Certified</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
