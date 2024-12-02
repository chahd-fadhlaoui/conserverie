import axios from "axios";
import React, { useContext, useState } from "react";
import { User } from "../../Website/context/context";
import "./login.css";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [accept, setAccept] = useState(false);

  const userNow = useContext(User);
  //Cookie
  const cookie = new Cookies();

  const nav = useNavigate();
  console.log(userNow);

    async function submit(e) {
      e.preventDefault();
      setAccept(true);
      try {
        // send data

        let res = await axios.post(`http://127.0.0.1:8000/api/login`, {
          email: email,
          password: password,
        });

        const token = res.data.data.token;
        const userDetails = res.data.data.user;
        cookie.set("Bearer", token);

        userNow.setAuth({ token, userDetails });

       if (email === "admin@gmail.com") {
        nav("/dashboard"); // Navigate to dashboard if admin
      } else {
        nav("/"); // Navigate to website for normal users
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErr(error.response.status);
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
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

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

            <div style={{ textAlign: "center" }}>
              <button type="submit">login</button>
            </div>
            {err && accept && (
              <p className="error"> wrong email or password </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
