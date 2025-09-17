import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Microscope, Users, CheckCircle, AlertTriangle, Stethoscope } from "lucide-react";
const Periodoncia = () => {
  const treatments = [{
    title: "Limpieza Profunda",
    description: "Eliminación de sarro y placa bacteriana por debajo de la línea de las encías",
    icon: Microscope,
    benefits: ["Elimina infecciones", "Previene pérdida ósea", "Mejora halitosis"]
  }, {
    title: "Cirugía Periodontal",
    description: "Tratamiento avanzado para casos severos de enfermedad periodontal",
    icon: Stethoscope,
    benefits: ["Regeneración tisular", "Preserva dientes", "Resultados duraderos"]
  }, {
    title: "Mantenimiento",
    description: "Cuidado preventivo continuo para mantener la salud de las encías",
    icon: Heart,
    benefits: ["Prevención efectiva", "Detección temprana", "Sonrisa saludable"]
  }];
  const symptoms = ["Encías rojas o inflamadas", "Sangrado al cepillarse", "Mal aliento persistente", "Retracción de encías", "Dientes flojos o móviles", "Dolor al masticar"];
  const prevention = ["Cepillado correcto 2 veces al día", "Uso diario de hilo dental", "Enjuague bucal antibacteriano", "Visitas regulares al periodoncista", "Evitar el tabaco", "Dieta balanceada"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                <Shield className="w-4 h-4 mr-2" />
                Especialidad del Dr. Palacios
              </Badge>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La base de una sonrisa saludable está en encías sanas. Como especialista en 
                periodoncia, el Dr. Palacios ofrece tratamientos avanzados para prevenir y 
                tratar enfermedades de las encías, preservando tu salud oral integral.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Heart className="w-5 h-5" />
                  Evaluación Periodontal
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Users className="w-5 h-5" />
                  Casos Tratados
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Tratamientos Especializados
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluciones integrales para la salud de tus encías y soporte dental
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <treatment.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{treatment.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{treatment.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left">
                      {treatment.benefits.map((benefit, idx) => <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>)}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Más Información
                    </Button>
                  </CardContent>
                </Card>)}
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
                  Señales de Alerta
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  ¿Cuándo consultar al periodoncista?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  La detección temprana es clave para prevenir la pérdida dental. 
                  Si presentas alguno de estos síntomas, agenda una cita inmediatamente.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {symptoms.map((symptom, index) => <div key={index} className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-sm">{symptom}</span>
                    </div>)}
                </div>
              </div>
              
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Prevención Efectiva</CardTitle>
                  <p className="text-muted-foreground text-center">
                    Mantén tus encías saludables con estos hábitos esenciales
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {prevention.map((tip, index) => <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>;
};
export default Periodoncia;