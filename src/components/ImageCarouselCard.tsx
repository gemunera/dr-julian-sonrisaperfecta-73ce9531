import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterModal from "./BeforeAfterModal";

interface ImageCarouselCardProps {
  images: string[];
  title: string;
  description: string;
}

const ImageCarouselCard = ({ images, title, description }: ImageCarouselCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Card 
        className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={images[currentIndex]} 
              alt={`${title} - ${currentIndex + 1}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              draggable={false} 
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-primary w-4' 
                          : 'bg-background/60 hover:bg-background/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>

      <BeforeAfterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        carouselImages={images}
        title={title}
      />
    </>
  );
};

export default ImageCarouselCard;
