import { login, signup } from "./actions";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-full">
      <form
        className="flex flex-col bg-gray-700 p-10 rounded-2xl max-w-sm gap-4"
        method="POST"
      >
        <label htmlFor="email">Email:</label>
        <input
          className="border border-white"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="border border-white"
          id="password"
          name="password"
          type="password"
          required
        />
        <button className="bg-green-500" formAction={login}>
          Log in
        </button>
        <button className="bg-cyan-400" formAction={signup}>
          Sign up
        </button>
      </form>
    </div>
  );
}
