import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const Nietzsche = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mt-6 mb-12"
    >
      <SectionTitle title="Friedrich Nietzsche" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-4">La Voluntad de Poder y lo Dionisíaco</h3>
        
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            Friedrich Nietzsche fue un filósofo alemán cuya obra es fundamental para entender la deconstrucción del ser en Newendo. Sus conceptos sobre la Voluntad de poder son la base sobre la que comprendemos la energía vital.
          </p>
          <p>
            La "Voluntad de poder" es entendida como la energía que recorre las formas más complejas de coordinación, configurando principalmente la unidad orgánica en contraposición o enfrentamiento a lo inorgánico. No se trata de dominación sobre otros, sino del impulso de superación y afirmación de la propia vida.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary my-6">
            <h4 className="font-bold text-lg mb-2">Conceptos Claves</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Lo Apolíneo y lo Dionisíaco:</strong> La tensión entre el orden/estructura (Apolo) y el caos/vitalidad (Dionisio) que conforma el alma humana.</li>
              <li><strong>Voluntad de poder:</strong> El impulso originario de la vida hacia el crecimiento y la expansión de la propia existencia.</li>
              <li><strong>Amor fati:</strong> El amor al destino, aceptar la vida tal y como es en todas sus facetas, incluidas las adversas.</li>
              <li><strong>Deconstrucción de los valores:</strong> Cuestionar las estructuras de pensamiento impuestas para liberar la auténtica individualidad.</li>
            </ul>
          </div>
          <p>
            Newendo asume este desafío vital: emplear la Voluntad de poder como motor para romper con el agotamiento provocado por el nihilismo moderno, liberando la energía vital (Newen) mediante una verdadera actividad metafísica y transformadora.
          </p>
          <div className="text-center mt-8">
            <a 
              href="https://drive.google.com/drive/folders/19S4d66eYHVtwVO9PoyRbO-eNvHHI2YC5?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-hover transition-colors shadow-md"
            >
              Acceder a Libros y Recursos de Nietzsche
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nietzsche;
