import Navigation from "@/components/Navigation";
import ClinicalCases from "@/components/ClinicalCases";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const CasosClinicosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ClinicalCases />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CasosClinicosPage;