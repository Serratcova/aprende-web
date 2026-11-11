import { Link } from 'react-router-dom';

export default function Asesorias() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Asesorías Académicas</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Refuerza tus conocimientos. Nuestras asesorías están abiertas para estudiantes de cualquier escuela (Primaria, Secundaria y Preparatoria) que necesiten apoyo extra en sus materias.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          
          {/* Tarjeta 1: Ciencias Exactas */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/3 bg-blue-50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-blue-100">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Ciencias Exactas</h2>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-slate-600 mb-6">
                ¿Se te complican los números? Te apoyamos a comprender desde las operaciones básicas hasta las fórmulas avanzadas.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Matemáticas</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Química</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Lógica</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Ciencias Naturales</span>
              </div>
              <Link to="/inscribete" className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 font-semibold transition-colors">
                Solicitar Asesoría
              </Link>
            </div>
          </div>

          {/* Tarjeta 2: Lectura y Redacción */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/3 bg-emerald-50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-emerald-100">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Lenguaje y Redacción</h2>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-slate-600 mb-6">
                Mejora tu ortografía, comprensión lectora y expresión escrita. Ideal para nivelar tu nivel académico y destacar en tus proyectos.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Español</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Taller de Lectura y Redacción</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Caligrafía</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Ortografía</span>
              </div>
              <Link to="/inscribete" className="inline-block bg-slate-800 text-white px-6 py-2.5 rounded-md hover:bg-slate-900 font-semibold transition-colors">
                Solicitar Asesoría
              </Link>
            </div>
          </div>

          {/* Tarjeta 3: Ciencias Sociales y Humanidades */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/3 bg-purple-50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-purple-100">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Humanidades</h2>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-slate-600 mb-6">
                Comprende el mundo desde una perspectiva crítica y social. Apoyo en materias teóricas para niveles de secundaria y preparatoria.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Historia</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Filosofía</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Derecho</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Lógica</span>
              </div>
              <Link to="/inscribete" className="inline-block bg-slate-800 text-white px-6 py-2.5 rounded-md hover:bg-slate-900 font-semibold transition-colors">
                Solicitar Asesoría
              </Link>
            </div>
          </div>

          {/* Tarjeta 4: Certificaciones de Inglés */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow relative">
            {/* Cinta de "Exclusivo" */}
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
              Preparación
            </div>
            
            <div className="md:w-1/3 bg-orange-50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-orange-100">
              <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                {/* Ícono SVG de Certificado */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Certificaciones de Inglés</h2>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-slate-600 mb-4">
                ¿Necesitas certificar tu nivel de inglés para la universidad, un empleo o para viajar? Te preparamos con asesorías enfocadas en las pruebas oficiales.
              </p>
              
              {/* Exámenes */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-md text-sm font-bold">TOEFL</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-md text-sm font-bold">IELTS</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-md text-sm font-bold">TOEIC</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-md text-sm font-bold">Cambridge</span>
              </div>

              {/* Aclaración importante */}
              <div className="bg-slate-50 border-l-4 border-slate-400 p-4 mb-6">
                <p className="text-sm text-slate-600">
                  <strong>Aclaración:</strong> En APRENDE brindamos la asesoría y preparación académica para el examen. La emisión del certificado oficial se realiza directamente con el organismo evaluador correspondiente.
                </p>
              </div>

              <Link to="/inscribete" className="inline-block bg-orange-500 text-white px-6 py-2.5 rounded-md hover:bg-orange-600 font-semibold transition-colors shadow-sm">
                Solicitar Asesoría
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}