import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Inicio",
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
    name: "Casos Clínicos",
    href: "/casos-clinicos"
  }, {
    name: "Contacto",
    href: "/contacto"
  }];
  return <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 fixed top-0 z-50 w-full">
      <div className="w-full mx-auto px-1 sm:px-2">
        <div className="flex justify-center items-center h-20">
          {/* Navigation - Always Visible and Centered */}
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center justify-between w-full max-w-6xl space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white/90 hover:text-white px-1 sm:px-2 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 uppercase tracking-tight whitespace-nowrap flex-shrink-0 text-center">
                  {item.name}
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;