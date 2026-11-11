import { useState } from 'react';
import Mapa from '../components/Mapa';

export default function Inscribete() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const telefono = "527121666348"; 
    const texto = `Hola, mi nombre es ${formData.nombre}. Mi correo es ${formData.correo}. Mensaje: ${formData.mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Inscripciones y Contacto</h1>
        <p className="text-lg text-slate-600">Déjanos tus datos y te atenderemos por WhatsApp, o visítanos en nuestras instalaciones.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        {/* Formulario */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-slate-700 font-medium mb-2">Nombre completo</label>
              <input type="text" name="nombre" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-slate-700 font-medium mb-2">Correo electrónico</label>
              <input type="email" name="correo" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="tu@correo.com" onChange={handleChange} />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Mensaje o duda</label>
              <textarea name="mensaje" required rows="3" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="¿Qué te gustaría estudiar?" onChange={handleChange}></textarea>
            </div>
            
            <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition-colors flex justify-center items-center gap-2">
              <span>Enviar por WhatsApp</span>
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <span>🔒</span>
              <p>Tus datos están protegidos. Sitio seguro (SSL).</p>
            </div>

            {/* Aviso de Privacidad */}
            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="text-xs text-slate-500 text-center mb-2">
                Al enviar este formulario, aceptas nuestro Aviso de Privacidad.
              </p>
              
              <details className="text-xs text-slate-500 cursor-pointer">
                <summary className="text-center hover:text-blue-600 font-medium transition-colors">
                  Leer Aviso de Privacidad
                </summary>
                <div className="mt-3 p-4 bg-slate-50 rounded-md text-justify border border-slate-200">
                  <p className="mb-2">
                    <strong>Aviso de Privacidad Simplificado</strong>
                  </p>
                  <p className="mb-2">
                    Centro de Ciencias e Idiomas APRENDE, con domicilio en Calle Lic. Isidro Fabela Alfaro #1, Atlacomulco Centro, C.P. 50454, es el responsable del tratamiento de sus datos personales.
                  </p>
                  <p className="mb-2">
                    Los datos que recabamos (nombre, correo y mensaje) serán utilizados únicamente para contactarle, brindarle información sobre nuestros servicios educativos y dar seguimiento a su solicitud.
                  </p>
                  <p>
                    Sus datos no serán transferidos a terceros y no se almacenan en bases de datos de este sitio web, ya que la comunicación se redirige directamente a nuestro canal oficial de WhatsApp. Para ejercer sus derechos ARCO o conocer el aviso de privacidad integral, puede solicitarlo al correo: <strong>aprende717@gmail.com</strong>.
                  </p>
                </div>
              </details>
            </div>
          </form>
        </div>

        {/* Mapa y Dirección */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Visítanos</h2>
          <p className="text-slate-600 mb-4 flex items-start gap-2">
            <span className="text-xl">📍</span> Esquina con Plaza Constitución Jardín Principal, Calle Lic. Isidro Fabela Alfaro 1-Norte, 50454 Atlacomulco de Fabela, Méx.
          </p>
          <div className="flex-grow">
            <Mapa />
          </div>
        </div>
      </div>
    </div>
  );
}