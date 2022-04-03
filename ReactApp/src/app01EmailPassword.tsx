import "./styles.css";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSubmitted(false);
    if (name === "email") setEmail(value);
    else setPassword(value);
  };

  const submitHandler = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setSubmitted(true);
    event.preventDefault();
  };

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <form>
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" name="email" onChange={inputHandler} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="text" name="password" onChange={inputHandler} />
        <br />
        <input type="submit" onClick={submitHandler} />
      </form>
      {submitted && (
        <div>
          Email: {email}
          <br />
          Password: {password}
        </div>
      )}
    </>
  );
}
