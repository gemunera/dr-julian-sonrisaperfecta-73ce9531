import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  
  const navItems = [{
    name: t('nav.home'),
    href: "/"
  }, {
    name: "Dr. Julián Palacios",
    href: "/doctor"
  }, {
    name: "Diseños de Sonrisa",
    href: "/diseno-sonrisa"
  }, {
    name: "Periodoncia",
    href: "/periodoncia"
  }, {
    name: "Implantología",
    href: "/implantologia"
  }, {
    name: t('nav.cases'),
    href: "/casos-clinicos"
  }, {
    name: t('nav.contact'),
    href: "/contacto"
  }];
  return <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 fixed top-0 z-50 w-full">
      <div className="w-full mx-auto px-1 sm:px-2">
        <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
          {/* Navigation - Centered */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white/90 hover:text-white px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 uppercase tracking-tight whitespace-nowrap flex-shrink-0 text-center">
                  {item.name}
                </a>)}
            </div>
          </div>
          
          {/* Language Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-white/90 hover:text-white hover:bg-white/10 gap-2 flex-shrink-0"
          >
            <Languages size={18} />
            <span className="text-xs font-medium">{language === 'es' ? 'EN' : 'ES'}</span>
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;