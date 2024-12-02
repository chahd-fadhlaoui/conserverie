import React, { useContext, useEffect, useState } from "react";
import { User } from "../../Website/context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState(""); // Renommé pour la cohérence
  const [emailErr, setEmailErr] = useState(false); // Renommé pour la cohérence
  const [accept, setAccept] = useState(false);

  // Cookie
  const context = useContext(User);
  const token = context.auth.token;

  const nav = useNavigate();
  const id = window.location.pathname.split("/").slice(-1)[0];
  console.log(id);

  useEffect(() => {
    // Ajout de `id` dans les dépendances pour relancer l'effet si `id` change
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          setName(data[0].name);
          setEmail(data[0].email);
        }
      });
  }, [id]);

  async function submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      // Envoi des données
      await axios.post(
        `http://127.0.0.1:8000/api/user/update/${id}`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        },
        { headers: { Authorization: "Bearer " + token } }
      );

      nav("/dashboard/users");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setEmailErr(true); // Change la variable pour indiquer une erreur
      }
      setAccept(false); // Réinitialiser accept si l'envoi échoue
    }
  }

  return (
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
          {name.trim() === "" && accept && (
            <p className="error">Username is required</p>
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
          {emailErr && accept && (
            <p className="error">Email has already been taken</p>
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
            <p className="error">Password should be more than 8 characters</p>
          )}
          <label htmlFor="rpass">Repeat Password:</label>
          <input
            id="rpass"
            type="password"
            placeholder="repeat password"
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
          />
          {passwordR !== password && accept && (
            <p className="error">Passwords do not match</p>
          )}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Update User</button>
          </div>
        </form>
      </div>
    </div>
  );
}
