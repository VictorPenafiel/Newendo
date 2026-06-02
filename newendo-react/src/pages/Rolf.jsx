import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const Rolf = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mt-6 mb-12"
    >
      <SectionTitle title="Ida Rolf" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-4">La Integración Estructural (Rolfing)</h3>
        
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            Ida Rolf fue una bioquímica estadounidense y la fundadora de la Integración Estructural, popularmente conocida como Rolfing. Su trabajo revolucionó la forma de entender el tejido conectivo en la postura humana.
          </p>
          <p>
            El Rolfing es una técnica terapéutica manual que manipula y masajea la fascia (el tejido conjuntivo que envuelve músculos, huesos, nervios y órganos) con el fin de liberar las restricciones y lograr el equilibrio biomecánico en el campo de la gravedad.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary my-6">
            <h4 className="font-bold text-lg mb-2">Principios Fundamentales</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>El cuerpo humano está sujeto constantemente a la fuerza de la gravedad.</li>
              <li>La fascia puede volverse rígida, acortarse o adherirse, provocando compensaciones y deformaciones en la estructura.</li>
              <li>La manipulación profunda de la fascia reorganiza el cuerpo para que esté alineado verticalmente.</li>
              <li>Un cuerpo alineado gasta menos energía para sostenerse, mejorando la vitalidad y reduciendo el dolor.</li>
            </ul>
          </div>
          <p>
            Newendo integra el conocimiento de Ida Rolf para comprender y combatir las tensiones fasciales y las fibrosis que limitan la movilidad normal. Al equilibrar la estructura, permitimos que el sistema nervioso trabaje de manera eficiente y el flujo energético se optimice.
          </p>
          <div className="text-center mt-8">
            <a 
              href="https://drive.google.com/drive/folders/1_maYNp0ihb81LOkG9OUkWsLIBnxQmijR?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-hover transition-colors shadow-md"
            >
              Acceder a Libros y Recursos de Ida Rolf
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Rolf;
