import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const Dionisio = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mt-6 mb-12"
    >
      <SectionTitle title="Dionisíaco" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-gray-100 pb-3">Sobrevolar el mundo, desde el centro hacia arriba guiado por fuerzas disolventes</h3>
        
        <blockquote className="text-right text-lg italic my-6 text-gray-700 border-r-4 border-primary pr-4 py-2">
          "¡Ay! quién nos contara la historia completa de los narcóticos!<br/>
          Ella es punto menos que la historia de la 'formación',<br/>
          de lo que suele llamarse civilización".<br/>
          <footer className="text-sm mt-2 font-bold text-gray-500">— F. Nietzsche, <cite className="font-normal italic">Die fröhliche Wissenschaft, 86</cite></footer>
        </blockquote>

        <div className="space-y-4 text-gray-800 leading-relaxed mt-8">
          <h4 className="text-xl font-bold text-primary mb-2">Serie Dionisíaca: Una búsqueda de la Divinidad</h4>
          <p>
            Indagaciones teóricas sobre los Enteógenos.
          </p> 
          <p>
            El ritmo del Ser: bitácora reflexiva sobre los ciclos de distensión y la tensión que se da entre las presencias y ausencias del ser y estar en el mundo.
          </p>
          <p>
            Sobrevolar el mundo como mecanismo de autoconservación, los silencios y pausas del mundo como mecanismo del ritmo biologico, el ritmo que la naturaleza entrega al ser humano para poder descansar y regenerarse de las pulsiones 'opuestas' apolineas.
          </p>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
            <h5 className="text-lg font-bold text-primary mb-3 cursor-pointer hover:underline inline-block transition-all" onClick={() => alert('Has hecho clic en el título del capítulo. Aquí podrías expandir el contenido del capítulo.')}>
              Capítulo 1: Amanita mia
            </h5>
            <p>
              Buscar en el tiempo para descubrir la esencia espiritual de la planta. Cientos de horas de grabación sin objetivo específico.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dionisio;
