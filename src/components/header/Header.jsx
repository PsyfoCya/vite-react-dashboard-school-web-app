import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  return (
    <div className="header__container">
      <GiHamburgerMenu />
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
