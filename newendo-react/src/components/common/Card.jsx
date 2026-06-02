import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({ imageSrc, title, text, linkTo, linkText = "Ver más" }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-5 flex-grow">
        <h5 className="text-xl font-bold text-secondary mb-2">{title}</h5>
        <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
      </div>
      
      <div className="p-5 pt-0 mt-auto">
        {linkTo.startsWith('http') ? (
          <a 
            href={linkTo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full text-center"
          >
            {linkText}
          </a>
        ) : (
          <Link 
            to={linkTo} 
            className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full text-center"
          >
            {linkText}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
