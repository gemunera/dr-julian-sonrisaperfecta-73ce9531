import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageCarouselCard from "@/components/ImageCarouselCard";
import SingleImageCard from "@/components/SingleImageCard";
import { Shield, Heart, Microscope, Users, CheckCircle, AlertTriangle, Stethoscope } from "lucide-react";
import { openWhatsApp } from "@/lib/social-links";
import { useLanguage } from "@/contexts/LanguageContext";
import implantProsthesis1 from "@/assets/implant-prosthesis-1.jpg";
import implantProsthesis2 from "@/assets/implant-prosthesis-2.jpg";
import implantProsthesis3 from "@/assets/implant-prosthesis-3.jpg";
import gingivalDesign from "@/assets/gingival-design.png";

const Periodoncia = () => {
  const { t, language } = useLanguage();

  const treatments = [{
    title: t('periodonticsPage.treatment1.title'),
    description: t('periodonticsPage.treatment1.description'),
    icon: Microscope,
    benefits: (t('periodonticsPage.treatment1.benefits') as unknown as string[])
  }, {
    title: t('periodonticsPage.treatment2.title'),
    description: t('periodonticsPage.treatment2.description'),
    icon: Stethoscope,
    benefits: (t('periodonticsPage.treatment2.benefits') as unknown as string[])
  }, {
    title: t('periodonticsPage.treatment3.title'),
    description: t('periodonticsPage.treatment3.description'),
    icon: Heart,
    benefits: (t('periodonticsPage.treatment3.benefits') as unknown as string[])
  }];


  const symptoms = t('periodonticsPage.symptoms') as unknown as string[];
  const prevention = t('periodonticsPage.prevention') as unknown as string[];

  const whatsappMessage = language === 'es'
    ? 'Hola, me interesa una Evaluación Periodontal'
    : 'Hello, I am interested in a Periodontal Evaluation';

  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                <Shield className="w-4 h-4 mr-2" />
                {t('periodonticsPage.badge')}
              </Badge>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('periodonticsPage.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" onClick={() => openWhatsApp(whatsappMessage)}>
                  <Heart className="w-5 h-5" />
                  {t('periodonticsPage.evaluation')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                <Heart className="w-4 h-4 mr-2" />
                {t('periodonticsPage.treatments')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('periodonticsPage.comprehensiveSolutions')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('periodonticsPage.comprehensiveSolutionsDesc')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => {
                const IconComponent = treatment.icon;
                const benefits = Array.isArray(treatment.benefits) ? treatment.benefits : [];
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{treatment.title}</CardTitle>
                      <p className="text-muted-foreground">{treatment.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clinical Cases Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800">
                <Users className="w-4 h-4 mr-2" />
                {t('periodonticsPage.realCases')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('periodonticsPage.transformations')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('periodonticsPage.transformationsDesc')}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Prótesis fijas sobre implantes */}
              <div className="space-y-4">
                <ImageCarouselCard 
                  images={[implantProsthesis1, implantProsthesis2, implantProsthesis3]}
                  title={t('periodonticsPage.implantProsthesis.title')}
                  description={t('periodonticsPage.implantProsthesis.description')}
                />
              </div>
              
              {/* Diseño gingival estético */}
              <div className="space-y-4">
                <SingleImageCard 
                  image={gingivalDesign}
                  title={t('periodonticsPage.gingivalDesign.title')}
                  description={t('periodonticsPage.gingivalDesign.description')}
                />
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t('periodonticsPage.disclaimer')}
              </p>
              <Button size="lg" className="gap-2" onClick={() => window.location.href = '/casos-clinicos'}>
                <Heart className="w-5 h-5" />
                {t('periodonticsPage.viewMoreCases')}
              </Button>
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-amber-100 text-amber-800">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {t('periodonticsPage.warningSignsBadge')}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  {t('periodonticsPage.warningSignsTitle')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('periodonticsPage.warningSignsDesc')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(Array.isArray(symptoms) ? symptoms : []).map((symptom, index) => <div key={index} className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-sm">{symptom}</span>
                    </div>)}
                </div>
              </div>
              
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{t('periodonticsPage.preventionTitle')}</CardTitle>
                  <p className="text-muted-foreground text-center">
                    {t('periodonticsPage.preventionDesc')}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(Array.isArray(prevention) ? prevention : []).map((tip, index) => <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>;
};

export default Periodoncia;
