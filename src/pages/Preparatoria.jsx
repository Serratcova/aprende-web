import { Link } from 'react-router-dom';
import { dataPreparatoria } from '../data/materias';

export default function Preparatoria() {
  const { titulo, lema, materias, beneficios } = dataPreparatoria;

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
    "Derecho": "⚖️",
    "Filosofía": "🤔",
    "Matemáticas": "🧮",
    "Español": "📖",
    "Tecnología": "💻",
    "Música": "🎵",
    "Pensamiento Lógico": "🧠",
    "Química": "⚗️"
  };

  // Banderas para los idiomas
  const idiomasFlags = { 
    "Inglés": "gb", 
    "Francés": "fr", 
    "Portugués": "br" 
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{titulo}</h1>
              <p className="text-xl text-purple-600 font-semibold mb-6">{lema}</p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Prepárate para la universidad, el trabajo y un mundo cada vez más global. Te brindamos las herramientas necesarias para que seas un profesionista exitoso y con visión internacional.
              </p>
              <Link to="/inscribete" className="bg-purple-600 text-white px-8 py-3.5 rounded-md hover:bg-purple-700 transition-colors shadow-lg font-semibold inline-block">
                Inscríbete a {titulo}
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-purple-100 rounded-full opacity-50"></div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <img src="/galeria3.jpg" alt={`Alumnos en ${titulo}`} className="w-full h-full object-cover" />
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
                    {index === 0 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>}
                    {index === 1 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>}
                    {index === 2 && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
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
            <p className="text-slate-500 text-lg">Un plan de estudios de alto nivel para tu futuro profesional.</p>
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