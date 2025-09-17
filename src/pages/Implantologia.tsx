import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Clock, Shield, Star, CheckCircle, Users, Heart, Zap } from "lucide-react";

const Implantologia = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Durabilidad",
      description: "Los implantes pueden durar toda la vida con el cuidado adecuado"
    },
    {
      icon: Heart,
      title: "Comodidad",
      description: "Se sienten y funcionan como dientes naturales"
    },
    {
      icon: Star,
      title: "Estética",
      description: "Resultados naturales que mejoran tu sonrisa"
    },
    {
      icon: Zap,
      title: "Funcionalidad",
      description: "Recupera completamente tu capacidad de masticación"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Evaluación Inicial",
      description: "Examen completo, radiografías 3D y planificación digital",
      duration: "1 hora"
    },
    {
      step: 2,
      title: "Cirugía de Implante",
      description: "Colocación precisa del implante de titanio",
      duration: "1-2 horas"
    },
    {
      step: 3,
      title: "Integración Ósea",
      description: "Período de cicatrización y osteointegración",
      duration: "3-6 meses"
    },
    {
      step: 4,
      title: "Corona Final",
      description: "Colocación de la corona personalizada",
      duration: "2-3 semanas"
    }
  ];

  const types = [
    {
      title: "Implante Unitario",
      description: "Reemplazo de un solo diente perdido",
      ideal: "Pérdida de un diente",
      recovery: "3-6 meses"
    },
    {
      title: "Puente sobre Implantes",
      description: "Reemplazo de varios dientes consecutivos",
      ideal: "Pérdida de 2-4 dientes",
      recovery: "4-6 meses"
    },
    {
      title: "Prótesis Total",
      description: "Reemplazo completo de todos los dientes",
      ideal: "Edentulismo total",
      recovery: "6-8 meses"
    }
  ];

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
                Solución Definitiva
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Implantología
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Recupera la funcionalidad completa de tu boca con implantes dentales de 
                última generación. El Dr. Palacios combina técnica quirúrgica avanzada 
                con materiales de primera calidad para resultados duraderos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Star className="w-5 h-5" />
                  Evaluación 3D Gratuita
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Users className="w-5 h-5" />
                  Casos Exitosos
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
                Beneficios de los Implantes Dentales
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La mejor solución para reemplazar dientes perdidos de forma permanente
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
                Proceso de Implantación
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un procedimiento planificado paso a paso para garantizar el éxito
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
                Tipos de Implantes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluciones personalizadas según tus necesidades específicas
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
                      <span className="text-sm"><strong>Ideal para:</strong> {type.ideal}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm"><strong>Recuperación:</strong> {type.recovery}</span>
                    </div>
                    <Button className="w-full mt-4">
                      Más Información
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
              Recupera tu Sonrisa Completa
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Los implantes dentales son la solución más avanzada y duradera para 
              reemplazar dientes perdidos. Agenda tu evaluación 3D gratuita y 
              descubre si eres candidato para implantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Wrench className="w-5 h-5" />
                Evaluación 3D Gratis
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary">
                <Star className="w-5 h-5" />
                Plan de Financiamiento
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