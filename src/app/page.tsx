import { ArrowUpRight, BookOpen, Brain, Clock, Plus } from "lucide-react";

export default function Home() {
  const posts = [
    {
      title: "Optimización Metabólica: El rol de la Berberina en la Longevidad",
      excerpt: "Nuevos estudios sugieren que la activación de la vía AMPK por la berberina puede rivalizar con fármacos tradicionales...",
      author: "Dra. Referencia",
      category: "Longevidad",
      date: "27 Abr, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Protocolo Nootrópico para Alta Performance Cognitiva",
      excerpt: "Cómo la sinergia entre precursores de colina y adaptógenos modula el enfoque sin aumentar el cortisol...",
      author: "Dr. Maestro",
      category: "Neurociencia",
      date: "25 Abr, 2026",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Elite Featured Article */}
      <section className="relative w-full h-[85vh] flex items-center bg-botica-navy overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579154235602-3c2c2993d162?auto=format&fit=crop&q=90&w=2000" 
            alt="Advanced Laboratory" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          {/* Scientific Overlay Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-botica-navy via-botica-navy/40 to-transparent"></div>
          <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-botica-gold/10 border border-botica-gold/20 backdrop-blur-md rounded-full">
              <span className="w-2 h-2 bg-botica-gold rounded-full animate-pulse"></span>
              <span className="text-botica-gold text-[10px] font-bold uppercase tracking-[0.3em]">Lectura de Portada</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter max-w-4xl">
              La Nueva Era de la <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-botica-gold via-white to-white/70">Longevidad</span>
            </h2>
            
            <p className="text-slate-300 text-xl max-w-xl leading-relaxed font-light">
              Desde la medicina de precisión hasta los agentes de IA: cómo Paraguay está liderando el futuro del biohacking ético.
            </p>
            
            <div className="flex items-center gap-8 pt-6">
              <button className="px-10 py-5 bg-white text-botica-navy font-bold rounded-full hover:bg-botica-gold hover:-translate-y-1 transition-all flex items-center gap-3 group shadow-2xl shadow-black/20">
                Explorar Artículo <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <div className="hidden md:flex flex-col border-l border-white/20 pl-8">
                <span className="text-botica-gold text-xs font-bold uppercase tracking-widest">Tiempo de Lectura</span>
                <span className="text-white text-lg font-serif italic">15 minutos intensos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Articles Feed */}
        <div className="lg:col-span-8 space-y-20">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-botica-gold mb-10 border-b border-botica-gold/20 pb-4 flex items-center gap-3">
              <BookOpen size={16} /> Últimas Publicaciones
            </h3>
            
            <div className="space-y-16">
              {posts.map((post, i) => (
                <article key={i} className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 overflow-hidden rounded-2xl aspect-[4/3]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-botica-gold">
                      <span>{post.category}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-400 flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold group-hover:text-botica-navy transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-slate-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                      <span className="text-xs font-bold">{post.author}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Sofia & More */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Sofia Insight Card */}
          <div className="bg-botica-navy rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-botica-gold/20 transition-all"></div>
            <Brain className="text-botica-gold mb-6" size={32} />
            <h4 className="text-xl font-serif font-bold mb-4">Sofia Insight</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
              "He detectado un aumento del 40% en búsquedas sobre péptidos de recuperación. Pronto publicaremos un especial técnico sobre BPC-157."
            </p>
            <button className="w-full py-3 border border-white/20 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-botica-navy transition-all">
              Hablar con Sofia
            </button>
          </div>

          {/* Categories / Specialists */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 border-b pb-4">Especialidades</h4>
            <div className="space-y-4">
              {['Endocrinología', 'Biohacking', 'Nutrición', 'Longevidad'].map((cat) => (
                <div key={cat} className="flex justify-between items-center group cursor-pointer">
                  <span className="text-sm font-medium group-hover:text-botica-gold transition-colors">{cat}</span>
                  <Plus size={14} className="text-slate-300 group-hover:text-botica-gold" />
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>

      {/* Newsletter Section */}
      <section className="bg-white border-y border-slate-100 py-24">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Ciencia al Minuto</h2>
          <p className="text-slate-500">Reciba los protocolos más avanzados y las últimas investigaciones directamente en su correo.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="su@email.com" 
              className="flex-grow px-6 py-4 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:border-botica-gold transition-all"
            />
            <button className="px-10 py-4 bg-botica-navy text-white font-bold rounded-full hover:bg-botica-gold hover:text-botica-navy transition-all">
              Unirse
            </button>
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">Respetamos su privacidad. Contenido exclusivo para profesionales y entusiastas de la salud.</p>
        </div>
      </section>
    </main>
  );
}