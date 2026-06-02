const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="w-full md:w-1/3 text-center md:text-left">
            <img 
              src="/assets/img/logonewendo.jpg" 
              className="max-h-20 mx-auto md:mx-0 object-contain" 
              alt="Newendo Logo" 
            />
          </div>
          
          <div className="w-full md:w-1/3 text-center">
            <h6 className="mb-0 text-primary">Newendo, tecnología del yo dedicada a la deconstrucción del ser.</h6>
          </div>
          
          <div className="w-full md:w-1/3 text-center md:text-right text-sm">
            <p className="mb-2">
              &copy;&nbsp;Newendo. Ningún derecho reservado.
              <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="inline-block ml-2 align-middle hover:-translate-y-1 transition-transform">
                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg" alt="Creative Commons BY" width="78" height="26" />
              </a>
            </p>
            <p className="mb-0">
              Sitio construido por: <a href="https://tusitioweb3.netlify.app/" className="text-primary hover:text-primary-hover transition-colors">Tu sitio web 3.0</a>
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
