"use client";

import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { createClient } from "../utils/supabase/client";
import Link from "next/link";

export default function Header() {
  const [loggedIn, setLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (!error && data?.user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    };

    checkUser();
  }, [loggedIn]);

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
              <Link href="/profile">Profile</Link>
            </li>
          ) : (
            <>
              <button
                className="button-main"
                onClick={(e) => {
                  router.push("/login");
                }}
              >
                Log In
              </button>
              <button
                className="button-secondary"
                onClick={(e) => {
                  router.push("/signup");
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
