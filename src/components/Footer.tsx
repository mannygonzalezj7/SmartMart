"use client";

import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";
import Link from "next/link";

export default function Footer() {
  const [loggedIn, setLogin] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setLogin(!!data?.user);
    };

    checkUser();
  }, []);

  return (
    <footer>
      <nav>
        <ul className="footer-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tripPlanner">Trip Planner</Link>
          </li>
          <li>
            <Link href="/grocery">Grocery Lists</Link>
          </li>
          {loggedIn && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
        </ul>
        <p>&copy; {new Date().getFullYear()} SmartMart. All rights reserved.</p>
      </nav>
    </footer>
  );
}
