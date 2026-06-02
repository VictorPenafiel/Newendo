import { motion } from 'framer-motion';
import { User, Utensils, Heart, Leaf } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full">
      {/* Intro Section */}
      <section className="container mx-auto px-4 mt-6">
        <div className="bg-warning-stripe py-2 mb-6">
          <h2 className="text-center text-3xl font-bold font-display text-accent m-0">Newendo</h2>
        </div>
        
        <blockquote className="text-right text-lg italic mb-6 text-gray-800 border-r-4 border-primary pr-4">
          Ser otro para ser uno mismo<br />
        </blockquote>

        <div className="space-y-4 text-gray-800 leading-relaxed max-w-4xl mx-auto">
          <p>
            En un mundo cada vez más dominado por la alta tecnología, las herramientas creadas y la terminología se vuelven progresivamente más complejos y especializados, accesibles y comprensibles solo para expertos. Esta bitácora busca, por un lado, ser una aproximación a las tecnologías del yo vinculadas con la "energía" y, por otro lado, trazabilizará el proceso de investigación en el campo de la terapéutica.
          </p>
          <p>
            Las tecnologías, según Michel Foucault, se pueden clasificar en 4 categorías. En primer lugar, encontramos las de producción y transformación de las cosas. En segundo lugar, están las de los sistemas de signos. Un tercer tipo lo constituyen las de poder, que influyen en la organización social y el control, manifestándose en formas como la anatomopolítica (centrada en el cuerpo individual) y la biopolítica (enfocada en la población como un todo). Finalmente, se encuentran las del yo o antropotecnologías. Estas últimas, “permiten a los individuos efectuar, por cuenta propia o con la ayuda de otros, cierto número de operaciones sobre su cuerpo y su alma, pensamientos, conducta, o cualquier forma de ser, obteniendo así una transformación de sí mismos”.
          </p>
          <p>
            Uno de los propósitos de las tecnologías del yo (o antropotecnologías) es reeducar, en condiciones propicias, a las almas mal formadas. El objetivo es lograr <q>asumirse, lo que quiere decir recuperarse y recuperarse quiere decir percibir con atención no restringida cómo está uno circunstanciado</q> por el mundo. En esta perspectiva, el alma es la huella que el mundo deja en nuestro cuerpo.
            Esta reeducación consiste en sustituir las condiciones de existencia azarosas y desfavorables por otras que sean meditadas y revitalizantes. El enfoque principal es doble: por un lado, satisfacer las necesidades de mantenimiento y crecimiento de los ciclos energéticos; por otro, proporcionar nuevas herramientas para la asimilación de la realidad. De este modo, se busca que el individuo deje de "sobrevolar el mundo" y, en su lugar, descender a él para modificarlo activamente, siempre con la vista puesta en las generaciones futuras. Así, el objetivo final es que el individuo aprenda a producir sus entusiasmos de forma autónoma, en un régimen de propia administración.
          </p>
          <p>
            Newendo es un método para la autogestión de la "salud" cuyo principio fundamental es mejorar el nivel energético del individuo. Esto se logra a través de una transición clave: el sujeto deja de ser un paciente pasivo para convertirse en un agente activo de su propia condición. Como agente, la persona aprende a manipular los aspectos más inmediatos de su entorno y de sí misma para optimizar la dinámica autorregulatoria de su sistema nervioso.
            Esta transformación de paciente a agente encuentra un poderoso paralelo en el proceso histórico actual. Impulsados por la tecnología, y principalmente por internet, los individuos han dejado de ser meros consumidores culturales para convertirse también en productores. Esta nueva forma de creación cultural opera con principios de libertad y autonomía, desvinculada de las antiguas jerarquías o "procesos genealógicos", y muestra una clara tendencia hacia la absoluta libertad de las propuestas.
          </p>
          <p>
            Newendo posee una estrecha vinculación con el trabajo de los metabolismos, físicos, químicos y energéticos, a través, de la manipulación del sistema nervioso, simpático y parasimpático. Para que la energía vital (Newen) fluya libremente a través del cuerpo, influyendo en los metabolismos eléctricos, químicos y cinéticos, optimizando la información transmitida por medio de la manipulación de los sistemas nervioso, circulatorio y fascial.
          </p>
          <p>
            El trabajo se enfoca en los aspectos más cercanos e inmediatos para poder "mejorar" la dinámica autorregulatoria del sistema nervioso del agente.
          </p>
          <p>
            Newendo, cuyo nombre significa "el camino de la energía", se inspira en la palabra mapuche newen (energía o fuerza). Esta tecnología se fundamenta en la cosmovisión mapuche del ixofillmogen, concepto que define al ser humano como una unidad con su “medio ambiente”. Dicha unidad a su vez se compone por la interacción de dos fuerzas primordiales, que interpretamos como las corrientes Apolíneas (estructuradoras de la unidad) y las Dionisíacas (desconfiguradoras de la unidad). El objetivo de Newendo es conectar a las personas con su capacidad innata de autosanación para promover un estado de salud integral.
          </p>
        </div>
      </section>

      {/* Quienes Somos Section */}
      <section id="quienes_somos" className="container mx-auto px-4 mt-12 mb-12">
        <SectionTitle title="¿Quiénes somos?" />
        
        <div className="max-w-4xl mx-auto space-y-4 text-gray-800 leading-relaxed mb-8">
          <p>
            Newendo, fundado en 2022, es una tecnología del yo dedicada a la deconstrucción del ser, tomando como referentes a los siguientes pensadores en orden de importancia: Nietzsche, Patanjali, Lowen, Junquera, Rolfing y Mézieres. Nuestro método combate el agotamiento crónico causado por desequilibrios del sistema nervioso, interviniendo en los pilares de la vida orgánica —lo más inmediato y profundo—: la nutrición, el Ixofillmogen [ver nota] y las características morfológicas del cuerpo y el alma.
          </p>
          <p>
            Se estima que hasta el 75% de las personas en países de bajos ingresos, que experimentan problemas mentales no tienen acceso a profesionales de la salud mental, según el Programa de Acción para la Brecha de Salud Mental de la Organización Mundial de la Salud, esto significa que la brecha de tratamiento es enorme. Esta bitácora trata de entregar herramientas para luchar contra los desequilibrios del sistema nervioso, lo que creemos repercute enormemente en este problema que es la salud mental en el presente.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button to="/dionisio" variant="dionisio" className="w-32">Dionisíaco</Button>
          <Button to="/apolo" variant="apolo" className="w-32">Apolíneo</Button>
        </div>
      </section>

      {/* Combate Section */}
      <section className="container mx-auto px-4 mt-12">
        <SectionTitle title="Newendo combate" />
        
        <div className="max-w-4xl mx-auto">
          <ul className="list-disc pl-8 space-y-2 text-gray-800">
            <li>Los bloqueos en los canales energéticos</li>
            <li>Lucha contra el cansancio</li>
            <li>Hipomovilidad que impidan movimientos normales</li>
            <li>Desequilibrios en la tensión miofascial</li>
            <li>Los bloqueos diafragmáticos en la inspiración</li>
            <li>Las rotaciones internas de los miembros</li>
            <li>
              Las lordosis:
              <ul className="list-[circle] pl-8 mt-2 space-y-1">
                <li>Cifosis</li>
                <li>Lordosis</li>
              </ul>
            </li>
            <li>Fibrosis</li>
            <li>Estenosis</li>
            <li>Sacroilitis</li>
          </ul>
        </div>
      </section>

      {/* Trabajo Section */}
      <section className="container mx-auto px-4 mt-12 mb-12">
        <SectionTitle title="Trabajo" />
        
        <div className="max-w-4xl mx-auto mb-12">
          <ul className="list-[circle] pl-8 space-y-3 text-gray-800">
            <li>Las otras tecnologías del yo me han enseñado sobre el Newendo</li>
            <li>El arte no reside en el oficio, sino en la forma de ejercerlo. Al ofrecer nuevas perspectivas del mundo, se erige como respuesta al nihilismo y como la verdadera actividad metafísica de la vida.</li>
            <li>El bíos como material estético. La creación, como función orgánica. "¿Y dónde se expresa la más alta cualidad creativa? En la voluntad de transfigurarse uno mismo, de sobrepasarse eternamente..."</li>
            <li>La ignorancia es infinita, pero el conocimiento no.</li>
            <li>Newendo se rige por los principios del conocimiento. Los principios del conocimiento se basan en la medicina, en la búsqueda de la salud y en el florecimiento corporal.</li>
            <li>El trabajo se realiza manipulando el sistema nervioso, simpático y parasimpático.</li>
            <li>El objetivo de deconstruir el ser es descubrir y liberar tu verdadera identidad, la que se esconde en lo más profundo de tu personalidad, de esta forma combatir principalmente cualquier tipo de agotamiento originado por desequilibrios en el sistema nervioso.</li>
            <li>El sistema nervioso está principalmente relacionado con el movimiento y los patrones de movimiento reflejan el estado del sistema nervioso. <em className="italic">Dime cómo caminas y te diré quién eres</em>.</li>
            <li>Newendo, principalmente como herramienta o instrumento ontológico, que se ocupa principalmente para derribar el andamiaje que sostiene nuestra personalidad.</li>
            <li>Newendo es un reencuentro con el Newen, la energía vital, que se alinea con prácticas de sanación y autoconocimiento orientales basadas en el ki, el chi y el prana, pero con una perspectiva occidental, donde la medicina basada en la evidencia y el rigor científico son esenciales.</li>
            <li>El Newen en el centro, construido por los aspectos morfológicos del cuerpo, del alma, de la alimentación y del Ixofillmogen.</li>
          </ul>
        </div>

        {/* Pilares Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <User size={40} className="mx-auto mb-4 text-accent" />, title: "Cuerpo", text: "Conocer nuestro cuerpo y ser capaz de habitarlo, de entender cómo las diferentes partes se conectan entre sí, de reconocer y despertar las zonas que han perdido desvinculación con el Newen" },
            { icon: <Utensils size={40} className="mx-auto mb-4 text-accent" />, title: "Alimentación", text: "Hay que ser más conscientes de la relación entre la dieta y el Newen." },
            { icon: <Heart size={40} className="mx-auto mb-4 text-accent" />, title: "Alma", text: "El Alma es engendrado desde el conflicto continuo entre lo apolíneo y lo dionisiaco. Ser y no ser, esa es la cuestión." },
            { icon: <Leaf size={40} className="mx-auto mb-4 text-accent" />, title: "Ixofillmogen", text: "La influencia del 'medio ambiente' sobre el Newen, sobre su retardación o su aceleración." }
          ].map((pillar, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition-all text-center border border-gray-100"
            >
              {pillar.icon}
              <h4 className="text-xl font-bold text-secondary mb-3">{pillar.title}</h4>
              <p className="text-sm text-gray-600">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pilares Authors Section */}
      <section id="pilares" className="container mx-auto px-4 mt-16 mb-12">
        <SectionTitle 
          title="Curaduría de tecnologías del yo" 
          subtitle="Pilares troncales del conocimiento de las que brotan innumerables ramificaciones, cultivadas por sus sucesores."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          <Card 
            imageSrc="/assets/img/Mezieres1.jpg"
            title="Françoise Mézières"
            text="Françoise Mézières fue una fisioterapeuta francesa, creadora del concepto de cadenas musculares y del Método Mézières."
            linkTo="/mezieres"
          />
          <Card 
            imageSrc="/assets/img/ida-rolfing.jpg"
            title="Ida Rolf"
            text="El Rolfing es una técnica que masajea la fascia o tejido conjuntivo, que envuelve músculos y huesos, con el fin de lograr equilibrios biomecánicos"
            linkTo="/rolf"
          />
          <Card 
            imageSrc="/assets/img/innigo_junquera.jpg"
            title="Iñigo Junquera"
            text="Fisioterapia Integrativa, es toda una cosmovisión de la salud y la enfermedad, toda una manera de entender cómo debemos abordar la segunda y cuidar de la primera."
            linkTo="/junquera"
          />
          <Card 
            imageSrc="/assets/img/Alexander-Lowen-1.jpg"
            title="Alexander Lowen"
            text="Es una de las teorías de psicoterapias corporales más utilizadas, dichas técnicas priorizan el trabajo corporal en el tratamiento del paciente."
            linkTo="/lowen"
          />
          <Card 
            imageSrc="/assets/img/Patanjali.jpg"
            title="Patanjali"
            text="El Yoga Sutra de Patanjali es un texto tradicional de la medicina ayurveda compilado hace 2.400 años"
            linkTo="/patanjali"
          />
          <Card 
            imageSrc="/assets/img/Nietzsche.jpg"
            title="Friedrich Nietzsche"
            text="Voluntad de poder: la energía que recorre las formas más complejas de coordinación, configurando pricipalmente la unidad orgánica en contraposición o enfrentamiento a lo inorgánico."
            linkTo="/nietzsche"
          />
        </div>
      </section>

      {/* Biologic Clock Section */}
      <section className="container mx-auto px-4 mt-16 mb-16">
        <SectionTitle 
          title="Ciclo diario del cuerpo humano"
          subtitle="La ciencia como medio para la comprensión, no un fin en sí misma."
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <a 
              href="https://www.nobelprize.org/prizes/medicine/2017/press-release/?fbclid=IwAR3A1BOx5QMdTx-gxIrIkrpWS662hVDU-uYPT7zZBo1i8LMn1jUkXsJuGaM" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg rounded-full px-6 py-3 transition-colors duration-300 animate-pulse"
            >
              Reloj Biológico
            </a>
          </div>

          <div className="relative pl-8 border-l-2 border-primary py-4 space-y-6">
            {[
              { time: "06:00", text: "Es cuando uno tiene más cortisol en el cuerpo" },
              { time: "06:45", text: "Aumenta la presión arterial" },
              { time: "07:30", text: "La glándula pineal finaliza la producción de melatonina" },
              { time: "08:30", text: "Movimientos intestinales que facilitan la mejor asimilación de los alimentos" },
              { time: "09:00", text: "Aumento de la testosterona. Realizar ejercicios de intervalos por la mañana" },
              { time: "10:00", text: "Mayor atención y capacidad cognitiva" },
              { time: "14:30", text: "Capacidad motora" },
              { time: "15:30", text: "Menor tiempo de reacción a los estímulos" },
              { time: "17:00", text: "Mayor eficiencia muscular y cardiovascular" },
              { time: "18:30", text: "Mayor presión arterial" },
              { time: "19:30", text: "Mayor temperatura" },
              { time: "21:00", text: "La glándula pineal empieza a producir melatonina" },
              { time: "22:30", text: "Supresión de movimientos intestinales" },
              { time: "23:00", text: "Dormir" }
            ].map((item, idx) => (
              <div key={idx} className="relative text-black">
                <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                <time className="font-bold text-accent mr-2">{item.time}</time>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nutritional Pyramid */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-xl font-bold text-primary mb-6">Explora más sobre una pieza clave de nuestro bienestar:</p>
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/22166184/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg rounded-full px-6 py-3 transition-colors duration-300 animate-pulse"
              >
                Pirámide Nutricional
              </a>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <img 
                src="/assets/img/piramide_nutricional.webp" 
                className="max-h-[400px] w-auto rounded-xl shadow-md border border-gray-200 object-contain" 
                alt="Pirámide Nutricional - Guía para una alimentación balanceada" 
                loading="lazy"
              />
              <p className="text-gray-500 text-sm mt-4 italic">
                Una representación visual de los fundamentos para una alimentación saludable.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
