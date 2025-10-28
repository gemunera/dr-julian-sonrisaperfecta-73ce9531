import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BeforeAfterModalProps {
  title: string;
  imageSrc: string;
  triggerText?: string;
}

const BeforeAfterModal = ({ title, imageSrc, triggerText }: BeforeAfterModalProps) => {
  const { t } = useLanguage();
  const label = triggerText ?? t('cases.viewResults');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Eye size={16} />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            {t('cases.before')} y {t('cases.after')} - {title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <img 
            src={imageSrc} 
            alt={`${t('cases.before')} y ${t('cases.after')} de ${title}`}
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
          <div className="flex justify-between w-full max-w-3xl text-sm text-muted-foreground">
            <span className="font-semibold uppercase">{t('cases.before')}</span>
            <span className="font-semibold uppercase">{t('cases.after')}</span>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl">
            Resultados reales de pacientes que han confiado en nuestros tratamientos especializados.
            Los resultados pueden variar según cada caso individual.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BeforeAfterModal;