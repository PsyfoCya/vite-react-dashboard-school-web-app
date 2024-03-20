import React, { useEffect, useState } from "react";
import "./CreateBlog.css";
import "../../pages/blog/Posts";
import { Header } from "../header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { apiClient } from "../api/ApiClient";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState(null);
  const [imgName, setImageName] = useState(null);
  const [imgType, setImgType] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  apiClient.interceptors.request.use((config) => {
    console.log("intercepting and adding a token");
    // console.log(jwtToken);
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  });


  const handleSubmit = async (e) => {
    console.log("token " + localStorage.getItem("token"))
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("data", content);
 
    if (img) {
      // Append the new image only if it's selected
      formData.append("img", img);
    }
  

    // console.log("image " + img);

    if (id) {
      console.log(formData);
      try {
        if (!title.trim() || !content.trim() || !img) {
          window.alert("Title, Content, and Image cannot be empty!");
          return;
        }

        // Validation for title and content length
        if (title.length > 100) {
          window.alert("Title cannot exceed 100 characters!");
          return;
        }

        if (content.length > 1000) {
          window.alert("Content cannot exceed 1000 characters!");
          return;
        }

        const response = await apiClient.put(
          "/api/blog/" + id,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        window.alert("Blog Updated Successfully");
        console.log(response.data);
        navigate("/posts");

        // Handle success
      } catch (error) {
        console.error("Error:", error);
        // Handle error
        console.log(error.data);
      }
    } else {
      try {
        console.log(formData);
        if (!title.trim() || !content.trim() || !img) {
          window.alert("Title, Content, and Image cannot be empty!");
          return;
        }

       

        const response = await apiClient.post(
          // "/api/blog/category/1/user/1",
          "/api/blog/category/1",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        window.alert("Blog Posted Successfully");
        console.log(response.data);
        navigate("/posts");

        // Handle success
      } catch (error) {
        console.error("Error:", error);
        // Handle error
        console.log(error.data);
      }
    }
  };

  //useEffect to get all the data for a specific post by id
  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        if (id) {
          const response = await apiClient.get(
            "/api/blog/" + id
          );
          // console.log(response.data);
          setTitle(response.data.title);
          setContent(response.data.content);
          setImageName(response.data.imgName);
          setImgType(response.data.imgType);
          setImg(`data:multipart/form-data;base64,${response.data.img}`);
          // console.log(response.data.img);
          // setContentType(response.data.contentType);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogById();
  }, [id]);

  // const handleImg = (e) => {
  //   const getImg = e.target.files[0];
  //   setImg(getImg);
  //   console.log("image " + img);
  // };

  const handleImg = (e) => {
    const getImg = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };
    if (getImg) {
      reader.readAsDataURL(getImg);
      setImgType(getImg.type);
      setImageName(getImg.name);
    }
  };
  

  const pageTitle = () => {
    if (id) {
      return <h1>Edit Blog</h1>;
    } else {
      return <h1>Create Blog</h1>;
    }
  };

  return (
    <>
      <Header />
      <div className="createBlog__container">
        {pageTitle()}
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Post Title</label>
              <br />
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label>Post Body</label>
              <br />
              <textarea
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="create-blog__textarea"
              />
            </div>
            <br />
            <div>
              <label>Post Image</label>
              <br />
              {id && img !== null && (
                <img
                  // src={`data:multipart/form-data;base64,${img}`}
                  src={img}
                  width={"50px"}
                  height={"50px"}
                  alt={imgName}
                />
              )}
              <input
                name="img"
                type="file"
                accept="image/*"
                onChange={handleImg}
              />
            </div>
            <br />
            <button type="submit">Save Blog</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;

