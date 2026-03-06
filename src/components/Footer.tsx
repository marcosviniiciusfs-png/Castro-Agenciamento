import { Phone, Instagram, Facebook } from "lucide-react";
import castroLogo from "@/assets/castro-logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#0a0c19] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo */}
          <div>
            <div className="mb-6">
              <img src={castroLogo} alt="AC Castro Agenciamento" className="h-12 w-auto" />
            </div>
          </div>

          {/* Social */}
           <div>
             <h3 className="text-lg font-bold mb-4">Social</h3>
             <div className="flex gap-3">
               <a 
                 href="https://www.instagram.com/castroagenciamento?fbclid=IwY2xjawQX8edleHRuA2FlbQIxMABicmlkETFMZXRJdWdBbjJrd3prSGVLc3J0YwZhcHBfaWQPNTE0NzcxNTY5MjI4MDYxAAEegmbIA59TBbEQu5BmPLbAG39rDXJVRM2OQU5t8x5EuNIV8iQFm1aS0rFz9n4_aem_wJHUrKXUO40ZOAaq-FNOpg" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                 aria-label="Instagram"
               >
                 <Instagram className="w-5 h-5" />
               </a>
               <a 
                 href="https://www.facebook.com/castroagenciamento" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                 aria-label="Facebook"
               >
                 <Facebook className="w-5 h-5" />
               </a>
             </div>
           </div>

          {/* Fale Conosco */}
          <div>
          <h3 className="text-lg font-bold mb-4">Fale conosco</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                   <p className="text-white/90">(99) 98432-7058</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Nosso endereço</h3>
          <div className="space-y-2 text-white/90">
            <p>Av dos Holandeses Nº4</p>
            <p>Bairro: Calhau</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/80 text-sm">
            Copyright 2025 - Todos os direitos reservados por SimuLead
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
