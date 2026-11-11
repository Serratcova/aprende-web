export default function PrepaSabatina() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Prepa Sabatina</h1>
        <p className="text-xl text-blue-600 font-semibold mb-6">Estudia los sábados sin dejar de trabajar</p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          ¿Trabajas entre semana y quieres continuar estudiando? En APRENDE tenemos la opción perfecta para ti. Obtén tu certificado de preparatoria con horarios flexibles diseñados para adultos que buscan superarse.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-4">¿Qué ofrecemos?</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2">✅ Clases presenciales los sábados.</li>
            <li className="flex items-center gap-2">✅ Formación académica de excelencia.</li>
            <li className="flex items-center gap-2">✅ Enseñanza de idiomas incluida.</li>
            <li className="flex items-center gap-2">✅ Preparación para el mundo laboral.</li>
          </ul>
        </div>
        <div className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4">¡Es tu momento!</h3>
          <p className="mb-6">No dejes pasar la oportunidad de terminar tu preparatoria y abrir nuevas puertas laborales.</p>
          <a href="/inscribete" className="bg-white text-blue-600 px-6 py-2 rounded-md font-bold hover:bg-slate-100 transition-colors">
            Inscríbete aquí
          </a>
        </div>
      </div>
    </div>
  );
}