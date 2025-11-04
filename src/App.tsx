import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import JoinAdvisors from "./pages/JoinAdvisors";
import RentCatalog from "./pages/RentCatalog";
import SaleCatalog from "./pages/SaleCatalog";
import Services from "./pages/Services";
import ConsultationForm from "./pages/ConsultationForm";
import PropertyDetails from "./pages/PropertyDetails";
import AIAgent from "./pages/AIAgent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import Zonas from "./pages/Zonas";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

import VoiceAgent from "./pages/VoiceAgent";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/join-advisors" element={<JoinAdvisors />} />
          <Route path="/rent-catalog" element={<RentCatalog />} />
          <Route path="/sale-catalog" element={<SaleCatalog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/zonas" element={<Zonas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/voice-agent" element={<VoiceAgent />} />
          <Route path="/consultation" element={<ConsultationForm />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/ai-agent" element={<AIAgent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
