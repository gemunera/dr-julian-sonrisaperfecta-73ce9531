import Navigation from "@/components/Navigation";
import About from "@/components/About";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Doctor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Doctor;