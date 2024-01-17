import React, { useEffect } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";

export const Header = () => {
  
  // const fetchUser = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/api/blog/getAll");

  //     setBlogs(response.data);

  //     const loadingDelay = 2000;
  //     setTimeout(() => setLoading(false), loadingDelay);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <div className="header__container">
       <GiHamburgerMenu/>
      
      <div className="header__user-details">
        <img
          src="https://media.istockphoto.com/id/155596999/photo/young-south-african-girl-in-classroom.jpg?s=2048x2048&w=is&k=20&c=UQEeHJug5CdnJK50y61bqSaOG29unDz9hwkdV0U6m88="
          alt=""
        />
        <p>Steve Kekane</p>
      </div>
    </div>
  );
};
