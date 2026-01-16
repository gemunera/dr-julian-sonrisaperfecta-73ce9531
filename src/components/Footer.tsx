import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Instagram, Facebook, Linkedin, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { openInstagram, openFacebook } from "@/lib/social-links";
const WhatsAppIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.56-.01-.188 0-.669.25-.916.371C6.27 7.55 5.8 8.54 5.8 10.42c0 1.881 1.108 3.7 1.263 3.956.154.256 2.463 3.76 5.969 5.276.835.36 1.487.576 1.996.737.837.267 1.598.229 2.2.139.671-.1 2.062-.843 2.353-1.656.292-.813.292-1.51.206-1.656-.087-.146-.322-.232-.678-.405z" />
  </svg>;
const Footer = () => {
  const { t } = useLanguage();
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Dr. Julián Palacios</h3>
            <p className="text-primary-foreground/80 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="secondary" className="p-2" onClick={openInstagram}>
                <Instagram size={18} />
              </Button>
              <Button size="sm" variant="secondary" className="p-2" onClick={openFacebook}>
                <Facebook size={18} />
              </Button>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#diseno-sonrisa" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('services.smileDesign.title')}
                </a>
              </li>
              <li>
                <a href="#carillas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('services.veneers.title')}
                </a>
              </li>
              <li>
                <a href="#periodoncia" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('services.periodontics.title')}
                </a>
              </li>
              <li>
                <a href="#implantologia" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('services.implants.title')}
                </a>
              </li>
              <li>
                <a href="#casos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('cases.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <WhatsAppIcon />
                <span className="text-primary-foreground/80">316 7580565</span>
              </div>
              <div className="flex items-center gap-3">
                
                
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:julianpalaciosgaviria05@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                  julianpalaciosgaviria05@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <a href="https://www.google.com/maps/search/?api=1&query=Calle+9+%2346-69+Cali+Valle+del+Cauca" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors cursor-pointer">
                    <div>Calle 9 #46-69</div>
                    <div>Cali, Valle del Cauca</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

        {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.schedule')}</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">{t('footer.scheduleTime').split(':')[0]}:</span>
                <span>{t('footer.scheduleTime').split(':')[1]?.trim()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">{t('footer.saturdays')}:</span>
                <span>8:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">{t('footer.sundays')}:</span>
                <span>{t('footer.closed')}</span>
              </div>
            </div>
            <div className="mt-6">
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © 2024 Dr. Julián Palacios. {t('footer.rights')}
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                {t('footer.specialist')}
              </p>
            </div>
            
            <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
              
              <Heart size={16} className="fill-current text-red-400" />
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;