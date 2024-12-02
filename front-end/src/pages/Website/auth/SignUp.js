import axios from "axios";
import React, { useContext, useState } from "react";
import { User } from "../../Website/context/context";
import "./login.css";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setpasswordR] = useState("");
  const [emailerr, setEmailerr] = useState(false);
  const [accept, setAccept] = useState(false);

  // Cookieb 
  const cookie=new Cookies();
  const userNow = useContext(User);

  const nav=useNavigate();
  console.log(userNow);

  async function submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      // send data

      let res = await axios.post(`http://127.0.0.1:8000/api/register`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordR,
      });

      const token = res.data.data.token;
      const userDetails = res.data.data.user;
      cookie.set("Bearer",token)

      userNow.setAuth({ token, userDetails });
      nav("/dashboard")
    } catch (error) {
      if (error.response.status === 422) {
        setEmailerr(error.response.status);
      }
      setAccept(true);
    }
  }

  return (
    <div>
      <Header />
      <div className="parent login">
        <div className="register login">
          <form onSubmit={submit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name.length < 2 && name === " " && accept && (
              <p className="error">username is required </p>
            )}
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailerr === 422 && accept && (
              <p className="error">email has been already taken </p>
            )}
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && accept && (
              <p className="error">password should be more than 8 charc </p>
            )}
            <label htmlFor="rpass">Repeat Password:</label>
            <input
              id="rpass"
              type="password"
              placeholder="repeat password"
              value={passwordR}
              onChange={(e) => setpasswordR(e.target.value)}
            />
            {passwordR !== password && accept && (
              <p className="error">password does not match </p>
            )}
            <div style={{ textAlign: "center" }}>
              <button type="submit">register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
