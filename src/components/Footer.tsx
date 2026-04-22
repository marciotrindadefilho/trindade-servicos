import {
  Facebook,
  Instagram,
  Phone,
  MapPin,
  ExternalLink,
  AtSign,
  Youtube,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-slate-900 relative z-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Coluna 1: Sobre a Trindade Serviços */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Trindade Serviços Residenciais JP
          </h3>
          <p className="text-sm leading-relaxed">
            Excelência e confiança em serviços residenciais. Atendendo João
            Pessoa com profissionalismo e técnica apurada.
          </p>
        </div>

        {/* Coluna 2: Contato Direto */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={18} className="text-green-500" />
              João Pessoa - PB
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} className="text-green-500" />
              (83) 99122-5011
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais e Perfil Google */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Google Business Profile - Azul Google */}
            <a
              href="https://www.google.com/search?q=Trindade+Serviços+Residenciais+JP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4285F4] text-white p-2 rounded-full hover:opacity-80 transition-all shadow-lg shadow-blue-500/20"
              title="Ver no Google"
            >
              <Globe size={24} />
            </a>

            {/* Instagram - Gradiente Original */}
            <a
              href="https://instagram.com/trindade_servicos_residenciais"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-2 rounded-full hover:opacity-80 transition-all shadow-lg shadow-pink-500/20"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>

            {/* Facebook - Azul Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61587421491947"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-80 transition-all shadow-lg shadow-blue-600/20"
              title="Facebook"
            >
              <Facebook size={24} />
            </a>

            {/* Threads - Preto/Branco (Contraste) */}
            <a
              href="https://www.threads.com/@trindade_servicos_residenciais"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-all shadow-lg"
              title="Threads"
            >
              <AtSign size={24} />
            </a>

            {/* YouTube - Vermelho YouTube */}
            <a
              href="https://www.youtube.com/@TrindadeServiçosResidenciaisJP?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] text-white p-2 rounded-full hover:opacity-80 transition-all shadow-lg shadow-red-500/20"
              title="YouTube"
            >
              <Youtube size={24} />
            </a>

            {/* OLX - Roxo OLX */}
            <a
              href="https://pb.olx.com.br/paraiba/servicos/instalacoes-e-servicos-gerais-em-residencias-1478564330?lis=ad_card_user_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8E44AD] text-white p-2 rounded-full hover:opacity-80 transition-all flex items-center gap-1 px-3 shadow-lg shadow-purple-500/20"
              title="Loja na OLX"
            >
              <ExternalLink size={18} />
              <span className="text-xs font-bold">OLX</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Automático */}
      <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Trindade Serviços Residenciais JP.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
