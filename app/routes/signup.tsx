import type { Route } from "./+types/signup";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 2" },
    { name: "description", content: "Welcome to SmartMart!" },
  ];
}

export default function SignUp() {
  return <div>This is the signup page</div>;
}
