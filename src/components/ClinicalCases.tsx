import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock } from "lucide-react";
const ClinicalCases = () => {
  const cases = [{
    id: 1,
    title: "Diseño de Sonrisa Completo",
    category: "Estética Dental",
    duration: "3 semanas",
    difficulty: "Avanzado",
    description: "Transformación completa con carillas de porcelana y blanqueamiento profesional.",
    results: ["Alineación perfecta", "Color natural uniforme", "Armonía facial mejorada", "Confianza restaurada"]
  }, {
    id: 2,
    title: "Rehabilitación con Implantes",
    category: "Implantología",
    duration: "4 meses",
    difficulty: "Complejo",
    description: "Reemplazo de múltiples piezas dentales con implantes de titanio y coronas personalizadas.",
    results: ["Función masticatoria 100% restaurada", "Estética natural", "Preservación del hueso", "Solución permanente"]
  }, {
    id: 3,
    title: "Tratamiento Periodontal Integral",
    category: "Periodoncia",
    duration: "6 semanas",
    difficulty: "Moderado",
    description: "Regeneración de encías y tratamiento de periodontitis avanzada con técnicas mínimamente invasivas.",
    results: ["Encías saludables", "Eliminación de inflamación", "Prevención de pérdida dental", "Mejora en salud general"]
  }, {
    id: 4,
    title: "Carillas Ultrafinas",
    category: "Estética Dental",
    duration: "2 semanas",
    difficulty: "Intermedio",
    description: "Corrección de espacios y forma dental con carillas de porcelana ultrafinas sin desgaste.",
    results: ["Mínima invasión", "Resultado inmediato", "Conservación dental", "Apariencia natural"]
  }];
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800";
      case "Avanzado":
        return "bg-orange-100 text-orange-800";
      case "Complejo":
        return "bg-red-100 text-red-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };
  return <section id="casos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Casos Clínicos</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transformaciones Reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo hemos transformado la vida de nuestros pacientes con 
            tratamientos personalizados y resultados excepcionales
          </p>
        </div>

        {/* Featured Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Casos Exitosos</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="flex items-center justify-center gap-1 text-3xl font-bold text-primary mb-2">
              <Star className="fill-current" size={24} />
              4.9
            </div>
            <div className="text-sm text-muted-foreground">Satisfacción Promedio</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Tasa de Éxito</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Años de Experiencia</div>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cases.map(case_ => <Card key={case_.id} className="border-0 shadow-card hover:shadow-professional transition-all duration-300 group">
              
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-primary text-primary-foreground p-8 rounded-2xl shadow-professional max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Cada paciente es único y merece un tratamiento personalizado. 
              Agenda tu consulta y descubre cómo podemos transformar tu sonrisa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="gap-2">
                Agendar Consulta
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Ver Más Casos
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16">
          <Card className="border-0 shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-primary fill-current" size={20} />)}
              </div>
              <blockquote className="text-lg text-muted-foreground italic mb-4">
                "El Dr. Palacios no solo transformó mi sonrisa, sino que cambió mi vida. 
                Su profesionalismo, atención al detalle y el resultado final superaron 
                todas mis expectativas. Recomiendo su trabajo al 100%."
              </blockquote>
              <cite className="text-foreground font-semibold">
                María González
              </cite>
              <p className="text-sm text-muted-foreground">Diseño de Sonrisa Completo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ClinicalCases;