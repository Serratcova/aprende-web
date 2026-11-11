import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Primaria from './pages/Primaria';
import Secundaria from './pages/Secundaria';
import Preparatoria from './pages/Preparatoria';
import PrepaSabatina from './pages/PrepaSabatina';
import Asesorias from './pages/Asesorias';
import Idiomas from './pages/Idiomas';
import Inscribete from './pages/Inscribete';

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
      </div>
      <Footer />
    </div>
  );
}

export default App;