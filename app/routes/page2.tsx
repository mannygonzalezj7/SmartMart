import type { Route } from "./+types/page2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 2" },
    { name: "description", content: "Welcome to SmartMart!" },
  ];
}

export default function Page2() {
  return <div>This is the page2 page</div>;
}
