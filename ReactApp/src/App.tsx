import { useState } from "react";
import NavBar from "./navbar";
import Home from "./home";

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
      <NavBar />
      <div className="content">
        <h1 className="text-center">Hello CodeSandBox</h1>
        <h2 className="text-center">Start editing to see some magic happen!</h2>
        <div className="form">
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
            <button onClick={handleSubmit}>Resubmit</button>
            <br />
          </form>
          {submitted && (
            <div>
              Email: {loginData.email}
              <br />
              Password: {loginData.password}
            </div>
          )}
          <Home />
        </div>
      </div>
    </>
  );
}
