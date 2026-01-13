import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('contact.badge')}</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-center gap-6">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-3 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600"
            onClick={() => window.open('https://www.facebook.com/share/1DbZ9ztDej/?mibextid=wwXIfr', '_blank')}
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-3 hover:bg-gray-50 hover:border-gray-500 hover:text-gray-600"
            onClick={() => window.location.href = 'mailto:julianpalaciosgaviria05@gmail.com'}
          >
            <Mail className="w-5 h-5" />
            Email
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-3 hover:bg-pink-50 hover:border-pink-500 hover:text-pink-600"
            onClick={() => window.open('https://instagram.com/dr.julianpalacios', '_blank')}
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
