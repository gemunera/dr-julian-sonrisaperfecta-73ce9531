import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle, Instagram, Facebook, Linkedin, Mail, MapPin } from "lucide-react";
import drPalaciosProcedure from "@/assets/dr-palacios-procedure.jpg";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={drPalaciosProcedure} alt="Dr. Julián Palacios realizando procedimiento dental" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default Hero;