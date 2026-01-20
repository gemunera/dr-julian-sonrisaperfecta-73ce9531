import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ImageCarouselCard from "@/components/ImageCarouselCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smile, Star, Sparkles, Clock, CheckCircle, Heart, Award } from "lucide-react";
import { openWhatsApp } from "@/lib/social-links";
import { useLanguage } from "@/contexts/LanguageContext";
import smileDesignBefore from "@/assets/smile-design-before.png";
import smileDesignAfter from "@/assets/smile-design-after.png";
import ceramicLenses1 from "@/assets/ceramic-lenses-1.jpg";
import ceramicLenses2 from "@/assets/ceramic-lenses-2.jpg";
import ceramicLensesSmile from "@/assets/ceramic-lenses-smile.jpg";

const DisenoSonrisa = () => {
  const { t, language } = useLanguage();

  const whatsappMessage = language === 'es' 
    ? 'Hola, me interesa una consulta sobre Diseño de Sonrisa'
    : 'Hello, I am interested in a Smile Design consultation';

  const whatsappMessageFree = language === 'es'
    ? 'Hola, quiero agendar una consulta gratuita sobre Diseño de Sonrisa'
    : 'Hello, I want to schedule a free Smile Design consultation';

  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('smileDesignPage.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                {t('smileDesignPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('smileDesignPage.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" onClick={() => openWhatsApp(whatsappMessage)}>
                  <Heart className="w-5 h-5" />
                  {t('smileDesignPage.cta')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('smileDesignPage.whyChoose')}
              </h2>
              <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                <p>
                  {t('smileDesignPage.whyChooseDesc1')}
                </p>
                <p>
                  {t('smileDesignPage.whyChooseDesc2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Cases Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                <Award className="w-4 h-4 mr-2" />
                {t('smileDesignPage.clinicalCases')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('smileDesignPage.realTransformations')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('smileDesignPage.realTransformationsDesc')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <BeforeAfterSlider 
                beforeImage={smileDesignBefore} 
                afterImage={smileDesignAfter} 
                title={t('cases.ceramicCase.title')} 
                category={t('cases.ceramicCase.category')} 
                description={t('cases.ceramicCase.description')} 
              />
              <ImageCarouselCard 
                images={[ceramicLensesSmile, ceramicLenses1, ceramicLenses2]}
                title={t('cases.ceramicLenses.title')}
                description={t('cases.ceramicLenses.description')}
              />
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="gap-2" onClick={() => window.location.href = '/casos-clinicos'}>
                <Award className="w-5 h-5" />
                {t('cases.viewMoreCases')}
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('smileDesignPage.readyForSmile')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('smileDesignPage.readyForSmileDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" onClick={() => openWhatsApp(whatsappMessageFree)}>
                <Clock className="w-5 h-5" />
                {t('smileDesignPage.scheduleFree')}
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary" onClick={() => document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' })}>
                <Star className="w-5 h-5" />
                {t('smileDesignPage.viewTestimonials')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>;
};

export default DisenoSonrisa;
