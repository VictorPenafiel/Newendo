import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-full bg-white py-0">
        <div className="flex justify-center">
          <div className="w-32 mb-4 lg:mb-0 text-center">
            {/* We will need to copy the image to assets later */}
            <img src="/assets/img/logonewendo.jpg" alt="Logo Newendo" className="max-w-full h-auto" />
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap">

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-primary hover:text-primary-hover focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-2 mt-3 ml-0">
            <a href="http://www.newendowellness.cl/" className="border border-primary text-primary hover:bg-white hover:text-primary px-3 py-1 rounded text-sm font-medium transition-colors">
              <h6 className="m-0 text-sm">Newendo Wellness</h6>
            </a>
            <a href="http://localhost:5173/" className="border border-primary text-primary hover:bg-white hover:text-primary px-3 py-1 rounded text-sm font-medium transition-colors">
              <h6 className="m-0 text-sm">Home</h6>
            </a>
            <a href="#pilares" className="border border-primary text-primary hover:bg-white hover:text-primary px-3 py-1 rounded text-sm font-medium transition-colors">
              <h6 className="m-0 text-sm">Pilares</h6>
            </a>
            <a href="#quienes_somos" className="border border-primary text-primary hover:bg-white hover:text-primary px-3 py-1 rounded text-sm font-medium transition-colors">
              <h6 className="m-0 text-sm">¿Quiénes somos?</h6>
            </a>
            <Link to="/dionisio" className="border border-primary text-primary hover:bg-white hover:text-primary px-3 py-1 rounded text-sm font-medium transition-colors">
              <h6 className="m-0 text-sm">Dionisíaco</h6>
            </Link>
            <Link to="/apolo" className="border border-primary text-primary hover:bg-white hover:text-primary px-3 py-1 rounded text-sm font-medium transition-colors">
              <h6 className="m-0 text-sm">Apolíneo</h6>
            </Link>
          </div>

          {/* Social Links */}
          <div className="w-full lg:w-auto text-center lg:text-right mt-4 lg:mt-0 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
            <h6 className="m-0 mr-0">Únete a nuestra comunidad.</h6>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/newendochile/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                <Instagram size={28} />
              </a>
              <a href="https://www.youtube.com/@newendochile" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                <Youtube size={28} />
              </a>
              <a href="https://twitter.com/newendochile" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                <Twitter size={28} />
              </a>
              <a href="https://web.facebook.com/newendochile" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                <Facebook size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white/95 px-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 pt-2">
                <a href="https://www.newendowellness.cl" className="border border-primary text-primary text-center px-3 py-2 rounded font-medium">Newendo Wellness</a>
                <a href="#pilares" onClick={toggleMenu} className="border border-primary text-primary text-center px-3 py-2 rounded font-medium">Pilares</a>
                <a href="#quienes_somos" onClick={toggleMenu} className="border border-primary text-primary text-center px-3 py-2 rounded font-medium">¿Quiénes somos?</a>
                <Link to="/dionisio" onClick={toggleMenu} className="border border-primary text-primary text-center px-3 py-2 rounded font-medium">Dionisíaco</Link>
                <Link to="/apolo" onClick={toggleMenu} className="border border-primary text-primary text-center px-3 py-2 rounded font-medium">Apolíneo</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
