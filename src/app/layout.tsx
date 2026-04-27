import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ShieldCheck, Search, Menu, MessageSquare } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Botica Blog | Ciencia & Longevidad",
  description: "La revista digital de referencia para profesionales de la salud y pacientes de alto rendimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-botica-cream text-slate-900`}>
        {/* Top Professional Bar */}
        <div className="bg-botica-navy text-white/80 text-[10px] py-1.5 px-4 text-center font-bold tracking-[0.3em] uppercase">
          Divulgación Científica Farmacéutica • Botica Guaraní
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-botica-navy/10">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Menu className="text-botica-navy cursor-pointer md:hidden" />
              <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                <a href="#" className="hover:text-botica-gold">Longevidad</a>
                <a href="#" className="hover:text-botica-gold">Performance</a>
                <a href="#" className="hover:text-botica-gold">Biohacking</a>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-serif font-bold text-botica-navy leading-none">Botica Blog</h1>
              <span className="text-[9px] uppercase tracking-[0.4em] text-botica-gold font-bold">Insights Científicos</span>
            </div>

            <div className="flex items-center gap-4">
              <Search size={20} className="text-slate-400" />
              <button className="hidden md:block px-5 py-2 bg-botica-navy text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-botica-gold hover:text-botica-navy transition-all">
                Suscribirse
              </button>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-botica-navy text-white py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xl font-serif font-bold mb-6 text-botica-gold">Botica Guaraní</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Liderando la vanguardia en medicina de precisión y formulaciones personalizadas en Paraguay desde la ciencia de datos y la ética farmacéutica.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest mb-6">Categorías</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Endocrinología</a></li>
                <li><a href="#" className="hover:text-white">Nutrología Deportiva</a></li>
                <li><a href="#" className="hover:text-white">Neurociencia</a></li>
                <li><a href="#" className="hover:text-white">Protocolos de Salud</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest mb-6">Conecte con Sofia</h3>
              <p className="text-sm text-slate-400 mb-6 italic">
                "Nuestra IA analiza miles de estudios diarios para traerle lo más relevante."
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-botica-gold hover:text-botica-navy transition-all">
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-[10px] text-center text-slate-500 uppercase tracking-widest">
            © 2026 Botica Guaraní • Dirección Técnica: Q.F. Regente
          </div>
        </footer>
      </body>
    </html>
  );
}