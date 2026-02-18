"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Importante para tornar a logo clicável
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" }, // Corrigido para rota raiz
    { name: "Serviços", href: "#servicos" },
    { name: "Quem Somos", href: "#quem-somos" },
    // Removi Depoimentos se ainda não tiver a seção criada, se tiver, mantenha.
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO - LIMPA (Apenas a Imagem) */}
        <div className="flex-shrink-0">
          <Link href="/" className="block relative">
            <Image
              src="/logo-trindade.jpg"
              alt="Trindade Serviços"
              width={75} // Levemente maior para compensar a falta de texto
              height={75}
              className="rounded-full border-2 border-yellow-500/50 shadow-md hover:border-yellow-500 transition-colors"
            />
          </Link>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:text-green-400 transition-colors uppercase tracking-wide drop-shadow-md"
            >
              {link.name}
            </Link>
          ))}

          {/* Botão de Telefone */}
          <a
            href="https://wa.me/5583991225011"
            className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full transition-transform hover:scale-105 shadow-lg"
          >
            <Phone size={18} />
            (83) 99122-5011
          </a>
        </div>

        {/* MENU MOBILE (Botão Hamburguer) */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* GAVETA MOBILE (Menu Celular) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-slate-200 py-2 border-b border-slate-800 hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/5583991225011"
            className="mt-4 w-full flex justify-center items-center gap-2 px-5 py-3 bg-green-600 text-white font-bold rounded-lg"
          >
            <Phone size={18} /> Agendar Agora
          </a>
        </div>
      )}
    </nav>
  );
}
