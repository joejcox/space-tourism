import { NavLink } from "react-router-dom";

const PlanetTabs = ({ destinations }) =>
  destinations.map(({ name }, index) => (
    <NavLink
      className="text-white nav-tabs"
      to={`./${name.toLowerCase()}`}
      key={index}>
      {name}
    </NavLink>
  ));

export default PlanetTabs;
