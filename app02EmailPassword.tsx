import "./styles.css";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    else setPassword(value);
    setSubmitted(false);
  };

  const handleSubmit = (event: any) => {
    setSubmitted(true);
    event.preventDefault();
  };

  return (
    <>
      <div className="App">
        <h1>Hellow CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <form>
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" name="email" onChange={handleInputChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" name="password" onChange={handleInputChange} />
        <br />
        <input type="submit" onClick={handleSubmit} />
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
