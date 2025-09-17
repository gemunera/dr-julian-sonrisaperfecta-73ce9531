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
      <div className="max-w-full mx-auto px-2 sm:px-4">
        <div className="flex justify-center items-center h-20">
          {/* Navigation - Always Visible and Centered */}
          <div className="flex items-center justify-center w-full overflow-x-auto">
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 min-w-max">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white/90 hover:text-white px-1 sm:px-2 md:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 uppercase tracking-wide whitespace-nowrap flex-shrink-0">
                  {item.name}
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;