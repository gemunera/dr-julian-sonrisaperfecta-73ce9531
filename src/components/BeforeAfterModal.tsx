import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BeforeAfterModalProps {
  isOpen: boolean;
  onClose: () => void;
  beforeImage?: string;
  afterImage?: string;
  singleImage?: string;
  carouselImages?: string[];
  title: string;
}

const BeforeAfterModal = ({ 
  isOpen, 
  onClose, 
  beforeImage, 
  afterImage, 
  singleImage,
  carouselImages,
  title 
}: BeforeAfterModalProps) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (carouselImages) {
      setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    }
  };

  const goToNext = () => {
    if (carouselImages) {
      setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] p-2 sm:p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center text-foreground">{title}</h3>
          
          {carouselImages && carouselImages.length > 0 ? (
            <div className="relative w-full">
              <img 
                src={carouselImages[currentIndex]} 
                alt={`${title} - ${currentIndex + 1}`}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              
              {carouselImages.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-primary w-4' 
                            : 'bg-background/60 hover:bg-background/80'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-center text-muted-foreground mt-2">
                    {currentIndex + 1} / {carouselImages.length}
                  </p>
                </>
              )}
            </div>
          ) : singleImage ? (
            <div className="w-full">
              <img 
                src={singleImage} 
                alt={title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-center text-muted-foreground uppercase">
                  {t('cases.before')}
                </p>
                <img 
                  src={beforeImage} 
                  alt={`${t('cases.before')} - ${title}`}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-center text-muted-foreground uppercase">
                  {t('cases.after')}
                </p>
                <img 
                  src={afterImage} 
                  alt={`${t('cases.after')} - ${title}`}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BeforeAfterModal;
