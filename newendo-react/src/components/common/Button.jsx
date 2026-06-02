import { Link } from 'react-router-dom';

const Button = ({ children, to, href, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "inline-block px-5 py-2.5 text-base font-bold text-center no-underline cursor-pointer rounded transition-colors duration-300 shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover border border-primary",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
    dionisio: "bg-white text-black border border-gray-300 hover:bg-black hover:text-white",
    apolo: "bg-black text-white border border-black hover:bg-white hover:text-black",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
