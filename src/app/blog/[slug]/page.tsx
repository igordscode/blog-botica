import { ArrowLeft, Share2, Bookmark, Quote, Brain, Microscope, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="pt-16 pb-12 border-b border-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-botica-gold mb-10 hover:text-botica-navy transition-colors">
            <ArrowLeft size={14} /> Volver a la revista
          </Link>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-botica-navy">
              <span className="bg-botica-cream px-2 py-1 rounded">Longevidad</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-400">Publicado el 27 de Abril, 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Optimización Metabólica: El rol de la Berberina en la Longevidad Celular
            </h1>
            
            <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
              "Cómo la modulación de la vía AMPK está transformando nuestra comprensión del envejecimiento biológico."
            </p>
            
            <div className="flex items-center justify-between pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-botica-gold/20">
                  <span className="text-botica-navy font-serif font-bold">DR</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold">Dra. Referencia Científica</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Especialista en Medicina Funcional</p>
                </div>
              </div>
              <div className="flex gap-4 text-slate-400">
                <Share2 size={18} className="cursor-pointer hover:text-botica-navy" />
                <Bookmark size={18} className="cursor-pointer hover:text-botica-navy" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Sidebar Left - Quick Actions */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-32 space-y-8 text-slate-300">
             {/* Sticky side actions could go here */}
          </div>
        </aside>

        {/* Article Text Content */}
        <main className="lg:col-span-7 prose prose-slate prose-lg max-w-none">
          <div className="text-slate-700 leading-extra-relaxed space-y-8 font-light text-lg">
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-botica-navy first-letter:mr-3 first-letter:float-left">
              La berberina, un alcaloide isoquinolínico extraído de diversas plantas de la medicina tradicional, ha emergido en la última década como uno de los compuestos más prometedores en el arsenal de la medicina de longevidad. Su capacidad para mimetizar los efectos de la restricción calórica a nivel molecular la posiciona como una intervención clave para la salud metabólica.
            </p>

            <h2 className="text-3xl font-serif font-bold text-botica-navy pt-8">El Mecanismo: Activación de AMPK</h2>
            <p>
              El principal mecanismo de acción de la berberina es la activación de la proteína quinasa activada por adenosina monofosfato (AMPK). Esta enzima es a menudo llamada el "interruptor metabólico maestro" del cuerpo, ya que regula el equilibrio energético celular.
            </p>

            <div className="bg-botica-cream p-10 rounded-[2rem] border-l-4 border-botica-gold my-12">
              <Quote className="text-botica-gold mb-4" size={32} />
              <p className="text-xl font-serif italic text-botica-navy leading-relaxed">
                "La activación de AMPK no solo mejora la sensibilidad a la insulina, sino que también promueve la autofagia, el proceso de limpieza celular esencial para prevenir la acumulación de proteínas dañadas."
              </p>
            </div>

            <p>
              A diferencia de las intervenciones farmacológicas convencionales, la berberina modula múltiples vías de señalización de manera sinérgica, reduciendo la inflamación crónica de bajo grado y mejorando la biogénesis mitocondrial.
            </p>

            <h3 className="text-2xl font-serif font-bold text-botica-navy pt-6 flex items-center gap-3">
              <Microscope size={24} className="text-botica-gold" /> Evidencia Clínica
            </h3>
            <p>
              Meta-análisis recientes han demostrado que la suplementación con berberina de alta biodisponibilidad es tan efectiva como la metformina en la regulación de la glucosa postprandial, con el beneficio adicional de mejorar el perfil lipídico.
            </p>
          </div>
        </main>

        {/* Sidebar Right - Sofia Deep Dive & CTA */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="bg-botica-navy rounded-[2.5rem] p-8 text-white sticky top-32 shadow-2xl shadow-botica-navy/20 overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="text-botica-gold" size={28} />
                <h4 className="font-serif font-bold text-xl">Sofia Deep Dive</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 italic">
                "Dato relevante: La absorción de la berberina pura es inferior al 5%. En Botica Guaraní, utilizamos una matriz de fitosomas para aumentar la biodisponibilidad hasta 10 veces."
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between group-hover:border-botica-gold transition-colors">
                   <div className="text-xs">
                     <p className="text-botica-gold font-bold uppercase tracking-widest mb-1">Activo Sugerido</p>
                     <p className="font-bold">Berberina Phytosome</p>
                   </div>
                   <ExternalLink size={16} className="text-slate-500" />
                </div>
                <button className="w-full py-4 bg-botica-gold text-botica-navy font-bold rounded-2xl hover:scale-105 transition-transform text-sm">
                  Consultar Protocolo Completo
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          </div>
        </aside>

      </div>
    </article>
  );
}