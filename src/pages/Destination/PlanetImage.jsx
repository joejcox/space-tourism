const PlanetImage = ({ src }) => (
  <div className="w-3/5 flex justify-center pt-5 pr-32 planet-image">
    <img
      src={require(`../../${src}`).default}
      alt="The moon"
      className="w-full max-w-lg"
    />
  </div>
);
export default PlanetImage;
