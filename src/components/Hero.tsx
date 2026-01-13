import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle, Instagram, Facebook, Linkedin, Mail, MapPin } from "lucide-react";
import drPalaciosHeroBg from "@/assets/dr-palacios-hero-bg.png";
import drPalaciosLogoName from "@/assets/dr-palacios-logo-name.png";
import drPalaciosLogoSide from "@/assets/dr-palacios-logo-side.png";
import julianPalaciosGeneratedLogo from "@/assets/julian-palacios-generated-logo.png";
import drPalaciosHeaderLogo from "@/assets/dr-palacios-header-logo.png";
import drPalaciosFooterLogo from "@/assets/dr-palacios-footer-logo.png";
import DoctorTitle from "./DoctorTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={drPalaciosHeroBg} alt="Dr. Julián Palacios realizando procedimiento dental" className="w-full h-full object-cover object-[50%_20%] sm:object-[50%_25%] md:object-[50%_30%] lg:object-[50%_35%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-24 sm:mt-32 md:mt-40 lg:mt-48 xl:mt-56">
        {/* Doctor Title */}
        <div className="mb-6">
          <DoctorTitle />
        </div>

        {/* Specialties */}
        <div className="mb-6">
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide leading-relaxed">
            {t('hero.description')}
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-3 space-y-1">
          
          
          <div className="flex items-center justify-center gap-2 text-white/90 mt-2">
            <MapPin size={18} />
            <span className="text-lg">Cali / Colombia</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-6">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 gap-2 shadow-professional" onClick={() => {}}>
            <Calendar size={20} />
            {t('hero.cta')}
          </Button>
        </div>

        {/* Social Media */}
        <div className="flex justify-center items-center space-x-4">
          <Button size="sm" variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Facebook size={20} />
          </Button>
          <Button size="sm" variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Mail size={20} />
          </Button>
          <Button size="sm" variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Instagram size={20} />
          </Button>
          
          
          
          {/* Scroll Indicator */}
          <div className="ml-6">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;