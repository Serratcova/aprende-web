export default function Mapa() {
  return (
    <div className="w-full h-full min-h-[300px] rounded-xl overflow-hidden border border-slate-200 shadow-sm relative z-0">
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
  );
}