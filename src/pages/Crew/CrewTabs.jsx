import { NavLink } from "react-router-dom";

const CrewTabs = ({ name }) => {
  const hyphenated = name.split(" ").join("-");
  return (
    <NavLink
      className="bg-grey w-5 h-5 rounded-full nav-dots inline-block mr-5"
      to={`./${hyphenated}`}>
      <span className="hidden">{name}</span>
    </NavLink>
  );
};

export default CrewTabs;
