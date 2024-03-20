import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { AuthContext, useAuth } from "../../security/AuthContext";
import { apiClient } from "../api/ApiClient";
import { useParams } from "react-router-dom";


export const Header = () => {
  const { sidebarCollapsed, setSidebarCollapsed, user } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await apiClient.get("/api/users/details");
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    // Fetch details only when not available in the context
    if (!user) {
      fetchUserDetails();
    } else {
      // Use user details from the context if available
      setUserDetails(user);
    }
  }, [user]);

  const handleSideBarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="header__container">
      <GiHamburgerMenu onClick={handleSideBarCollapse} />

      <div className="header__user-details">
        {userDetails && (
          <>
            <img
              src="https://media.istockphoto.com/id/155596999/photo/young-south-african-girl-in-classroom.jpg?s=2048x2048&w=is&k=20&c=UQEeHJug5CdnJK50y61bqSaOG29unDz9hwkdV0U6m88="
              alt="profile picture"
            />
            <p>{userDetails.firstname} {userDetails.lastname}</p>
          </>
        )}
      </div>
    </div>
  );
};
