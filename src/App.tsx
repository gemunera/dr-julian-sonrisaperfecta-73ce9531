import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Doctor from "./pages/Doctor";
import DisenoSonrisa from "./pages/DisenoSonrisa";
import Carillas from "./pages/Carillas";
import Periodoncia from "./pages/Periodoncia";
import Implantologia from "./pages/Implantologia";
import CasosClinicosPage from "./pages/CasosClinicosPage";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/diseno-sonrisa" element={<DisenoSonrisa />} />
          <Route path="/carillas" element={<Carillas />} />
          <Route path="/periodoncia" element={<Periodoncia />} />
          <Route path="/implantologia" element={<Implantologia />} />
          <Route path="/casos-clinicos" element={<CasosClinicosPage />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
