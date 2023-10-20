import React from "react";
import "./About.css";
import { Header } from "../../components/header/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="about__container">
        <h1>ABOUT</h1>
        <div className="about__content">
          <div className="Content">
            <p>About us</p>
            <textarea name="about" id="about" cols="30" rows="10"></textarea>
            <button>SAVE</button>
          </div>
          <div className="Content">
            <p>Our Mission</p>
            <textarea
              name="mission"
              id="mission"
              cols="30"
              rows="10"
            ></textarea>
            <button>SAVE</button>
          </div>
          <div className="Content">
            <p>Our Vision</p>
            <textarea name="vision" id="vision" cols="30" rows="10"></textarea>
            <button>SAVE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
