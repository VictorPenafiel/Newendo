import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const Lowen = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mt-6 mb-12"
    >
      <SectionTitle title="Alexander Lowen" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-4">Análisis Bioenergético</h3>
        
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            Alexander Lowen fue un médico y psicoterapeuta estadounidense que desarrolló el Análisis Bioenergético. Es una de las teorías de psicoterapias corporales más utilizadas, dichas técnicas priorizan el trabajo corporal en el tratamiento del paciente.
          </p>
          <p>
            Lowen postuló que la mente y el cuerpo son funcionalmente idénticos; es decir, lo que ocurre en la mente tiene un reflejo directo en el cuerpo, y viceversa. Los conflictos emocionales no resueltos se manifiestan como tensiones musculares crónicas, formando lo que él denominó una "coraza muscular".
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary my-6">
            <h4 className="font-bold text-lg mb-2">Principios Fundamentales</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>La respiración es clave para desbloquear emociones y energía estancada.</li>
              <li>El "enraizamiento" (grounding) nos conecta con la realidad física y la tierra.</li>
              <li>La energía vital debe fluir libremente por el cuerpo para mantener la salud mental y física.</li>
              <li>Las tensiones crónicas son mecanismos de defensa físicos contra el dolor emocional.</li>
            </ul>
          </div>
          <p>
            En Newendo, el enfoque bioenergético de Lowen es esencial para entender cómo liberar el Newen reprimido. Al trabajar con la respiración y el cuerpo, facilitamos la deconstrucción de las tensiones que nos agotan diariamente.
          </p>
          <div className="text-center mt-8">
            <a 
              href="https://drive.google.com/drive/folders/1DPcyxj-HStf3WD3u3gnk1ZZAfN42KSq4?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-hover transition-colors shadow-md"
            >
              Acceder a Libros y Recursos de Lowen
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Lowen;
