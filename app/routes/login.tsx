import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to SmartMart!" },
  ];
}

export default function Login() {
  return <div>This is the login page</div>;
}
