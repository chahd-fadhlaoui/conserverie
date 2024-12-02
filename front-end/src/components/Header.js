import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import logo from "../assests/cn.png";

export default function Header() {
  const cookie = new Cookies();
  const token = cookie.get("Bearer");
  const [isAdmin, setIsAdmin] = useState(false);

  // Use GET method to check if user email matches
  useEffect(() => {
    if (token) {
      try {
        // Decode JWT token manually using atob
        const base64Url = token.split('.')[1]; // Get the payload part of the JWT
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Decode the base64 URL encoding
        const decodedToken = JSON.parse(atob(base64)); // Decode and parse the JSON string

        // Assuming the token has an 'email' field
        const userEmail = decodedToken.email; // Access the email from decoded token

        // Replace with your condition: check if email matches a specific value
        const authorizedEmail = "admin@example.com"; // Example email to check
        if (userEmail === authorizedEmail) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, [token]);

  async function handleLogout() {
    await axios.post(
      "http://127.0.0.1:8000/api/logout",
      null,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    cookie.remove("Bearer");
    window.location.pathname = "/";  // Redirect to home or login page
  }

  // Styles in-line
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "60px",
  };

  const logoStyle = {
    width: "90px",
    height: "65px",
    marginRight: "1rem",
  };

  const logoTextStyle = {
    fontWeight: "bold",
    color: "#333",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  };

  const navLinksStyle = {
    display: "flex",
    gap: "2rem",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#333",
    marginTop: "10px",
    fontWeight: "500",
    transition: "color 0.3s ease-in-out",
  };

  const authLinksStyle = {
    display: "flex",
    gap: "1rem",
    height: "40px",
    marginTop: "20px",
  };

  const authLinkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  };

  const logoutLinkStyle = {
    backgroundColor: "#ff5a5f",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    textAlign: "center",
    cursor: "pointer",
  };

  const registerLoginButtonStyle = {
    backgroundColor: "#fff",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s ease-in-out",
  };

  const registerLoginButtonHoverStyle = {
    backgroundColor: "#6FBD9F",
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <Link to="/" style={navLinkStyle}>
          <h1 style={logoTextStyle}>Conserverie des repas</h1>
        </Link>
      </div>
      <nav style={navStyle}>
        <div style={navLinksStyle}>
          <Link to="/contact" style={navLinkStyle}>
            <h2>Contact</h2>
          </Link>
          <Link to="/prendre-rendezvous" style={navLinkStyle}>
            <h2>Prendre rendez-vous</h2>
          </Link>
        </div>
        <div style={authLinksStyle}>
          {!token ? (
            <>
              <Link
                to="/register"
                style={{ ...registerLoginButtonStyle, ...registerLoginButtonHoverStyle }}
              >
                Register
              </Link>
              <Link
                to="/login"
                style={{ ...registerLoginButtonStyle, ...registerLoginButtonHoverStyle }}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              {isAdmin && (
                <Link to="/dashboard" style={authLinkStyle}>
                  Dashboard
                </Link>
              )}
              <div style={logoutLinkStyle} onClick={handleLogout}>
                Logout
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
