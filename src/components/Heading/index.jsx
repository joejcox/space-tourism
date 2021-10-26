const Heading = ({ children, highlight, number }) => {
  const handleNumber = () =>
    number && (
      <span className="text-white text-opacity-50 font-bold mr-8">
        {number}
      </span>
    );

  return (
    <h1
      className={`tracking-ls-1 uppercase font-is-sans-serif text-is-5 leading-none mb-8 ${
        highlight ? "text-highlight" : "text-white"
      }`}>
      {handleNumber()}
      {children}
    </h1>
  );
};

export default Heading;
