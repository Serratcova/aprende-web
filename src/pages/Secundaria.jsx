import { Link } from 'react-router-dom';
import { dataSecundaria } from '../data/materias';

export default function Secundaria() {
  const { titulo, lema, materias, beneficios } = dataSecundaria;

  const coloresBeneficios = [
    { bg: "bg-orange-100", text: "text-orange-500", border: "border-orange-400" },
    { bg: "bg-green-100", text: "text-green-600", border: "border-green-500" },
    { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-500" }
  ];

  const coloresMaterias = [
    { bg: "bg-blue-50", text: "text-blue-600", bgSolid: "bg-blue-500", border: "hover:border-blue-400" },
    { bg: "bg-green-50", text: "text-green-600", bgSolid: "bg-green-500", border: "hover:border-green-400" },
    { bg: "bg-yellow-50", text: "text-yellow-600", bgSolid: "bg-yellow-500", border: "hover:border-yellow-400" },
    { bg: "bg-purple-50", text: "text-purple-600", bgSolid: "bg-purple-500", border: "hover:border-purple-400" },
    { bg: "bg-pink-50", text: "text-pink-600", bgSolid: "bg-pink-500", border: "hover:border-pink-400" },
    { bg: "bg-orange-50", text: "text-orange-600", bgSolid: "bg-orange-500", border: "hover:border-orange-400" },
    { bg: "bg-red-50", text: "text-red-600", bgSolid: "bg-red-500", border: "hover:border-red-400" },
    { bg: "bg-teal-50", text: "text-teal-600", bgSolid: "bg-teal-500", border: "hover:border-teal-400" }
  ];

  const iconosMaterias = {
    "Español": "📖", "Matemáticas": "🧮", "Historia": "🏛️", "Caligrafía": "✍️",
    "Ciencias": "🔬", "Derecho": "⚖️", "Filosofía": "🤔", "Química": "⚗️", 
    "Lógica": "🧠", "Taller de Lectura": "📚", "Tecnología": "💻", 
    "Cálculo": "📈", "Física": "🍎", "Biología": "🧬", "Literatura": "📜", 
    "Música": "🎵"
  };

  const idiomasFlags = {
    "Inglés": "gb", "Francés": "fr", "Portugués": "br", "Italiano": "it", "Alemán": "de", "Rumano": "ro"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{titulo}</h1>
              <p className="text-xl text-green-600 font-semibold mb-6">{lema}</p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En esta etapa fundamental para construir el mañana, preparamos a nuestros alumnos con excelencia académica, pensamiento crítico y una visión global para enfrentar nuevos retos.
              </p>
              <Link to="/inscribete" className="bg-green-600 text-white px-8 py-3.5 rounded-md hover:bg-green-700 transition-colors shadow-lg font-semibold inline-block">
                Inscríbete a {titulo}
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-green-100 rounded-full opacity-50"></div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <img src="/galeria2.jpg" alt={`Alumnos en ${titulo}`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">¿Por qué elegir nuestra {titulo}?</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {beneficios.map((beneficio, index) => {
              const color = coloresBeneficios[index % coloresBeneficios.length];
              return (
                <div key={index} className={`relative bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 border-t-8 ${color.border} text-center overflow-hidden group`}>
                  <div className={`absolute -right-8 -top-8 w-32 h-32 ${color.bg} rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className={`absolute -left-8 -bottom-8 w-24 h-24 ${color.bg} rounded-full opacity-40 group-hover:scale-150 transition-transform duration-500`}></div>
                  
                  <div className={`relative z-10 w-20 h-20 ${color.bg} ${color.text} rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:rotate-6 transition-transform`}>
                    {index === 0 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
                    {index === 1 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>}
                    {index === 2 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
                  </div>
                  
                  <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-3">{beneficio.titulo}</h3>
                  <p className="relative z-10 text-slate-600 leading-relaxed">{beneficio.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materias */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Materias de {titulo}</h2>
            <p className="text-slate-500 text-lg">Un plan de estudios completo para su desarrollo integral.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {materias.map((materia, index) => {
              const color = coloresMaterias[index % coloresMaterias.length];
              const flagCode = idiomasFlags[materia];

              return (
                <div 
                  key={index} 
                  className={`relative ${color.bg} p-6 rounded-2xl border-t border-l border-r border-transparent border-b-4 ${color.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-2 overflow-hidden`}
                >
                  <div className={`absolute -right-4 -top-4 w-16 h-16 ${color.bgSolid} rounded-full opacity-10 group-hover:scale-150 transition-transform`}></div>
                  <div className={`w-12 h-12 ${color.bgSolid} text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold shadow-md group-hover:scale-110 transition-transform relative z-10`}>
                    {index + 1}
                  </div>
                  <h3 className={`font-bold ${color.text} text-base mb-3 relative z-10`}>
                    {materia}
                  </h3>
                  <div className="relative z-10 mt-auto pt-2">
                    {flagCode ? (
                      <img src={`https://flagcdn.com/w80/${flagCode}.png`} alt={`Bandera`} className="w-12 h-8 object-cover rounded shadow-sm group-hover:scale-125 transition-transform" />
                    ) : (
                      <span className="text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all block">
                        {iconosMaterias[materia] || "🎓"}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}