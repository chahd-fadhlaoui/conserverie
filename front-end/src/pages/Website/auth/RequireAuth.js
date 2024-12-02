import React, { useContext } from "react";
import { User } from "../context/context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const user = useContext(User);
  const location = useLocation(); /* useLocation tjib l massar eli ena fih */ 
  console.log(user);
  return user.auth.userDetails ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} replace to="/Login" />
  );
}
