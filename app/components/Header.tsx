import { Link } from "react-router";
import "app/styles/Header.css";
import { useState } from "react";

export default function Header() {
  const [loggedIn, setLogin] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/" className="header-logo">
          SmartMart
        </Link>
        <ul className="header-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Page2">Trip Planner</Link>
          </li>
          <li>
            <Link to="/Page2">Grocery Lists</Link>
          </li>

          {loggedIn ? (
            <li>
              <Link to="/Page2">Profile</Link>
            </li>
          ) : (
            <>
              <button
                className="button-main"
                onClick={(e) => {
                  setLogin(true);
                }}
              >
                Log In
              </button>
              <button
                className="button-secondary"
                onClick={(e) => {
                  setLogin(true);
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
