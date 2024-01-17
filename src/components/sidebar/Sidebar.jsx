import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiCommentAlt } from "react-icons/tfi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`container ${sidebarCollapsed ? "collapsed" : ""}`}>
      <div>{sidebarCollapsed ? <GiHamburgerMenu className="hamburger-icon" onClick={toggleSidebar}/> : ""}</div>
      <nav className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar__logo" onClick={toggleSidebar}>
          TSS
        </div>
        <div className="sidebar__links top-1">
          <NavLink to="/">
            <h3>
              <LuLayoutDashboard /> DASHBOARD
            </h3>
          </NavLink>

          <NavLink to="/posts">
            <h3>
              <TfiCommentAlt /> BLOG
            </h3>
          </NavLink>

          <NavLink to="/about">
            <h3>
              <AiOutlineInfoCircle />
              ABOUT
            </h3>
          </NavLink>

          <NavLink to="/contact">
            <h3>
              <MdOutlineContacts />
              CONTACT
            </h3>
          </NavLink>

          <NavLink to="/gallery">
            <h3>
              <SlPicture />
              GALLERY
            </h3>
          </NavLink>

          <NavLink to="/users">
            <h3>
              <FiUsers />
              USERS
            </h3>
          </NavLink>
        </div>
        <div className="sidebar__links bottom-links">
          <NavLink>
            <h3>
              <BiLogOut />
              LOG OUT
            </h3>
          </NavLink>

          <NavLink>
            <h3>
              <FiSettings />
              SETTINGS
            </h3>
          </NavLink>
        </div>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
