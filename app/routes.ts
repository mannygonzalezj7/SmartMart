import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/landing.tsx"),
    route("login", "routes/login.tsx"),
    route("signup", "routes/signup.tsx"),
    route("home", "routes/home.tsx"),
    route("page2", "routes/page2.tsx")] satisfies RouteConfig;