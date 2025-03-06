import type { Route } from "./+types/home";
import "../styles/home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to SmartMart!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1 className="">Hello User!</h1>
        <p>This is where the rest of information about the user will go</p>
      </div>
      <div className="home-google-maps">
        <img src="/google-maps-placeholder.png" />
      </div>
    </>
  );
}
