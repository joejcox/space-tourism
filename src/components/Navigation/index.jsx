import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav
    className="navigation h-24 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg w-1/2 uppercase font-is-sans-serif tracking-ls-2"
    role="navigation">
    <NavLink to="/" exact>
      <span className="font-bold mr-2">00</span> Home
    </NavLink>
    <NavLink to="/destination">01 Destination</NavLink>
    <NavLink to="/crew">02 Crew</NavLink>
    <NavLink to="/technology">03 Technology</NavLink>
  </nav>
);

export default Navigation;
