import React from "react";
import SignUp from "./pages/Website/auth/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Website/auth/Login";
import Home from "./pages/Website/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/users/Users";
import CreateUser from "./pages/dashboard/users/CreateUser";
import RequireAuth from "./pages/Website/auth/RequireAuth";
import PersistLogin from "./pages/Website/auth/PersistLogin";
import UpdateUser from "./pages/dashboard/users/UpdateUser";
import Contact from "./pages/Website/Contact";
import PrendreRendezvous from "./pages/Website/PrendreRendezvous";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prendre-rendezvous" element={<PrendreRendezvous />} />

        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UpdateUser/>} />
              <Route path="user/create" element={<CreateUser />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
/*<Route path="/dashboard" element={<Dashboard/>}> 
        <Route path="users"  element={<Users/>}/> 
        </Route>

        hedhi esmha nested route yaani route fi west l route w aalech naamlouha ? 
        bech k nezel 3la users mayheznich ll route jedida yheli l page fi nafes l safe7a  🧐
*/
