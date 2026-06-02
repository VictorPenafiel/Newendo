import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const Mezieres = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mt-6 mb-12"
    >
      <SectionTitle title="Françoise Mézières" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-4">El Método Mézières</h3>
        
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            Françoise Mézières fue una fisioterapeuta francesa revolucionaria que creó el concepto de cadenas musculares y el Método Mézières. Su enfoque cambió radicalmente la forma en que entendemos la biomecánica y la corrección postural.
          </p>
          <p>
            El método se basa en el principio de que los músculos no trabajan de forma aislada, sino que están interconectados en "cadenas". Cualquier tensión o acortamiento en una parte de la cadena afectará inevitablemente al resto, provocando compensaciones y deformaciones posturales (como la lordosis, cifosis, etc.).
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary my-6">
            <h4 className="font-bold text-lg mb-2">Principios Fundamentales</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>El cuerpo es una unidad funcional.</li>
              <li>La musculatura posterior se comporta como un solo músculo hipertrófico y siempre acortado.</li>
              <li>Toda acción localizada tiene una repercusión en el conjunto del cuerpo.</li>
              <li>El tratamiento debe enfocarse en estirar la cadena muscular posterior mediante posturas globales.</li>
            </ul>
          </div>
          <p>
            En Newendo, incorporamos estos principios para tratar el origen de los desequilibrios miofasciales y corregir la postura, permitiendo que la energía fluya sin los bloqueos provocados por las compensaciones estructurales.
          </p>
          <div className="text-center mt-8">
            <a 
              href="https://drive.google.com/drive/folders/1oRhRcnvIzXOV13OoXNotqEEh7fND-2z6?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-hover transition-colors shadow-md"
            >
              Acceder a Libros y Recursos de Mézières
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mezieres;
