import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  category: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, title, category }: BeforeAfterSliderProps) => {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Badge className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground">
            {category}
          </Badge>
          
          <div 
            className="relative w-full h-full cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* After Image */}
            <img 
              src={afterImage} 
              alt={`Después - ${title}`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            
            {/* Before Image with smooth transition */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{
                width: `${sliderPosition}%`,
                transition: isDragging ? 'none' : 'width 0.1s ease-out'
              }}
            >
              <img 
                src={beforeImage} 
                alt={`Antes - ${title}`}
                className="w-full h-full object-cover"
                style={{
                  width: `${100 * (100 / sliderPosition)}%`,
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
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
            
            {/* Labels */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded uppercase">
              {t('cases.before')}
            </div>
            <div className="absolute bottom-4 right-4 text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded uppercase">
              {t('cases.after')}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">
            Resultado real de paciente. Los resultados pueden variar según cada caso individual.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeforeAfterSlider;