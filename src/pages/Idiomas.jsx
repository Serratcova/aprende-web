import { Link } from 'react-router-dom';

export default function Idiomas() {
  const idiomas = [
    { nombre: "Inglés", code: "gb", color: "bg-blue-50", textColor: "text-blue-700", paises: "EE.UU., Reino Unido, Canadá, Australia", ventajas: "El idioma universal de los negocios, la tecnología y el turismo.", palabras: ["Hello (Hola)", "Thank you (Gracias)", "Goodbye (Adiós)"] },
    { nombre: "Francés", code: "fr", color: "bg-indigo-50", textColor: "text-indigo-700", paises: "Francia, Canadá, Bélgica, Suiza", ventajas: "La lengua de la cultura, la gastronomía y la diplomacia.", palabras: ["Bonjour (Buenos días)", "Merci (Gracias)", "Au revoir (Adiós)"] },
    { nombre: "Italiano", code: "it", color: "bg-green-50", textColor: "text-green-700", paises: "Italia, Suiza, San Marino", ventajas: "Perfecto para amantes del arte, la música y el diseño.", palabras: ["Ciao (Hola/Adiós)", "Grazie (Gracias)", "Per favore (Por favor)"] },
    { nombre: "Alemán", code: "de", color: "bg-yellow-50", textColor: "text-yellow-700", paises: "Alemania, Austria, Suiza", ventajas: "Ideal para ingeniería, ciencias y oportunidades de negocio.", palabras: ["Hallo (Hola)", "Danke (Gracias)", "Tschüss (Adiós)"] },
    { nombre: "Portugués", code: "br", color: "bg-emerald-50", textColor: "text-emerald-700", paises: "Brasil, Portugal, Angola, Mozambique", ventajas: "El idioma de los mercados emergentes y la cultura vibrante.", palabras: ["Olá (Hola)", "Obrigado/a (Gracias)", "Tchau (Adiós)"] },
    { nombre: "Rumano", code: "ro", color: "bg-rose-50", textColor: "text-rose-700", paises: "Rumania, Moldavia", ventajas: "Una joya oculta con raíces latinas (¡fácil de aprender!) y cultura única.", palabras: ["Salut (Hola)", "Mulțumesc (Gracias)", "La revedere (Adiós)"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Habla con el Mundo</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
          En APRENDE incluimos la enseñanza de idiomas como parte de la formación en Primaria, Secundaria y Preparatoria. Sin embargo, <strong>si eres público en general</strong> y solo quieres tomar clases de un idioma específico, ¡también tenemos un lugar para ti!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {idiomas.map((idioma, index) => (
          <div key={index} className={`${idioma.color} p-8 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full`}>
            
            {/* Encabezado de la tarjeta */}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={`https://flagcdn.com/w80/${idioma.code}.png`} 
                alt={`Bandera de ${idioma.nombre}`}
                className="w-14 h-10 object-cover rounded shadow-sm border border-slate-200"
              />
              <h3 className={`text-2xl font-bold ${idioma.textColor}`}>{idioma.nombre}</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-sm font-bold text-slate-800 mb-1">Países para viajar:</p>
              <p className="text-sm text-slate-600">{idioma.paises}</p>
            </div>
            
            <div className="mb-4 flex-grow">
              <p className="text-sm font-bold text-slate-800 mb-1">¿Por qué aprenderlo?</p>
              <p className="text-sm text-slate-600">{idioma.ventajas}</p>
            </div>

            <div className="bg-white/60 p-4 rounded-lg mb-6">
              <p className="text-sm font-bold text-slate-800 mb-2">Palabras populares:</p>
              <ul className="text-sm text-slate-700 space-y-1">
                {idioma.palabras.map((palabra, i) => (
                  <li key={i}>• {palabra}</li>
                ))}
              </ul>
            </div>

            <Link to="/inscribete" className={`mt-auto block text-center w-full bg-white ${idioma.textColor} font-bold py-2 rounded-md hover:bg-slate-50 transition-colors shadow-sm`}>
              Más información
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}