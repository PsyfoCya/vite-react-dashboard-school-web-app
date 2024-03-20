import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { Header } from "../../components/header/Header";
import axios from "axios";
import { apiClient } from "../../components/api/ApiClient";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [isLoadingState, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/all");
      setImages(response.data);
    } catch (error) {
      setError("Network error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async (image2) => {
    // e.preventDefault();
    setLoading(true);
    try {
      if (!image2) {
        setError("No image selected.");
        return;
      }

      const formData = new FormData();
      formData.append("file", image2);
      formData.append("event", "event");

      await apiClient.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      window.alert("Image saved to gallery successfully");

      fetchImages();
      setImage(null);
    } catch (error) {
      console.error(error);
      // setError("Failed to upload image.");
    } finally {
      setLoading(false);
    }
  };

  const handleImg = (e) => {
    if (!e.target.files[0].type.startsWith("image/")) {
      console.log("Invalid file type. Please select an image.");
      setError("Invalid file type. Please select an image.");
      return;
    }
    setError("");
    const getImg = e.target.files[0];
    setImage(getImg);
    handleUpload(getImg);
  };

  const handleDeleteAll = async () => {
    try {
      setLoading(true);
      const response = await apiClient.delete("/delete-all");

      if (response.status === 204) {
        // Images deleted successfully
        setImages([]); // Clear the images array
        window.alert("Gallery cleared successfully");
      } else {
        console.error("Failed to delete images:", response.statusText);
        setError("Failed to delete images. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting images:", error);
      setError("An error occurred while deleting images.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="gallery__container">
        <div className="gallery__heading">
          <h1>GALLERY</h1>
          <form onSubmit={handleUpload}>
            <label htmlFor="file" className="custum-file-upload">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="text">
                <span>Click to upload image</span>
              </div>
              {/* <input id="file" type="file" /> */}
              <input
                id="file"
                name="img"
                type="file"
                accept="image/*"
                onChange={handleImg}
              />
            </label>
            {error && <span style={{ color: "red" }}>{error}</span>}
            {/* <button type="submit">Submit</button> */}
          </form>
        </div>
        {/* <div className="image-container">
          {images.length > 0 ? (
            images.map((image) => (
              <img
                key={image.id}
                src={`data:image/${image.imgType};base64, ${image.img}`}
                alt={image.imgName}
              />
            ))
          ) : isLoadingState ? (
            <div className="center-div">
              <div class="loader">
                <div class="circle">
                  <div class="dot"></div>
                  <div class="outline"></div>
                </div>
                <div class="circle">
                  <div class="dot"></div>
                  <div class="outline"></div>
                </div>
                <div class="circle">
                  <div class="dot"></div>
                  <div class="outline"></div>
                </div>
                <div class="circle">
                  <div class="dot"></div>
                  <div class="outline"></div>
                </div>
              </div>
            </div>
          ) : (
            <h2 className="no-images-tag">No Images...</h2>
          )}
        </div> */}
        <div className="image-container">
          {isLoadingState ? (
            <div className="center-div">
              <div className="loader">
                <div className="circle">
                  <div className="dot"></div>
                  <div className="outline"></div>
                </div>
                <div className="circle">
                  <div className="dot"></div>
                  <div className="outline"></div>
                </div>
                <div className="circle">
                  <div className="dot"></div>
                  <div className="outline"></div>
                </div>
                <div className="circle">
                  <div className="dot"></div>
                  <div className="outline"></div>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="center-div error">
              <p>Failed to fetch images: {error}</p>
            </div>
          ) : images.length > 0 ? (
            images.map((image) => (
              <img
                key={image.id}
                src={`data:image/${image.imgType};base64, ${image.img}`}
                alt={image.imgName}
              />
            ))
          ) : (
            <h2 className="no-images-tag">No Images...</h2>
          )}
        </div>

        {images.length > 0 && (
          <div className="gallery__btn-bottom__container">
            <button onClick={handleDeleteAll}>Clear Gallery</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
