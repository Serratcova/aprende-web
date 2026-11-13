import { Link } from 'react-router-dom';
import Mapa from '../components/Mapa';

export default function Home() {
  const idiomasHome = [
    { nombre: "Inglés", code: "gb" },
    { nombre: "Francés", code: "fr" },
    { nombre: "Italiano", code: "it" },
    { nombre: "Alemán", code: "de" },
    { nombre: "Portugués", code: "br" },
    { nombre: "Rumano", code: "ro" }
  ];

  return (
    <main>
      {/* Hero Section con Video */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
        {/* Video de fondo */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video-home.mp4" type="video/mp4" />
        </video>
        
        {/* Capa para el video */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90"></div>

        {/* Contenido del Hero */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-sm md:text-base font-bold text-orange-400 tracking-widest uppercase mb-4 drop-shadow-md">
            Centro de Ciencias e Idiomas
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Bienvenido a <br />
            <span className="text-white">APRENDE</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow">
            Un espacio para descubrir, comprender y avanzar. Encuentra tu camino en las ciencias y los idiomas.
          </p>
          <button 
            onClick={() => document.getElementById('niveles').scrollIntoView({ behavior: 'smooth' })} 
            className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors shadow-xl font-bold text-lg inline-block cursor-pointer"
          >
            Conoce nuestros niveles
          </button>
        </div>
      </section>

      {/* Sección de Niveles */}
      <section id="niveles" className="bg-white py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Nuestros Niveles Educativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Primaria */}
            <Link to="/primaria" className="relative overflow-hidden bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-blue-300 transition-all text-center group flex flex-col items-center">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 w-24 h-24 bg-white shadow-sm text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">Primaria</h3>
              <p className="relative z-10 text-slate-600 text-sm">Bases sólidas, valores y aprendizaje bilingüe desde pequeños.</p>
            </Link>

            {/* Secundaria */}
            <Link to="/secundaria" className="relative overflow-hidden bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-green-300 transition-all text-center group flex flex-col items-center">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-green-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 w-24 h-24 bg-white shadow-sm text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors">Secundaria</h3>
              <p className="relative z-10 text-slate-600 text-sm">Desarrollo del pensamiento crítico, idiomas y formación en valores.</p>
            </Link>

            {/* Preparatoria */}
            <Link to="/preparatoria" className="relative overflow-hidden bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-purple-300 transition-all text-center group flex flex-col items-center">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 w-24 h-24 bg-white shadow-sm text-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">Preparatoria</h3>
              <p className="relative z-10 text-slate-600 text-sm">Preparación de excelencia para la universidad y un futuro sin fronteras.</p>
            </Link>

          </div>
        </div>
      </section>

      {/* Sección de Asesorías */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cursos y Asesorías</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">No importa en qué escuela estudies, en APRENDE tenemos un lugar para ti.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Asesoría 1 */}
            <Link to="/asesorias" className="relative overflow-hidden bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group border-t-4 border-t-blue-500 flex flex-col h-full">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-50 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">Ciencias Exactas</h3>
                <p className="text-slate-600 text-sm mb-6">Refuerza Matemáticas, Química y Lógica con asesorías personalizadas para cualquier nivel.</p>
              </div>
              <span className="relative z-10 text-blue-600 font-bold text-sm">Ver más &rarr;</span>
            </Link>

            {/* Asesoría 2 */}
            <Link to="/asesorias" className="relative overflow-hidden bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group border-t-4 border-t-yellow-400 flex flex-col h-full">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-yellow-50 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-yellow-600 transition-colors">Lenguaje y Redacción</h3>
                <p className="text-slate-600 text-sm mb-6">Mejora tu ortografía, comprensión lectora y expresión escrita con nuestros expertos.</p>
              </div>
              <span className="relative z-10 text-yellow-600 font-bold text-sm">Ver más &rarr;</span>
            </Link>

            {/* Asesoría 3*/}
            <Link to="/asesorias" className="relative overflow-hidden bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group border-t-4 border-t-pink-500 flex flex-col h-full">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-pink-50 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors">Certificaciones</h3>
                <p className="text-slate-600 text-sm mb-6">Prepárate para exámenes oficiales como TOEFL, IELTS, TOEIC y Cambridge.</p>
              </div>
              <span className="relative z-10 text-pink-600 font-bold text-sm">Ver más &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Idiomas*/}
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Idiomas</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Aprende una nueva lengua y abre las puertas al mundo. ¡Clases abiertas para todas las edades!</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {idiomasHome.map((idioma, index) => (
              <Link 
                key={index} 
                to="/idiomas" 
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer group"
              >
                <img 
                  src={`https://flagcdn.com/w80/${idioma.code}.png`} 
                  alt={`Bandera de ${idioma.nombre}`}
                  className="w-16 h-10 object-cover rounded shadow-sm mb-4 group-hover:scale-110 transition-transform"
                />
                <span className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{idioma.nombre}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/idiomas" className="inline-block bg-slate-800 text-white px-8 py-3.5 rounded-md hover:bg-slate-900 transition-colors shadow-sm font-semibold">
              Conoce más sobre los Idiomas
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Ubicación */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Encuéntranos</h2>
          <p className="text-slate-600 mb-8 text-lg">Estamos en el corazón de Atlacomulco, listos para recibirte.</p>
          <div className="h-[400px] w-full max-w-4xl mx-auto shadow-lg rounded-2xl">
            <Mapa />
          </div>
        </div>
      </section>
    </main>
  );
}