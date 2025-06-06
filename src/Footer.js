import logo from "./assets/Logo.svg";

export function Footer() {
  return (
    <footer className="grid footer">
      <div class="footer__logo">
        <img src={logo} alt="logo" />
      </div>
      <div class="footer__doormat">
        <h2 className="section-title footer__section-title">
          Dootmat Navigation
        </h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="#menu">menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer__contact">
        <h2 className="section-title footer__section-title">Contact</h2>
        <ul>
          <li>
            <a href="#address">Address</a>
          </li>
          <li>
            <a href="#phone">phone number</a>
          </li>
          <li>
            <a href="#email">email</a>
          </li>
        </ul>
      </div>
      <div className="footer__social">
        <h2 className="section-title footer__section-title">
          Social Media Links
        </h2>
        <ul>
          <li>
            <a href="#address">Address</a>
          </li>
          <li>
            <a href="#phone">phone number</a>
          </li>
          <li>
            <a href="#email">email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
