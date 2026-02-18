import {
  Facebook,
  Instagram,
  Phone,
  MapPin,
  ExternalLink,
  AtSign,
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

        {/* Coluna 3: Redes Sociais e OLX */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/trindade_servicos_residenciais"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-2 rounded-full hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 hover:text-white transition-all"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/TrindadeServicosResidenciaisJP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-2 rounded-full hover:bg-blue-700 hover:text-white transition-all"
              title="Facebook"
            >
              <Facebook size={24} />
            </a>

            {/* Threads */}
            <a
              href="https://threads.net/@trindade_servicos_residenciais"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-2 rounded-full hover:bg-white hover:text-black transition-all"
              title="Threads"
            >
              <AtSign size={24} />
            </a>

            {/* OLX */}
            <a
              href="https://www.olx.com.br/perfil/trindade-servicos-residenciais"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-2 rounded-full hover:bg-purple-600 hover:text-white transition-all flex items-center gap-1 px-3"
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
