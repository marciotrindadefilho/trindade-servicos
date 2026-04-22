import {
  Wrench,
  Snowflake,
  Lock,
  Tv,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Star,
  Quote,
  Layers,
  Brush,
  Fan,
  Cpu,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const servicos = [
    {
      title: "Ar Condicionado",
      desc: "Instalação, manutenção e higienização técnica para garantir seu conforto no calor de JP.",
      icon: Snowflake,
    },
    {
      title: "Envelopamento",
      desc: "Renove geladeiras, lava-louças, fogões e armários com acabamento premium e moderno.",
      icon: Layers,
    },
    {
      title: "Pintura de Interiores",
      desc: "Pintura detalhista com foco em acabamento impecável, organização e limpeza absoluta.",
      icon: Brush,
    },
    {
      title: "Ventiladores de Teto",
      desc: "Instalação técnica, balanceamento e manutenção para total silêncio e segurança.",
      icon: Fan,
    },
    {
      title: "Painéis de TV & LED",
      desc: "Montagem de painéis com instalação de fitas LED embutidas para um visual cinematográfico.",
      icon: Tv,
    },
    {
      title: "Automação & IA",
      desc: "Transforme sua casa com Alexa: controle luzes, ar e eletrônicos por comandos de voz.",
      icon: Cpu,
    },
    {
      title: "Fechaduras Digitais",
      desc: "Instalação de modelos eletrônicos e biometria para a máxima segurança da sua família.",
      icon: Lock,
    },
    {
      title: "Pequenos Reparos",
      desc: "O 'Marido de Aluguel' para resolver vazamentos, elétrica e pendências do dia a dia.",
      icon: Wrench,
    },
  ];

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
    {
      nome: "Dra. Gianna Espinola",
      bairro: "Jd. Oceania - JP",
      texto:
        "Meu Fogão Brastemp Gourmand inox, foi condenado por outros técnicos, mas o Trindade conseguiu recuperar. Ficou como novo, super recomendo!",
      stars: 5,
    },
    {
      nome: "Dra. Maria Pia",
      bairro: "Boirro dos estados - JP",
      texto:
        "Minha Geladeira Brastemp Ative e minha lava louças eletrolux, foram emvelopadas e ficaram incríveis, o acabamento é de primeira, super recomendo para quem quer renovar os eletrodomésticos.",
      stars: 5,
    },
    {
      nome: "Sr. Weverton",
      bairro: "Bessa - JP",
      texto:
        "Instalei tres ventiladores de teto ventex e o serviço foi impecável, tudo ficou super silencioso e seguro. Recomendo para quem quer um serviço técnico de qualidade.",
      stars: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/serviço-instalação.png"
            alt="Fundo Trindade Serviços"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

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
            Especialista em Envelopamento, Automação e Soluções Residenciais de
            Alto Padrão.
          </p>

          <a
            href="https://wa.me/5583991225011"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/40 transition-all transform hover:-translate-y-1 mb-8"
          >
            Orçamento via WhatsApp{" "}
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
              Soluções Completas para seu Lar
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
        className="py-24 bg-white border-t border-gray-100"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-md h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                <Image
                  src="/trindade-hero.png"
                  alt="Márcio Trindade"
                  fill
                  className="object-contain object-bottom hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm block mb-4">
                Profissionalismo & Confiança
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 leading-tight drop-shadow-[0_1.2px_1.2px_rgba(245,158,11,0.8)]">
                Trindade Serviços <br /> Residenciais JP
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Muito mais que um serviço técnico, levamos{" "}
                <strong className="text-blue-950">segurança e respeito</strong>{" "}
                para dentro do seu lar. Atendemos com pontualidade e capricho os
                bairros do Bessa, Manaíra, Altiplano e toda João Pessoa.
              </p>

              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-4 text-gray-700 font-medium">
                  <div className="p-1 bg-green-100 rounded-full">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                  </div>
                  Atendimento Didático e Transparente.
                </li>
                <li className="flex items-center gap-4 text-gray-700 font-medium">
                  <div className="p-1 bg-green-100 rounded-full">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                  </div>
                  Limpeza total após a execução.
                </li>
                <li className="flex items-center gap-4 text-gray-700 font-medium">
                  <div className="p-1 bg-green-100 rounded-full">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                  </div>
                  Uso de ferramentas de alta performance.
                </li>
              </ul>

              <a
                href="https://wa.me/5583991225011"
                className="text-blue-600 font-bold hover:text-blue-800 hover:underline inline-flex items-center gap-2 text-lg transition-colors"
              >
                Falar diretamente com o Trindade <ArrowRight size={20} />
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
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500 rounded-full blur-[128px]"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2">
              Quem já contratou
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Sua casa em boas mãos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depo, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-amber-500/50 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(depo.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/10 transform -scale-x-100" />
                  <p className="text-gray-300 italic mb-6 pl-4 relative z-10">
                    {depo.texto}
                  </p>
                </div>
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
        </div>
      </section>
    </main>
  );
}
