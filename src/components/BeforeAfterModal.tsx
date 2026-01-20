import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface BeforeAfterModalProps {
  isOpen: boolean;
  onClose: () => void;
  beforeImage?: string;
  afterImage?: string;
  singleImage?: string;
  title: string;
}

const BeforeAfterModal = ({ 
  isOpen, 
  onClose, 
  beforeImage, 
  afterImage, 
  singleImage,
  title 
}: BeforeAfterModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] p-2 sm:p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center text-foreground">{title}</h3>
          
          {singleImage ? (
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
