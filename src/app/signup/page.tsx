import { signup } from "./actions";

export default function SignupPage() {
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form method="post">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button className="button-main" formAction={signup}>
          Sign up
        </button>
      </form>
    </div>
  );
}
