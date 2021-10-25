import Logo from "../Logo";
import Navigation from "../Navigation";

const Header = () => (
  <header className="fixed flex justify-between items-center h-40 w-full bg-transparent">
    <Logo />
    <Navigation />
  </header>
);

export default Header;
