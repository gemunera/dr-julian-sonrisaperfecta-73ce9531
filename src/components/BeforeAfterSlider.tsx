import { useState, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import BeforeAfterModal from "./BeforeAfterModal";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  category: string;
  description?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  title,
  category,
  description
}: BeforeAfterSliderProps) => {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);

  const defaultDescription = t('cases.defaultDisclaimer');

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    hasMoved.current = true;
    updateSliderPosition(e.clientX);
  };

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    hasMoved.current = true;
    e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  }, [isDragging, updateSliderPosition]);

  const handleStart = () => {
    setIsDragging(true);
    hasMoved.current = false;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (!hasMoved.current) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] overflow-hidden">
            <div 
              ref={containerRef}
              className="relative w-full h-full cursor-col-resize select-none touch-none"
              onMouseMove={handleMouseMove}
              onMouseDown={handleStart}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleEnd}
              onClick={handleClick}
            >
              {/* After Image */}
              <img 
                src={afterImage} 
                alt={`${t('cases.after')} - ${title}`}
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
                  alt={`${t('cases.before')} - ${title}`}
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
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded uppercase pointer-events-none">
                {t('cases.before')}
              </div>
              <div className="absolute bottom-4 right-4 text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded uppercase pointer-events-none">
                {t('cases.after')}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">
              {description || defaultDescription}
            </p>
          </div>
        </CardContent>
      </Card>

      <BeforeAfterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        beforeImage={beforeImage}
        afterImage={afterImage}
        title={title}
      />
    </>
  );
};

export default BeforeAfterSlider;
