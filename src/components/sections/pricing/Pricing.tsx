'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/contact');
  };
  const handleEnterprisePlan = () => {
    router.push('/contact');
  };
  const handleScheduleDemo = () => {
    router.push('/contact');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Developer',
      description: 'Perfect for individual developers and small teams',
      price: '$19',
      period: '/month',
      badge: null,
      features: [
        'Up to 5 applications',
        'Real-time monitoring',
        'Email support',
        '10GB data storage',
        'Basic API analytics',
        'Standard security',
        'Community access',
      ],
      cta: 'Start Building',
      popular: false,
      icon: <Users className="size-5" />,
    },
    {
      name: 'Business',
      description: 'Ideal for growing companies and development teams',
      price: '$79',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited applications',
        'Advanced monitoring & alerts',
        'Priority support (24/7)',
        '500GB data storage',
        'Advanced API analytics',
        'Enhanced security features',
        'Team collaboration tools',
        'Custom integrations',
        'Performance optimization',
      ],
      cta: 'Scale Your Business',
      popular: true,
      icon: <Zap className="size-5" />,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring maximum control',
      price: 'Custom',
      period: '',
      badge: 'White Glove Service',
      features: [
        'Everything in Business',
        'Unlimited data storage',
        'Dedicated success manager',
        'Custom SLA agreements',
        'Advanced compliance tools',
        'On-premise deployment',
        'Custom training programs',
        'Priority feature requests',
        'Advanced audit logging',
      ],
      cta: 'Contact Our Team',
      popular: false,
      icon: <Shield className="size-5" />,
    },
  ];

  const handlePlanAction = (planName: string) => {
    if (planName === 'Developer') {
      handleStarterPlan();
    } else if (planName === 'Business') {
      handleProfessionalPlan();
    } else {
      handleEnterprisePlan();
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            <Clock className="size-3 mr-2" />
            Flexible Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your SaaS
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan to power your applications. Enterprise-grade reliability with
            transparent pricing that grows with your business.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly Billing
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Billing
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit bg-accent/10 text-accent border-accent/20"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">{plan.icon}</div>
                </div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handlePlanAction(plan.name)}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Business' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • No setup fees • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-card border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Our enterprise team specializes in building tailored SaaS infrastructure for
              organizations with unique requirements and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleScheduleDemo} variant="outline" size="lg">
                Schedule Architecture Review
              </Button>
              <Button onClick={handleScheduleDemo} size="lg">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 10,000+ developers and 500+ companies worldwide
          </p>
          <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4" />
              99.99% Uptime SLA
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
