import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smile, Star, Sparkles, Clock, CheckCircle, Heart, Award } from "lucide-react";
import beforeAfterSmileDesign from "@/assets/before-after-smile-design.jpg";
import beforeAfterVeneers from "@/assets/before-after-veneers.jpg";
import beforeAfterImplants from "@/assets/before-after-implants.jpg";
const DisenoSonrisa = () => {
  const benefits = ["Análisis facial completo", "Simulación digital previa", "Resultados naturales y armónicos", "Mejora de la autoestima", "Procedimiento mínimamente invasivo", "Resultados duraderos"];
  const process = [{
    step: 1,
    title: "Consulta Inicial",
    description: "Evaluación facial y dental completa"
  }, {
    step: 2,
    title: "Diseño Digital",
    description: "Simulación 3D de tu nueva sonrisa"
  }, {
    step: 3,
    title: "Preparación",
    description: "Preparación mínima de dientes"
  }, {
    step: 4,
    title: "Resultado Final",
    description: "Colocación y ajuste perfecto"
  }];
  const clinicalCases = [{
    beforeImage: beforeAfterSmileDesign,
    afterImage: beforeAfterSmileDesign,
    title: "Diseño de Sonrisa Completo",
    category: "Diseño de Sonrisa"
  }, {
    beforeImage: beforeAfterVeneers,
    afterImage: beforeAfterVeneers,
    title: "Carillas de Porcelana",
    category: "Carillas Dentales"
  }, {
    beforeImage: beforeAfterImplants,
    afterImage: beforeAfterImplants,
    title: "Rehabilitación con Implantes",
    category: "Implantología"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Tratamiento Estrella
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Diseño de Sonrisa
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforma tu sonrisa con nuestro enfoque científico y artístico. 
                Combinamos tecnología avanzada con la experiencia del Dr. Palacios 
                para crear la sonrisa perfecta que siempre soñaste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Heart className="w-5 h-5" />
                  Agenda tu Consulta
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
                ¿Por qué elegir nuestro Diseño de Sonrisa?
              </h2>
              <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                <p>
                  El Diseño de Sonrisa del Dr. Julián Palacios combina estética y ciencia para crear resultados personalizados, naturales y duraderos. Nuestro enfoque se basa en resaltar la armonía facial y dental de cada paciente, garantizando sonrisas únicas que reflejan seguridad y confianza.
                </p>
                <p>
                  Cada diseño es diferente porque cada persona lo es. Con tecnología avanzada y una visión estética detallada, logramos resultados que transforman no solo la sonrisa, sino también la autoestima y la calidad de vida.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-flex rounded-full bg-primary/10 text-primary p-1.5">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                      <p className="text-base text-foreground">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        

        {/* Clinical Cases Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                <Award className="w-4 h-4 mr-2" />
                Casos Clínicos Reales
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Transformaciones Reales
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubre los resultados increíbles que hemos logrado con nuestros pacientes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicalCases.map((caseItem, index) => <BeforeAfterSlider key={index} beforeImage={caseItem.beforeImage} afterImage={caseItem.afterImage} title={caseItem.title} category={caseItem.category} />)}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="gap-2">
                <Award className="w-5 h-5" />
                Ver Más Casos Clínicos
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para tu nueva sonrisa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda tu consulta gratuita y descubre cómo podemos transformar tu sonrisa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Clock className="w-5 h-5" />
                Agendar Consulta Gratis
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary">
                <Star className="w-5 h-5" />
                Ver Testimonios
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