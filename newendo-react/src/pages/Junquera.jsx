import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const Junquera = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mt-6 mb-12"
    >
      <SectionTitle title="Iñigo Junquera" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-4">Fisioterapia Integrativa</h3>
        
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            Iñigo Junquera es un destacado referente en el campo de la fisioterapia integrativa (Fiit Concept). Su visión va más allá de tratar el síntoma aislado, proponiendo una comprensión holística del cuerpo humano donde los sistemas interactúan constantemente.
          </p>
          <p>
            La Fisioterapia Integrativa es toda una cosmovisión de la salud y la enfermedad, toda una manera de entender cómo debemos abordar la segunda y cuidar de la primera. El método pone un énfasis especial en la relación entre los órganos, las emociones y el sistema musculoesquelético.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary my-6">
            <h4 className="font-bold text-lg mb-2">Principios Fundamentales</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>El cuerpo responde a estímulos físicos, bioquímicos y emocionales.</li>
              <li>Las disfunciones viscerales a menudo se reflejan como dolores articulares o musculares.</li>
              <li>El tratamiento debe buscar el origen del desequilibrio, no solo silenciar el dolor.</li>
              <li>La nutrición y la gestión del estrés son pilares para la recuperación física.</li>
            </ul>
          </div>
          <p>
            En Newendo, incorporamos esta visión integradora para comprender cómo la nutrición, las emociones y el estrés impactan en el sistema nervioso y, en consecuencia, en nuestra estructura física y flujo de energía.
          </p>
          <div className="text-center mt-8">
            <a 
              href="https://www.fiit-concept.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-hover transition-colors shadow-md"
            >
              Visitar el Sitio Oficial de Fiit Concept
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Junquera;
