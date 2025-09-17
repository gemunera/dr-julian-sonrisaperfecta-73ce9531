import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      treatment: "Diseño de Sonrisa Completo",
      text: "El Dr. Palacios no solo transformó mi sonrisa, sino que cambió mi vida. Su profesionalismo, atención al detalle y el resultado final superaron todas mis expectativas. Recomiendo su trabajo al 100%.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      treatment: "Implantes Dentales",
      text: "Después de años de problemas dentales, el Dr. Palacios me devolvió la confianza con mis implantes. El proceso fue más cómodo de lo que esperaba y los resultados son increíbles.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana López",
      treatment: "Carillas de Porcelana",
      text: "Las carillas que me hizo el Dr. Palacios se ven completamente naturales. Mi familia y amigos no pueden creer la transformación. Estoy súper feliz con el resultado.",
      rating: 5
    },
    {
      id: 4,
      name: "Roberto Silva",
      treatment: "Tratamiento Periodontal",
      text: "Tenía miedo de perder mis dientes por problemas de encías. El Dr. Palacios salvó mi sonrisa con un tratamiento periodontal que cambió todo. Ahora puedo sonreír sin preocupaciones.",
      rating: 5
    },
    {
      id: 5,
      name: "Isabella Torres",
      treatment: "Ortodoncia Invisible",
      text: "El tratamiento de ortodoncia invisible fue perfecto para mi estilo de vida. Nadie notó que llevaba aparatos y ahora tengo la sonrisa perfecta que siempre quise.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="mt-16">
      <Card className="border-0 shadow-card max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="text-primary fill-current" size={20} />
            ))}
          </div>
          <blockquote className="text-lg text-muted-foreground italic mb-4 min-h-[120px] flex items-center justify-center">
            "{currentTestimonial.text}"
          </blockquote>
          <cite className="text-foreground font-semibold">
            {currentTestimonial.name}
          </cite>
          <p className="text-sm text-muted-foreground">
            {currentTestimonial.treatment}
          </p>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialsCarousel;