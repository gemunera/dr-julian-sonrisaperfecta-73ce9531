import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Sparkles, CheckCircle, Star, Heart } from "lucide-react";
import { openWhatsApp } from "@/lib/social-links";

const Carillas = () => {
  const advantages = [
    { icon: Shield, title: "Resistencia Superior", description: "Material cerámico de alta calidad que resiste el desgaste diario" },
    { icon: Sparkles, title: "Estética Natural", description: "Resultados que imitan perfectamente el esmalte dental natural" },
    { icon: Clock, title: "Procedimiento Rápido", description: "Resultados visibles en pocas sesiones" },
    { icon: Heart, title: "Mínimamente Invasivo", description: "Preservamos la mayor cantidad de estructura dental" }
  ];

  const types = [
    {
      title: "Carillas de Porcelana",
      description: "La opción premium para resultados duraderos y naturales",
      features: ["Duración: 15-20 años", "Resistencia superior", "Color estable", "Biocompatible"],
      popular: true
    },
    {
      title: "Carillas de Composite",
      description: "Solución rápida y económica para mejoras inmediatas",
      features: ["Duración: 5-8 años", "Aplicación directa", "Reparable", "Más económica"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
                <Shield className="w-4 h-4 mr-2" />
                Tecnología Avanzada
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Carillas Dentales
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforma dientes manchados, astillados o desalineados con nuestras 
                carillas de alta calidad. Resultados inmediatos y naturales que duran años.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" onClick={() => openWhatsApp('Hola, me interesa una Consulta Especializada sobre Carillas')}>
                  <Star className="w-5 h-5" />
                  Consulta Especializada
                </Button>
                <Button variant="outline" size="lg" className="gap-2" onClick={() => window.location.href = '/casos-clinicos'}>
                  <Sparkles className="w-5 h-5" />
                  Ver Transformaciones
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ventajas de las Carillas Dentales
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Solución integral para múltiples problemas estéticos dentales
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <advantage.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Tipos de Carillas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elige la opción que mejor se adapte a tus necesidades y presupuesto
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {types.map((type, index) => (
                <Card key={index} className={`relative p-6 ${type.popular ? 'border-primary shadow-lg' : ''}`}>
                  {type.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Más Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6" 
                      variant={type.popular ? "default" : "outline"}
                      onClick={() => openWhatsApp(`Hola, me interesa más información sobre ${type.title}`)}
                    >
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
              Sonríe con Confianza
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Las carillas dentales son la solución perfecta para una sonrisa impecable. 
              Agenda tu evaluación y descubre qué tipo de carilla es ideal para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" onClick={() => openWhatsApp('Hola, quiero agendar una Evaluación Gratuita para Carillas')}>
                <Clock className="w-5 h-5" />
                Evaluación Gratuita
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '/casos-clinicos'}>
                <Heart className="w-5 h-5" />
                Casos de Éxito
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

export default Carillas;