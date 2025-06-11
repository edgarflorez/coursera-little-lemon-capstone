import logo from "../assets/Logo.svg";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="grid header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__nav-container">
        <Nav></Nav>
      </div>
    </header>
  );
}
