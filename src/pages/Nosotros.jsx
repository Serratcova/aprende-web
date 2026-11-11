export default function Nosotros() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Encabezado */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Nuestra Esencia
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Conoce la historia, el propósito y la visión que nos impulsan a formar a las nuevas generaciones.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Nuestra Historia */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nuestra Historia</h2>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
              <p>
                La historia de <strong>Centro de Ciencias e Idiomas APRENDE</strong> nace del esfuerzo y la visión del <strong>Lic. Freddy Estrada Jacobo</strong>. Antes de contar con un espacio propio, el proyecto inició como un esfuerzo itinerante: las clases de idiomas se impartían en Plaza Miranda y en diversos municipios del norte del Estado de México, llevando el conocimiento a donde se necesitara, sin una sede establecida.
              </p>
              <p>
                El esfuerzo dio frutos y, en el año <strong>2013</strong>, APRENDE abre oficialmente sus puertas como una escuela formal de idiomas, consolidando un espacio dedicado a la excelencia lingüística. Con una base sólida y en constante evolución, la institución dio un paso aún más grande en el año <strong>2023</strong>, expandiendo su oferta educativa para convertirse en una institución integral, incorporando los niveles de <strong>Primaria, Secundaria y Preparatoria</strong> a su modelo de enseñanza.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Misión */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="bg-blue-600 p-8 flex justify-center items-center h-48 relative overflow-hidden">
                {/* Forma geométrica*/}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500 rounded-full opacity-50"></div>
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-700 rounded-full opacity-30"></div>
                
                {/* Ícono SVG de Objetivo */}
                <svg className="w-20 h-20 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">Misión</h2>
                <p className="text-slate-600 leading-relaxed text-justify">
                  Formar personas íntegras, responsables, libres y comprometidas con su entorno, a través de una educación de excelencia que impulse el conocimiento, el dominio de idiomas y el desarrollo humano; brindando un servicio educativo de calidad, eficiente y con responsabilidad social, en un ambiente de bienestar que favorezca el crecimiento académico, personal y social de nuestros estudiantes, impulsándolos a desarrollar plenamente sus capacidades y a contribuir de manera positiva a su entorno.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="bg-slate-800 p-8 flex justify-center items-center h-48 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-slate-700 rounded-full opacity-50"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-slate-600 rounded-full opacity-30"></div>
                
                {/* Ícono SVG de Visión */}
                <svg className="w-20 h-20 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">Visión</h2>
                <p className="text-slate-600 leading-relaxed text-justify">
                  Ser una institución educativa reconocida por su formación integral, excelencia académica y enseñanza de idiomas, que prepare estudiantes seguros de sí mismos, con pensamiento crítico, conciencia social y visión global. Aspiramos a que nuestros estudiantes desarrollen plenamente sus capacidades, talentos y valores, adquiriendo las competencias y herramientas necesarias para enfrentar con éxito los retos de un mundo dinámico e internacional, adaptarse a los cambios, tomar decisiones responsables y poner sus conocimientos y talentos al servicio de la sociedad.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Nuestros Valores */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 border-b-4 border-b-blue-500">
              <h3 className="font-bold text-slate-800 mb-2">Excelencia</h3>
              <p className="text-sm text-slate-500">Buscamos la mejora continua en cada clase.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 border-b-4 border-b-blue-500">
              <h3 className="font-bold text-slate-800 mb-2">Responsabilidad</h3>
              <p className="text-sm text-slate-500">Compromiso con el aprendizaje y la sociedad.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 border-b-4 border-b-blue-500">
              <h3 className="font-bold text-slate-800 mb-2">Visión Global</h3>
              <p className="text-sm text-slate-500">Preparamos alumnos para un mundo sin fronteras.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 border-b-4 border-b-blue-500">
              <h3 className="font-bold text-slate-800 mb-2">Integridad</h3>
              <p className="text-sm text-slate-500">Formamos personas íntegras y honestas.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}