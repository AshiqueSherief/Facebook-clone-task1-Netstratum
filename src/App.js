import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const updatePassword = (e) => setPassword(e.target.value);
  console.table({ email, password });
  return (
    <div className="container">
      <img src="/logo.svg" alt="fb logo" className="container__log" />
      <div className="container__box">
        <p className="container__box--title">Log in to Facebook</p>
        <form>
          <input
            type="email"
            className="container__box--input"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            className="container__box--input"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
            required
          />
          <button type="submit" className="container__box--button">
            Log in
          </button>
        </form>
        <div className="links">
          <a
            className="container__box--titles"
            href="https://www.facebook.com/"
          >
            Forgotten account?
          </a>
          .
          <a
            className="container__box--titles"
            href="https://www.facebook.com/"
          >
            Sign up for Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
