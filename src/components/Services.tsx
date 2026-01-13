import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BeforeAfterModal from "@/components/BeforeAfterModal";
import { 
  Smile, 
  Sparkles, 
  Heart, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { openWhatsApp } from "@/lib/social-links";

// Import images
import beforeAfterSmileDesign from "@/assets/before-after-smile-design.jpg";
import beforeAfterVeneers from "@/assets/before-after-veneers.jpg";
import beforeAfterPeriodontics from "@/assets/before-after-periodontics.jpg";
import beforeAfterImplants from "@/assets/before-after-implants.jpg";

const Services = () => {
  const services = [
    {
      id: "diseno-sonrisa",
      icon: Smile,
      title: "Diseño de Sonrisa",
      subtitle: "Transformación estética completa",
      description: "Planificación digital y personalizada para crear la sonrisa perfecta que refleje tu personalidad y mejore tu armonía facial.",
      benefits: [
        "Análisis facial completo",
        "Simulación digital 3D",
        "Planificación personalizada",
        "Resultados naturales"
      ],
      duration: "2-4 visitas",
      popular: true,
      beforeAfterImage: beforeAfterSmileDesign
    },
    {
      id: "carillas",
      icon: Sparkles,
      title: "Carillas Dentales",
      subtitle: "Perfección en cada detalle",
      description: "Láminas ultrafinas de porcelana que transforman completamente la apariencia de tus dientes, corrigiendo color, forma y posición.",
      benefits: [
        "Cambio inmediato",
        "Resistencia duradera",
        "Aspecto natural",
        "Mínima invasión"
      ],
      duration: "2-3 visitas",
      popular: false,
      beforeAfterImage: beforeAfterVeneers
    },
    {
      id: "periodoncia",
      icon: Heart,
      title: "Periodoncia",
      subtitle: "Base sólida para tu sonrisa",
      description: "Tratamiento especializado de encías y estructuras de soporte dental. Una base saludable es fundamental para cualquier sonrisa duradera.",
      benefits: [
        "Salud periodontal",
        "Prevención de pérdida dental",
        "Tratamiento de gingivitis",
        "Regeneración de tejidos"
      ],
      duration: "Según necesidad",
      popular: false,
      beforeAfterImage: beforeAfterPeriodontics
    },
    {
      id: "implantologia",
      icon: Shield,
      title: "Implantología",
      subtitle: "Recupera tu sonrisa completa",
      description: "Reemplazo de dientes perdidos con implantes de titanio. Recupera la funcionalidad y estética con la tecnología más avanzada.",
      benefits: [
        "Función masticatoria completa",
        "Preserva hueso facial",
        "Resultado permanente",
        "Apariencia natural"
      ],
      duration: "3-6 meses",
      popular: false,
      beforeAfterImage: beforeAfterImplants
    }
  ];

  return (
    <section className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Nuestros Servicios</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Especialidades que Transforman
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tratamientos especializados que combinan ciencia, tecnología y estética 
            para resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                id={service.id}
                className={`relative border-0 shadow-card hover:shadow-professional transition-all duration-300 group ${
                  service.popular ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <Badge className="bg-primary text-primary-foreground">
                      Más Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock size={16} />
                      {service.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Beneficios principales:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex gap-2">
                      <Button 
                        variant={service.popular ? "default" : "outline"} 
                        className="flex-1 gap-2 group-hover:scale-105 transition-transform"
                        onClick={() => openWhatsApp(`Hola, me interesa consultar sobre ${service.title}`)}
                      >
                        Consultar sobre {service.title}
                        <ArrowRight size={16} />
                      </Button>
                      <BeforeAfterModal 
                        title={service.title}
                        imageSrc={service.beforeAfterImage}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-card p-8 rounded-2xl shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿No estás seguro qué tratamiento necesitas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agenda una consulta personalizada y te ayudaremos a encontrar el tratamiento 
              perfecto para tus necesidades y objetivos estéticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" onClick={() => openWhatsApp()}>
                Agendar Consulta Gratuita
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/casos-clinicos'}>
                Ver Casos Clínicos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;