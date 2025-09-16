import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Award, Users } from "lucide-react";
import drPalaciosPortrait from "@/assets/dr-palacios-portrait.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-light py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="gap-1">
                <Award size={14} />
                Especialista Certificado
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Users size={14} />
                10+ Años de Experiencia
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">Ciencia y estética</span>
              <br />
              para tu mejor sonrisa
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Especialista en Periodoncia e Implantología. Transformamos sonrisas combinando 
              la precisión científica con la innovación en estética dental para resultados 
              que mejoran tu salud y confianza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gap-2 shadow-professional">
                <Calendar size={20} />
                Agenda tu Cita
              </Button>
              <Button variant="outline" size="lg">
                Ver Casos Clínicos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary mb-1">
                  <Star className="fill-current" size={20} />
                  4.9
                </div>
                <p className="text-sm text-muted-foreground">Calificación promedio</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <p className="text-sm text-muted-foreground">Pacientes satisfechos</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in lg:animate-fade-in">
            <div className="relative z-10">
              <img
                src={drPalaciosPortrait}
                alt="Dr. Julián Palacios - Especialista en Periodoncia"
                className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-professional"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-card">
                <div className="text-center">
                  <div className="text-xl font-bold">Universidad</div>
                  <div className="text-sm">del Valle</div>
                  <div className="text-xs mt-1">2015 - 2021</div>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-8 left-8 w-32 h-32 bg-accent rounded-full -z-10 opacity-50"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;