import logo from "./assets/Logo.svg";

export function Footer() {
  return (
    <footer>
      <div class="logo">
        <img src={logo} alt="logo" />
      </div>
      <div class="doormat">
        <h2>Dootmat Navigation</h2>
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
      <div className="contact">
        <h2>Contact</h2>
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
      <div className="social">
        <h2>Social Media Links</h2>
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
