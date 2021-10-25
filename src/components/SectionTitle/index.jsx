const SectionTitle = ({ children, size }) => (
  <h2
    className={`uppercase text-white font-is-serif text-is-${size} leading-none`}>
    {children}
  </h2>
);

export default SectionTitle;
