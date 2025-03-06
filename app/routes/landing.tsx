import type { Route } from "./+types/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Landing" },
    { name: "description", content: "Welcome to SmartMart!" },
  ];
}

export default function Landing() {
  return (
    <div className="hero">
      <h1 className="">Welcome to SmartMart!</h1>
      <p>Shop smarter, Spend less</p>
    </div>
  );
}
