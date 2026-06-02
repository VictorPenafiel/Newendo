const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="w-full mt-3 mb-5">
      <div className="bg-warning-stripe py-2">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold m-0 text-accent font-display">{title}</h2>
        </div>
      </div>
      {subtitle && (
        <p className="text-center mt-3 px-4 max-w-2xl mx-auto text-gray-700">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
