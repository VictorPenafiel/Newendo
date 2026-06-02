import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const Apolo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mt-6 mb-12"
    >
      <SectionTitle title="Apolíneo" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-gray-100 pb-3">Arraigarse al mundo, desde el centro hacia abajo guiado por fuerzas solventes</h3>
        
        <blockquote className="text-right text-lg italic my-6 text-gray-700 border-r-4 border-primary pr-4 py-2">
          Atha yoga anusasanum<br/>
          Yogah chitta vritti nirodhah<br/>
          tada drashtuh svarupe avasthanam<br/>
          <footer className="text-sm mt-2 font-bold text-gray-500">— Patanjali, <cite className="font-normal italic">Yoga Sutra, 1-3</cite></footer>
        </blockquote>

        <div className="space-y-4 text-gray-800 leading-relaxed mt-8">
          <h4 className="text-xl font-bold text-primary mb-2">Serie Apolíneo: Una búsqueda del Sujeto</h4>
          <p>
            Indagaciones teóricas sobre las tecnologías del yo o antropotecnologías.
          </p> 
          <p>
            El ritmo del Ser: bitácora reflexiva sobre los ciclos de distensión y la tensión que se da entre las presencias y ausencias del ser y estar en el mundo.
          </p>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
            <h5 className="text-lg font-bold text-primary mb-3 cursor-pointer hover:underline inline-block transition-all" onClick={() => alert('Has hecho clic en el título del capítulo. Aquí podrías expandir el contenido del capítulo.')}>
              Capítulo 1: Rolfing Frenk
            </h5>
            <p className="mb-3">
              Buscar en el tiempo para descubrir la esencia de la tecnologia. Cientos de horas de grabación con un objetivo específico. <br/>
              Aplicación práctica de la tecnología del Rolfing aplicada por el terapeuta Samy Frenk.
            </p>
            <p className="mb-3">
              La manipulación terapéutica de los receptores mecánicos de la fascia, particularmente las terminaciones de Ruffini y los receptores intersticiales, pueden reducir la rigidez, señalizando la inhibición del sistema nervioso simpático.
              Hay fuertes vínculos entre la fascia y el sistema autónomo que afectan el tono de la fascia y la viscosidad del tejido. Por lo tanto, se recomienda un cambio desde un punto de vista mecánico hacia la inclusión de una dinámica autorregulatoria del sistema nervioso del paciente.
            </p>
            <p className="font-bold text-center mt-6 text-xl text-secondary">
              Transformacion del paciente en agente.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Apolo;
