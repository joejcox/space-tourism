const PlanetStats = ({ distance, travelTime }) => {
  return (
    <div className="stats">
      <div className="stats-distance inline-block w-1/2">
        <h4 className="text-is-8 text-highlight font-is-sans-serif uppercase tracking-ls-3">
          AVG. DISTANCE
        </h4>
        <h5 className="text-is-5 font-is-serif text-white uppercase mt-2">
          {distance}
        </h5>
      </div>
      <div className="stats-travel inline-block w-1/2">
        <h4 className="text-is-8 text-highlight font-is-sans-serif uppercase tracking-ls-3">
          Est. Travel Time
        </h4>
        <h5 className="text-is-5 font-is-serif text-white uppercase mt-2">
          {travelTime}
        </h5>
      </div>
    </div>
  );
};

export default PlanetStats;
