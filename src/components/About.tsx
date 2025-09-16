import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Clock, Heart } from "lucide-react";
import drPalaciosScrubs from "@/assets/dr-palacios-scrubs.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Sobre el Doctor</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dr. Julián Palacios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialista en Periodoncia con más de 10 años de experiencia transformando sonrisas
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Doctor Julián Palacios, odontólogo egresado de la Universidad del Valle (2015) y 
                especialista en Periodoncia de la misma institución (2021). Con más de 10 años de 
                experiencia en odontología y cirugía periodontal, se ha consolidado como un referente 
                en el cuidado integral de la salud oral y en la transformación estética de las sonrisas.
              </p>

              <p className="text-muted-foreground mb-6">
                Su práctica combina la precisión científica de la periodoncia con la innovación en 
                estética dental, ofreciendo tratamientos como diseño de sonrisa, carillas dentales 
                e implantología. El enfoque del Dr. Palacios está en lograr resultados que no solo 
                mejoran la salud de las encías y dientes, sino que también potencian la seguridad, 
                la armonía facial y la confianza de cada paciente.
              </p>

              <p className="text-muted-foreground mb-8">
                Cada tratamiento está diseñado con un equilibrio entre funcionalidad y estética, 
                garantizando sonrisas saludables, naturales y atractivas.
              </p>

              <div className="bg-accent/50 p-6 rounded-lg mb-8">
                <p className="text-lg font-medium text-primary italic text-center">
                  "Periodoncia para la salud. Estética dental para la confianza. 
                  Diseños de sonrisa que transforman vidas."
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Formación</h3>
                      <p className="text-sm text-muted-foreground">Universidad del Valle</p>
                    </div>
                  </div>
                  <p className="text-sm">Odontología (2015) • Especialización en Periodoncia (2021)</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Experiencia</h3>
                      <p className="text-sm text-muted-foreground">Más de 10 años</p>
                    </div>
                  </div>
                  <p className="text-sm">Odontología general y cirugía periodontal especializada</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Especialidades</h3>
                      <p className="text-sm text-muted-foreground">Tratamientos integrales</p>
                    </div>
                  </div>
                  <p className="text-sm">Periodoncia • Implantología • Diseño de Sonrisa</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Heart className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Enfoque</h3>
                      <p className="text-sm text-muted-foreground">Centrado en el paciente</p>
                    </div>
                  </div>
                  <p className="text-sm">Salud oral integral y transformación estética</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={drPalaciosScrubs}
              alt="Dr. Julián Palacios en su consultorio"
              className="w-full h-auto rounded-2xl shadow-professional"
            />
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Pacientes</div>
                <div className="text-xs">Transformados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;