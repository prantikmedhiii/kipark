
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import EServices from "./pages/EServices";
import PaymentServices from "./pages/PaymentServices";
import Zones from "./pages/Zones";
import Facilities from "./pages/Facilities";
import Media from "./pages/Media";
import FAQs from "./pages/FAQs";
import Directory from "./pages/Directory";
import Contact from "./pages/Contact";
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
          <Route path="/about" element={<About />} />
          <Route path="/e-services" element={<EServices />} />
          <Route path="/payment-services" element={<PaymentServices />} />
          <Route path="/zones" element={<Zones />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/media" element={<Media />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
