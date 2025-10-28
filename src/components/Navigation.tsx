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
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
              {navItems.map(item => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-white/90 hover:text-white px-2 py-2 text-sm font-medium transition-colors duration-300 uppercase tracking-tight whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Logo/Title for Mobile */}
          <div className="lg:hidden flex-1 text-center">
            <span className="text-white font-semibold text-sm">Dr. Julián Palacios</span>
          </div>

          {/* Language Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-white/90 hover:text-white hover:bg-white/10 gap-2 flex-shrink-0 px-3 py-2"
          >
            <Languages size={20} />
            <span className="hidden sm:inline text-sm font-medium">{language === 'es' ? 'Inglés' : 'Español'}</span>
            <span className="sm:hidden text-sm font-medium">{language === 'es' ? 'EN' : 'ES'}</span>
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10 absolute top-20 left-0 right-0 z-50">
            <div className="px-4 py-6 space-y-3">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 uppercase tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>;
};
export default Navigation;