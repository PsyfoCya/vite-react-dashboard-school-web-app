import React, { useState } from "react";
import "./About.css";
import { Header } from "../../components/header/Header";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState();
  const [vision, setVision] = useState();
  const [mission, setMission] = useState();

  const handleAbout = async () => {
    try {
      const aboutDescriptionElement = document.getElementById("about");
      const aboutDescription = aboutDescriptionElement.value;

      // Validate if the input is not more than 255 characters
      if (aboutDescription.length > 500) {
        window.alert("About description should not exceed 500 characters.");
        return; // Exit the function if validation fails
      }

      if (aboutDescription.length == 0) {
        window.alert("About should have text before saving.");
        return; // Exit the function if validation fails
      }

      const response = await axios.post("http://localhost:8080/about/save", {
        aboutDescription: aboutDescription,
      });

      setAbout(response.data);
      window.alert("About Saved Successfully");

      // Clear the input field after successful save
      aboutDescriptionElement.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  const handleMission = async () => {
    try {
      const missionContentElement = document.getElementById("mission");
      const missionContent = missionContentElement.value;

      const missionFileInputElement = document.getElementById("mission-img");
      const missionFileInput = missionFileInputElement;
      const missionFile = missionFileInput.files[0];

      const formData = new FormData();
      formData.append("content", missionContent);
      formData.append("file", missionFile);

      // Validate content length
      if (missionContent.length > 255) {
        window.alert("Mission content should not exceed 255 characters.");
        return;
      }

      if (missionContent.length == 0) {
        window.alert("Mission content should have some text before saving.");
        return;
      }

      // Validate file input
      if (!missionFile) {
        window.alert("Please select a file Our Mission description.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/mission/createOrReplace",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMission(response.data);
      window.alert("Mission data Saved Successfully");

      // Empty the fields after successful save
      missionFileInputElement.value = null;
      missionContentElement.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  const handleVision = async () => {
    try {
      const visionContentElement = document.getElementById("vision");
      const visionContent = visionContentElement.value;

      const visionFileInputElement = document.getElementById("vision-img");
      const visionFileInput = visionFileInputElement;
      const visionFile = visionFileInput.files[0];

      // Validate content length
      if (visionContent.length > 255) {
        window.alert("Vision content should not exceed 255 characters.");
        return;
      }

      if (visionContent.length == 0) {
        window.alert("Vision content should text before you can save.");
        return;
      }

      // Validate file input
      if (!visionFile) {
        window.alert("Please select a file for Our Vision description.");
        return;
      }

      const formData = new FormData();
      formData.append("content", visionContent);
      formData.append("file", visionFile);

      const response = await axios.post(
        "http://localhost:8080/vision/createOrReplace",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setVision(response.data);
      window.alert("Vision data Saved Successfully");

      // Clear the input fields after successful save
      visionContentElement.value = "";
      visionFileInput.value = null;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="about__container">
        <h1>ABOUT</h1>
        <div className="about__content">
          <div className="Content">
            <p>About us</p>
            <textarea name="about" id="about" cols="30" rows="10"></textarea>
            <button onClick={handleAbout}>SAVE</button>
          </div>
          <div className="Content">
            <p>Our Mission</p>
            <textarea
              name="mission"
              id="mission"
              cols="30"
              rows="10"
            ></textarea>
            <input type="file" id="mission-img" />
            <button onClick={handleMission}>SAVE</button>
          </div>
          <div className="Content">
            <p>Our Vision</p>
            <textarea name="vision" id="vision" cols="30" rows="10"></textarea>
            <input type="file" id="vision-img" />
            <button onClick={handleVision}>SAVE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
