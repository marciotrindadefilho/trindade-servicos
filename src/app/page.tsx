import {
  Wrench,
  Snowflake,
  Lock,
  Zap,
  Tv,
  Home as HomeIcon,
  Sofa,
  PenTool,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Star,
  Quote,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const servicos = [
    {
      title: "Ar Condicionado",
      desc: "Instalação, manutenção e higienização técnica.",
      icon: Snowflake,
    },
    {
      title: "Lavagem a Seco",
      desc: "Higienização profunda de sofás, colchões e estofados.",
      icon: Sofa,
    },
    {
      title: "Fechaduras Digitais",
      desc: "Instalação precisa de modelos eletrônicos.",
      icon: Lock,
    },
    {
      title: "Elétrica Residencial",
      desc: "Reparos, troca de chuveiros e iluminação.",
      icon: Zap,
    },
    {
      title: "Montagem de Móveis",
      desc: "Montagem e pequenos ajustes de marcenaria.",
      icon: HomeIcon,
    },
    {
      title: "Suportes de TV",
      desc: "Instalação nivelada e segura em painéis.",
      icon: Tv,
    },
    {
      title: "Pequenos Reparos",
      desc: "O 'Marido de Aluguel' para resolver tudo.",
      icon: Wrench,
    },
    {
      title: "Instalações Gerais",
      desc: "Quadros, cortinas, varais e acessórios.",
      icon: PenTool,
    },
  ];

  // Dados dos Depoimentos (Atualizados - Família e Clientes Reais)
  const depoimentos = [
    {
      nome: "Welington Lacerda",
      bairro: "Bessa - JP",
      texto:
        "Chamei para higenizar meu ar-condicionado e fiquei impressionado com a limpeza. parece novo, ficou perfeito. Recomendo!",
      stars: 5,
    },
    {
      nome: "Gisélia Espinola Lacerda",
      bairro: "Jardim Oceania - JP",
      texto:
        "O serviço de troca das corrediças das gavetas da cozinha, ficou perfeito, tudo novo de novo. Muito educado e pontual.",
      stars: 5,
    },
    {
      nome: "Dna. Salete Espinola",
      bairro: "Altiplano - JP",
      texto:
        "Profissionalismo raro de encontrar. Instalaram minha fechadura digital e explicaram tudo com muita paciência. Confiança total para entrar na minha casa.",
      stars: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-32 pb-20">
        {/* IMAGEM DE FUNDO */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/serviço-instalação.png"
            alt="Fundo Trindade Serviços"
            fill
            className="object-cover"
            priority
          />
          {/* MÁSCARA ESCURA */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-1.5 mb-8">
            <MapPin className="text-amber-500 w-4 h-4" />
            <span className="text-gray-100 text-xs md:text-sm font-semibold tracking-wide uppercase">
              Atendemos João Pessoa - PB
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight whitespace-normal md:whitespace-nowrap drop-shadow-lg">
            Você Confia,{" "}
            <span className="text-amber-500">A Gente Resolve.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Cuidamos do seu Patrimônio com a Seriedade que Você exige.
          </p>

          <a
            href="https://wa.me/5583991225011"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/40 transition-all transform hover:-translate-y-1 mb-8"
          >
            Agendar Visita Técnica{" "}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* --- SEÇÃO SERVIÇOS --- */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
              Nossas Especialidades
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              O que podemos fazer por você?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicos.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO QUEM SOMOS --- */}
      <section
        id="quem-somos"
        className="py-24 bg-white border-t border-gray-100 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-md h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                <Image
                  src="/quem-somos.png"
                  alt="Casal Trindade"
                  fill
                  className="object-contain object-bottom hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm block mb-4">
                Nossa História
              </span>

              {/* TÍTULO COM O EFEITO AZUL MARINHO + CONTORNO DOURADO */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 leading-tight drop-shadow-[0_1.2px_1.2px_rgba(245,158,11,0.8)]">
                Trindade Serviços <br /> Residenciais JP
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Muito mais que um serviço técnico, levamos{" "}
                <strong className="text-blue-950">segurança e respeito</strong>{" "}
                para dentro do seu lar. Comandada pela família Trindade, nossa
                empresa une a versatilidade do Marido de Aluguel com a
                especialização técnica que seus equipamentos exigem.
              </p>

              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-4 text-gray-700 font-medium">
                  <div className="p-1 bg-green-100 rounded-full">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                  </div>
                  Orçamento transparente.
                </li>
                <li className="flex items-center gap-4 text-gray-700 font-medium">
                  <div className="p-1 bg-green-100 rounded-full">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                  </div>
                  Limpeza e organização durante o serviço.
                </li>
                <li className="flex items-center gap-4 text-gray-700 font-medium">
                  <div className="p-1 bg-green-100 rounded-full">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                  </div>
                  Ferramentas profissionais de alta precisão.
                </li>
              </ul>

              <a
                href="https://wa.me/5583991225011"
                className="text-blue-600 font-bold hover:text-blue-800 hover:underline inline-flex items-center gap-2 text-lg transition-colors"
              >
                Conheça mais sobre nós <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DEPOIMENTOS --- */}
      <section
        id="depoimentos"
        className="py-24 bg-slate-900 text-white relative overflow-hidden"
      >
        {/* Elemento decorativo de fundo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500 rounded-full blur-[128px]"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2">
              Prova Social
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              O que dizem nossos clientes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depo, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-amber-500/50 transition-colors"
              >
                {/* Estrelas */}
                <div className="flex gap-1 mb-6">
                  {[...Array(depo.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/10 transform -scale-x-100" />
                  <p className="text-gray-300 italic mb-6 pl-4 relative z-10">
                    {depo.texto}
                  </p>
                </div>

                {/* Autor */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-white text-lg">
                    {depo.nome.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {depo.nome}
                    </h4>
                    <span className="text-xs text-gray-400">{depo.bairro}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Faça parte da nossa lista de clientes satisfeitos.
            </p>
            <a
              href="https://wa.me/5583991225011"
              className="inline-flex items-center gap-2 text-white border border-white/20 hover:bg-white/10 px-6 py-2 rounded-full transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Estamos disponíveis agora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
