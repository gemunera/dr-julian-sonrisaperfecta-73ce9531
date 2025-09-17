import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Linkedin, Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Dr. Julián Palacios</h3>
            <p className="text-primary-foreground/80 mb-6">
              Especialista en Periodoncia e Implantología. 
              Transformando sonrisas con ciencia y estética.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="secondary" className="p-2">
                <Instagram size={18} />
              </Button>
              <Button size="sm" variant="secondary" className="p-2">
                <Facebook size={18} />
              </Button>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#diseno-sonrisa" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Diseño de Sonrisa
                </a>
              </li>
              <li>
                <a href="#carillas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Carillas Dentales
                </a>
              </li>
              <li>
                <a href="#periodoncia" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Periodoncia
                </a>
              </li>
              <li>
                <a href="#implantologia" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Implantología
                </a>
              </li>
              <li>
                <a href="#casos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Casos Clínicos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span className="text-primary-foreground/80">+57 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                
                
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="text-primary-foreground/80">consultas@drpalacios.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Calle 123 # 45-67</div>
                  <div>Cali, Valle del Cauca</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Lun - Vie:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Sábados:</span>
                <span>8:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Domingos:</span>
                <span>Cerrado</span>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="secondary" className="w-full gap-2">
                <MessageCircle size={16} />
                Agendar Cita
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © 2024 Dr. Julián Palacios. Todos los derechos reservados.
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                Especialista en Periodoncia - Universidad del Valle
              </p>
            </div>
            
            <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
              <span>Hecho con</span>
              <Heart size={16} className="fill-current text-red-400" />
              <span>para transformar sonrisas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;