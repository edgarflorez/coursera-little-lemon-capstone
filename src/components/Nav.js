import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/" className="lead-text">
            Home
          </Link>
          {/* <a className="lead-text" href="./homepage.html">
            Home
          </a> */}
        </li>
        <li>
          <a className="lead-text" href="./about.html">
            About
          </a>
        </li>
        <li>
          <a className="lead-text" href="./menu.html">
            menu
          </a>
        </li>
        <li>
          <a className="lead-text" href="./reservations.html">
            reservations
          </a>
        </li>
        <li>
          <a className="lead-text" href="./order-online.html">
            order online
          </a>
        </li>
        <li>
          <a className="lead-text" href="./login.html">
            login
          </a>
        </li>
      </ul>
    </nav>
  );
}
