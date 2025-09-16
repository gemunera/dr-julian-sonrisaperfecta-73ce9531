import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Calendar,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Contacto</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Agenda tu Consulta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a comenzar 
            tu transformación hacia la sonrisa de tus sueños
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="text-primary" size={20} />
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Llámanos directamente para agendar tu cita
                </p>
                <Button className="w-full gap-2">
                  <Phone size={16} />
                  +57 123 456 7890
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="text-primary" size={20} />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Contáctanos por WhatsApp para una respuesta rápida
                </p>
                <Button variant="outline" className="w-full gap-2">
                  <MessageCircle size={16} />
                  Escribir por WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="text-primary" size={20} />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Calle 123 # 45-67
                </p>
                <p className="text-muted-foreground mb-4">
                  Cali, Valle del Cauca
                </p>
                <Button variant="outline" className="w-full gap-2">
                  <MapPin size={16} />
                  Ver en Google Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="text-primary" size={20} />
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados:</span>
                  <span className="font-medium">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Instagram size={16} />
                    Instagram
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Facebook size={16} />
                    Facebook
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Linkedin size={16} />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Solicita tu Consulta</CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo para 
                  agendar tu consulta personalizada
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre completo</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Teléfono</label>
                    <Input placeholder="Tu número de teléfono" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Correo electrónico</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Servicio de interés</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option value="">Selecciona un servicio</option>
                    <option value="diseno-sonrisa">Diseño de Sonrisa</option>
                    <option value="carillas">Carillas Dentales</option>
                    <option value="periodoncia">Periodoncia</option>
                    <option value="implantologia">Implantología</option>
                    <option value="consulta-general">Consulta General</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensaje</label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu caso, dudas o qué te gustaría mejorar en tu sonrisa..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 gap-2">
                    <Send size={16} />
                    Enviar Solicitud
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Calendar size={16} />
                    Agendar Directamente
                  </Button>
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo. 
                    Tu información está protegida y no será compartida con terceros.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-card bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <MessageCircle size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Consulta Inmediata</h3>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    ¿Tienes una urgencia? Contáctanos por WhatsApp
                  </p>
                  <Button variant="secondary" size="sm" className="gap-2">
                    <MessageCircle size={16} />
                    WhatsApp Urgencias
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <Mail size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Consulta por Email</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Envíanos tu consulta y te responderemos en 24 horas
                  </p>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Mail size={16} />
                    consultas@drpalacios.com
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;