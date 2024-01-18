import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { AuthContext } from "../security/AuthContext";

export const Header = () => {
  const [user, setUser] = useState(null);

  const { sidebarCollapsed, setSidebarCollapsed } = useContext(AuthContext);

  // console.log(sidebarCollapsed);

  const handleSideBarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };


  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get("http://localhost:8080/users/details/1"); 
      console.log(response.data)
      setUser(response.data);
    };

    fetchUserData();
  }, []);

  return (
    <div className="header__container">
      <GiHamburgerMenu onClick={handleSideBarCollapse}/>

      <div className="header__user-details">
        {/* <img
          src="https://media.istockphoto.com/id/155596999/photo/young-south-african-girl-in-classroom.jpg?s=2048x2048&w=is&k=20&c=UQEeHJug5CdnJK50y61bqSaOG29unDz9hwkdV0U6m88="
          alt=""
        />
        <p>Steve Kekane</p> */}
        {user && (
          <>
            <img
              src="https://media.istockphoto.com/id/155596999/photo/young-south-african-girl-in-classroom.jpg?s=2048x2048&w=is&k=20&c=UQEeHJug5CdnJK50y61bqSaOG29unDz9hwkdV0U6m88="
              alt="profile picture"
            />
            <p>{user.firstname} {user.lastname}</p>
          </>
        )}
      </div>
    </div>
  );
};
