import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Clock, Shield, Star, CheckCircle, Users, Heart, Zap } from "lucide-react";
import { openWhatsApp } from "@/lib/social-links";
import { useLanguage } from "@/contexts/LanguageContext";

const Implantologia = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: t('implantologyPage.benefits.durability.title'),
      description: t('implantologyPage.benefits.durability.description')
    },
    {
      icon: Heart,
      title: t('implantologyPage.benefits.comfort.title'),
      description: t('implantologyPage.benefits.comfort.description')
    },
    {
      icon: Star,
      title: t('implantologyPage.benefits.aesthetics.title'),
      description: t('implantologyPage.benefits.aesthetics.description')
    },
    {
      icon: Zap,
      title: t('implantologyPage.benefits.functionality.title'),
      description: t('implantologyPage.benefits.functionality.description')
    }
  ];

  const process = [
    {
      step: 1,
      title: t('implantologyPage.process.step1.title'),
      description: t('implantologyPage.process.step1.description'),
      duration: t('implantologyPage.process.step1.duration')
    },
    {
      step: 2,
      title: t('implantologyPage.process.step2.title'),
      description: t('implantologyPage.process.step2.description'),
      duration: t('implantologyPage.process.step2.duration')
    },
    {
      step: 3,
      title: t('implantologyPage.process.step3.title'),
      description: t('implantologyPage.process.step3.description'),
      duration: t('implantologyPage.process.step3.duration')
    },
    {
      step: 4,
      title: t('implantologyPage.process.step4.title'),
      description: t('implantologyPage.process.step4.description'),
      duration: t('implantologyPage.process.step4.duration')
    }
  ];

  const types = [
    {
      title: t('implantologyPage.types.single.title'),
      description: t('implantologyPage.types.single.description'),
      ideal: t('implantologyPage.types.single.ideal'),
      recovery: t('implantologyPage.types.single.recovery')
    },
    {
      title: t('implantologyPage.types.bridge.title'),
      description: t('implantologyPage.types.bridge.description'),
      ideal: t('implantologyPage.types.bridge.ideal'),
      recovery: t('implantologyPage.types.bridge.recovery')
    },
    {
      title: t('implantologyPage.types.full.title'),
      description: t('implantologyPage.types.full.description'),
      ideal: t('implantologyPage.types.full.ideal'),
      recovery: t('implantologyPage.types.full.recovery')
    }
  ];

  const whatsappMessage3D = language === 'es'
    ? 'Hola, me interesa una Evaluación 3D Gratuita para implantes'
    : 'Hello, I am interested in a Free 3D Evaluation for implants';

  const whatsappMessageFinancing = language === 'es'
    ? 'Hola, me interesa información sobre el Plan de Financiamiento para implantes'
    : 'Hello, I am interested in information about the Financing Plan for implants';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Wrench className="w-4 h-4 mr-2" />
                {t('implantologyPage.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                {t('implantologyPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('implantologyPage.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" onClick={() => openWhatsApp(whatsappMessage3D)}>
                  <Star className="w-5 h-5" />
                  {t('implantologyPage.evaluation3D')}
                </Button>
                <Button variant="outline" size="lg" className="gap-2" onClick={() => window.location.href = '/casos-clinicos'}>
                  <Users className="w-5 h-5" />
                  {t('implantologyPage.successCases')}
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
                {t('implantologyPage.benefitsTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('implantologyPage.benefitsSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('implantologyPage.processTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('implantologyPage.processSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('implantologyPage.typesTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('implantologyPage.typesSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {types.map((type, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm"><strong>{t('implantologyPage.idealFor')}:</strong> {type.ideal}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm"><strong>{t('implantologyPage.recovery')}:</strong> {type.recovery}</span>
                    </div>
                    <Button className="w-full mt-4" onClick={() => openWhatsApp(language === 'es' ? `Hola, me interesa más información sobre ${type.title}` : `Hello, I am interested in more information about ${type.title}`)}>
                      {t('implantologyPage.moreInfo')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('implantologyPage.recoverSmile')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('implantologyPage.recoverSmileDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" onClick={() => openWhatsApp(whatsappMessage3D)}>
                <Wrench className="w-5 h-5" />
                {t('implantologyPage.evaluation3DFree')}
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary" onClick={() => openWhatsApp(whatsappMessageFinancing)}>
                <Star className="w-5 h-5" />
                {t('implantologyPage.financingPlan')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Implantologia;
