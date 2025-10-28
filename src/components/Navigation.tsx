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
      <div className="w-full mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center h-16 sm:h-20 max-w-7xl mx-auto gap-2">
          {/* Navigation - Centered */}
          <div className="flex items-center justify-center flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-center space-x-0.5 sm:space-x-1 md:space-x-2 lg:space-x-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white/90 hover:text-white px-1.5 sm:px-2 md:px-3 py-2 text-[0.65rem] sm:text-xs md:text-sm font-medium transition-colors duration-300 uppercase tracking-tight whitespace-nowrap flex-shrink-0 text-center">
                  {item.name}
                </a>)}
            </div>
          </div>
          
          {/* Language Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-white/90 hover:text-white hover:bg-white/10 gap-1 sm:gap-2 flex-shrink-0 px-2 sm:px-3 h-8 sm:h-9"
          >
            <Languages size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="text-[0.65rem] sm:text-xs font-medium whitespace-nowrap hidden xs:inline">{language === 'es' ? 'Inglés' : 'Español'}</span>
            <span className="text-[0.65rem] font-medium xs:hidden">{language === 'es' ? 'EN' : 'ES'}</span>
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;