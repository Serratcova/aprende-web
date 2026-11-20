import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// --- IMPORTACIONES DINÁMICAS (Lazy Loading) ---
const Home = lazy(() => import('./pages/Home'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Primaria = lazy(() => import('./pages/Primaria'));
const Secundaria = lazy(() => import('./pages/Secundaria'));
const Preparatoria = lazy(() => import('./pages/Preparatoria'));
const PrepaSabatina = lazy(() => import('./pages/PrepaSabatina'));
const Asesorias = lazy(() => import('./pages/Asesorias'));
const Idiomas = lazy(() => import('./pages/Idiomas'));
const Inscribete = lazy(() => import('./pages/Inscribete'));

// --- ScrollToTop ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Hace scroll a la parte superior
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <ScrollToTop /> 
      
      <Header />
      <div className="flex-grow">
        {/* Envolvemos las rutas en suspense para mostrar un mensaje mientras cargan */}
        <Suspense fallback={<div className="text-center py-20 text-xl font-bold text-slate-600">Cargando página...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/primaria" element={<Primaria />} />
            <Route path="/secundaria" element={<Secundaria />} />
            <Route path="/preparatoria" element={<Preparatoria />} />
            <Route path="/prepa-sabatina" element={<PrepaSabatina />} />
            <Route path="/asesorias" element={<Asesorias />} />
            <Route path="/idiomas" element={<Idiomas />} />
            <Route path="/inscribete" element={<Inscribete />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;