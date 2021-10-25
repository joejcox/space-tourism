import { Link } from "react-router-dom";
import logoImage from "../../assets/shared/logo.svg";

const Logo = () => (
  <span className="logo flex-grow pl-12 lg:pl-24 xl:pl-32 flex items-center">
    <Link to="/" className="inline-block">
      <img src={logoImage} alt="Space Tourism Logo" />
    </Link>
  </span>
);

export default Logo;
