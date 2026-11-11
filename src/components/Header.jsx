import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo APRENDE */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="Logo APRENDE" 
                className="h-16 md:h-20 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Menú Desktop */}
          <nav className="hidden md:flex space-x-6 items-center text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <Link to="/nosotros" className="hover:text-blue-600 transition-colors">Nosotros</Link>
            
            {/* Submenú */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center hover:text-blue-600 transition-colors">
                Oferta Educativa
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/primaria" className="block px-4 py-3 hover:bg-slate-50 hover:text-blue-600">Primaria</Link>
                <Link to="/secundaria" className="block px-4 py-3 hover:bg-slate-50 hover:text-blue-600">Secundaria</Link>
                <Link to="/preparatoria" className="block px-4 py-3 hover:bg-slate-50 hover:text-blue-600">Preparatoria</Link>
                <Link to="/prepa-sabatina" className="block px-4 py-3 hover:bg-slate-50 hover:text-blue-600">Prepa Sabatina</Link>
              </div>
            </div>

            <Link to="/asesorias" className="hover:text-blue-600 transition-colors">Asesorías</Link>
            <Link to="/idiomas" className="hover:text-blue-600 transition-colors">Idiomas</Link>
            
            <Link to="/inscribete" className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors shadow-sm font-semibold ml-4">
              Inscríbete
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menú para moviles */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Inicio</Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Nosotros</Link>
          
          <div className="px-3 py-2 text-sm font-semibold text-slate-400 uppercase tracking-wider mt-2">Oferta Educativa</div>
          <Link to="/primaria" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">- Primaria</Link>
          <Link to="/secundaria" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">- Secundaria</Link>
          <Link to="/preparatoria" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">- Preparatoria</Link>
          <Link to="/prepa-sabatina" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">- Prepa Sabatina</Link>

          <Link to="/asesorias" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Asesorías</Link>
          <Link to="/idiomas" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Idiomas</Link>
          
          <Link to="/inscribete" onClick={() => setIsOpen(false)} className="block px-3 py-3 mt-4 text-center rounded-md text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md">
            Inscríbete
          </Link>
        </div>
      </div>

    </header>
  );
}