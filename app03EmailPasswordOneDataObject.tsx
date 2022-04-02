import "./styles.css";
import { useState } from "react";

export default function App() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    setSubmitted(false);
  };

  const handleSubmit = (event: any) => {
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
        <input type="email" name="email" onChange={handleInputChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" name="password" onChange={handleInputChange} />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      {submitted && (
        <div>
          Email: {loginData.email}
          <br />
          Password: {loginData.password}
        </div>
      )}
    </>
  );
}
