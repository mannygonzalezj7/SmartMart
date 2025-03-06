import { Link } from "react-router";
import "app/styles/Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="header-logo">
          SmartMart
        </Link>
        <ul className="header-links">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Page2">Page2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
