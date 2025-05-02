import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [loggedIn, setLogin] = useState(false);

  return (
    <header>
      <nav>
        <Link href="/">SmartMart</Link>
        <ul className="header-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tripPlanner">Trip Planner</Link>
          </li>
          <li>
            <Link href="/grocery">Grocery Lists</Link>
          </li>

          {loggedIn ? (
            <li>
              <Link href="/Page2">Profile</Link>
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
