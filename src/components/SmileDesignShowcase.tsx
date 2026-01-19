import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import smileDesignBefore from "@/assets/smile-design-before.png";
import smileDesignAfter from "@/assets/smile-design-after.png";

const SmileDesignShowcase = () => {
  const { t, language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const title = language === 'es' ? 'Diseño de Sonrisa' : 'Smile Design';
  const description = language === 'es' 
    ? 'Diseño de sonrisa en cerámica. Tratamiento realizado con restauraciones cerámicas de alta estética que permiten mejorar forma, color y proporción dental, logrando una sonrisa más armónica, natural y luminosa, con resultados duraderos y biocompatibles.'
    : 'Ceramic smile design. Treatment performed with high-aesthetic ceramic restorations that improve dental shape, color and proportion, achieving a more harmonious, natural and luminous smile, with lasting and biocompatible results.';

  return (
    <section className="py-20 bg-gradient-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            {title}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {language === 'es' ? 'Transformación Real' : 'Real Transformation'}
          </h2>
        </div>

        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          {/* Before/After Slider Container */}
          <div 
            className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            {/* After Image (Background) */}
            <img 
              src={smileDesignAfter} 
              alt={language === 'es' ? 'Después del tratamiento' : 'After treatment'}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            
            {/* Before Image with clip */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{
                width: `${sliderPosition}%`,
                transition: isDragging ? 'none' : 'width 0.1s ease-out'
              }}
            >
              <img 
                src={smileDesignBefore} 
                alt={language === 'es' ? 'Antes del tratamiento' : 'Before treatment'}
                className="h-full object-cover"
                style={{
                  width: `${100 * (100 / Math.max(sliderPosition, 1))}%`,
                  maxWidth: 'none'
                }}
                draggable={false}
              />
            </div>
            
            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 cursor-col-resize"
              style={{ 
                left: `${sliderPosition}%`,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-primary/60 rounded-full"></div>
                  <div className="w-0.5 h-4 bg-primary/60 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-4 left-4 text-white font-bold text-sm sm:text-base bg-black/60 px-3 py-1.5 rounded-lg uppercase tracking-wide">
              {t('cases.before')}
            </div>
            <div className="absolute top-4 right-4 text-white font-bold text-sm sm:text-base bg-black/60 px-3 py-1.5 rounded-lg uppercase tracking-wide">
              {t('cases.after')}
            </div>
          </div>
          
          {/* Description Text */}
          <div className="p-6 sm:p-8 text-center">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileDesignShowcase;
