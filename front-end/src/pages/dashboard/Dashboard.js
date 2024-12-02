import React from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";
import './dash.css';

export default function Dashboard() {
  return (
    <div> 
      <TopBar />
      <div className="content-flex">
        <SideBar />
        <div style={{ width: "80%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
/**   🧐 l outlet teb3a l nested route  Renders the child route's element, if there is one. */
