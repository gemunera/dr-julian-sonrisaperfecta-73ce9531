import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle, Instagram, Facebook, Linkedin, Mail, MapPin } from "lucide-react";
import drPalaciosProcedure from "@/assets/dr-palacios-procedure.jpg";
import drPalaciosLogoName from "@/assets/dr-palacios-logo-name.png";
import drPalaciosLogoSide from "@/assets/dr-palacios-logo-side.png";
import julianPalaciosGeneratedLogo from "@/assets/julian-palacios-generated-logo.png";
import drPalaciosHeaderLogo from "@/assets/dr-palacios-header-logo.png";
import drPalaciosFooterLogo from "@/assets/dr-palacios-footer-logo.png";
import DoctorTitle from "./DoctorTitle";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={drPalaciosProcedure} alt="Dr. Julián Palacios realizando procedimiento dental" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Doctor Title */}
        <div className="mb-12">
          <DoctorTitle />
        </div>

        {/* Specialties */}
        <div className="mb-8">
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide leading-relaxed">
            Odontología · Periodoncia · Implantología Oral · Diseño de Sonrisa
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide leading-relaxed mt-2">
            Carillas Dentales · Especialista Universidad del Valle
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Phone size={18} />
            <span className="text-lg">+57 123 456 7890</span>
            <span className="mx-2">·</span>
            <span className="text-lg">+57 316 7580565</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-white/90 mt-4">
            <MapPin size={18} />
            <span className="text-lg">Cali / Colombia</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 gap-2 shadow-professional">
            <Calendar size={20} />
            Agenda tu Cita
          </Button>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-4">
          <Button size="sm" variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Facebook size={20} />
          </Button>
          <Button size="sm" variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Mail size={20} />
          </Button>
          <Button size="sm" variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Instagram size={20} />
          </Button>
          <Button size="sm" variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Linkedin size={20} />
          </Button>
          <Button size="sm" variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <MessageCircle size={20} />
          </Button>
        </div>
      </div>

      {/* Logo Below Content */}
      <div className="relative z-10 flex justify-center mt-8">
        <img 
          src={drPalaciosFooterLogo} 
          alt="Dr. Julián Mauricio Palacios Gaviria - Logo" 
          className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-90"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default Hero;