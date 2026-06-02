import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const Patanjali = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mt-6 mb-12"
    >
      <SectionTitle title="Patanjali" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-4">El Yoga Sutra y la Tecnología del Yo</h3>
        
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            Patanjali es considerado el sabio que compiló los Yoga Sutras hace más de 2.400 años, un texto fundamental que sistematiza la práctica del Yoga, vinculada estrechamente con la medicina ayurveda y el conocimiento oriental sobre la energía y la mente.
          </p>
          <p>
            El Yoga Sutra es una de las tecnologías del yo más antiguas y efectivas que existen. Propone un método paso a paso (los ocho pasos o 'Ashtanga') para lograr el dominio sobre las fluctuaciones de la mente, lo que permite al ser humano percibir su verdadera naturaleza libre del sufrimiento y la ignorancia.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary my-6">
            <h4 className="font-bold text-lg mb-2">Fundamentos en el Yoga Sutra</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Asana (Postura):</strong> El cuerpo debe estar firme pero relajado, permitiendo que la energía fluya sin interrupciones.</li>
              <li><strong>Pranayama (Respiración):</strong> El control y la expansión de la respiración regulan la energía vital (Prana o Newen).</li>
              <li><strong>Dharana y Dhyana:</strong> Concentración y meditación como herramientas para enfocar la mente y detener su incesante agitación.</li>
              <li><strong>Cese de las fluctuaciones mentales (Vritti):</strong> El objetivo supremo para que la conciencia pura pueda manifestarse.</li>
            </ul>
          </div>
          <p>
            En Newendo, nos alineamos con la antigua sabiduría de Patanjali bajo un prisma occidental basado en la evidencia. Adoptamos la concepción de que dominar el cuerpo y la respiración es el puente para calmar el sistema nervioso y reconectar con el Newen.
          </p>
          <div className="text-center mt-8">
            <a 
              href="https://drive.google.com/drive/folders/1XL7YRQ6snpuUvhREMxVCf2iiUEQOwOzm?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-hover transition-colors shadow-md"
            >
              Acceder a Libros y Recursos de Patanjali
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Patanjali;
