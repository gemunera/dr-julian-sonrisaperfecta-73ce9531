import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Inicio",
    href: "#inicio"
  }, {
    name: "Dr. Julián Palacios",
    href: "#about"
  }, {
    name: "Diseño de Sonrisa",
    href: "#diseno-sonrisa"
  }, {
    name: "Carillas Dentales",
    href: "#carillas"
  }, {
    name: "Periodoncia",
    href: "#periodoncia"
  }, {
    name: "Implantología",
    href: "#implantologia"
  }, {
    name: "Casos Clínicos",
    href: "#casos"
  }, {
    name: "Contacto",
    href: "#contacto"
  }];
  return <nav className="bg-transparent backdrop-blur-sm border-b border-white/10 fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">
              Dr. Julián Palacios
            </h1>
            <p className="text-xs text-white/80">Especialista en Periodoncia</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                  {item.name}
                </a>)}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            
            
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:bg-white/10">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm border-t border-white/10">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white/90 hover:text-white block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Phone size={16} />
                  Llamar
                </Button>
                <Button className="gap-2 bg-white text-primary hover:bg-white/90">
                  <MessageCircle size={16} />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;