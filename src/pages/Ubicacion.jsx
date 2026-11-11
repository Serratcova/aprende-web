export default function Ubicacion() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Visítanos</h1>
        <p className="text-lg text-slate-600">Estamos ubicados en el corazón de Atlacomulco Centro.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Dirección</h2>
          <p className="text-slate-600 mb-6 flex items-start gap-2">
            <span>📍</span> Esquina con Plaza Constitución Jardín Principal, Calle Lic. Isidro Fabela Alfaro 1-Norte, 50454 Atlacomulco de Fabela, Méx.
          </p>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Horarios de atención</h2>
          <p className="text-slate-600 mb-6">Lunes a Viernes: 9:00 am - 8:00 pm (Según Google Maps)</p>
          
          <a 
            href="https://maps.google.com/?q=Aprende+Centro+de+Ciencias+e+Idiomas+Atlacomulco" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Abrir en Google Maps
          </a>
        </div>
        
        {/* Mapa */}
        <div className="h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shadow-inner">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.984117868134!2d-99.87688732610388!3d19.798270728904033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d259d5645d9a5f%3A0x24fa3859c4b2717f!2sAprende%20Centro%20de%20Ciencias%20e%20Idiomas!5e0!3m2!1ses-419!2smx!4v1793301059709!5m2!1ses-419!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Mapa de APRENDE"
          ></iframe>
        </div>
      </div>
    </div>
  );
}