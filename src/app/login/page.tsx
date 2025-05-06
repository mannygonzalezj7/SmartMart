import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form method="post">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button className="button-main" formAction={login}>
          Log in
        </button>
      </form>
    </div>
  );
}
