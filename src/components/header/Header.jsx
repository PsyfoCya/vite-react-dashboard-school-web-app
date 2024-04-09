import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../security/AuthContext";

import { apiClient } from "../api/ApiClient";

export const Header = () => {
  const { sidebarCollapsed, setSidebarCollapsed, user } = useAuth();
  

  

  const handleSideBarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="header__container">
      <GiHamburgerMenu onClick={handleSideBarCollapse} />

      <div className="header__user-details">
        {user && (
          <>
            <img
              src="https://media.istockphoto.com/id/155596999/photo/young-south-african-girl-in-classroom.jpg?s=2048x2048&w=is&k=20&c=UQEeHJug5CdnJK50y61bqSaOG29unDz9hwkdV0U6m88="
              alt="profile picture"
            />
            <p>
              {user.firstname} {user.lastname}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
