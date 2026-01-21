import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VideoTestimonials from "@/components/VideoTestimonials";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";
import { openWhatsApp } from "@/lib/social-links";

const ClinicalCases = () => {
  const { t } = useLanguage();

  return (
    <section id="casos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('cases.badge')}</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('cases.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </div>

        {/* Featured Stats with Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              <AnimatedCounter end={500} suffix="+" duration={2500} />
            </div>
            <div className="text-sm text-muted-foreground">{t('cases.successCases')}</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              <AnimatedCounter end={4.9} suffix="/5" duration={2000} decimals={1} />
            </div>
            <div className="text-sm text-muted-foreground">{t('cases.averageSatisfaction')}</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              <AnimatedCounter end={98} suffix="%" duration={2200} />
            </div>
            <div className="text-sm text-muted-foreground">{t('cases.successRate')}</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              <AnimatedCounter end={10} suffix="+" duration={1800} />
            </div>
            <div className="text-sm text-muted-foreground">{t('cases.yearsExperience')}</div>
          </div>
        </div>

        {/* Video Testimonials */}
        <VideoTestimonials />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary text-primary-foreground p-8 rounded-2xl shadow-professional max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {t('cases.nextSuccess')}
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              {t('cases.nextSuccessDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="gap-2" onClick={() => openWhatsApp()}>
                {t('hero.cta')}
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => window.location.href = '/casos-clinicos'}>
                {t('cases.viewAll')}
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default ClinicalCases;
