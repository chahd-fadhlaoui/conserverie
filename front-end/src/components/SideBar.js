import React from "react";
import {  NavLink } from "react-router-dom";

export default function SideBar() {
 
  return (
    <div className="side-bar">
      <NavLink
        activeClassName="active"
        to="/dashboard/users"
        className="item-link"
      >
        <i class="fa-solid fa-users"></i> users
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/dashboard/user/create"
        className="item-link"
      >
        <i class="fa-solid fa-user-plus"></i> New User
      </NavLink>
    </div>
  );
}
