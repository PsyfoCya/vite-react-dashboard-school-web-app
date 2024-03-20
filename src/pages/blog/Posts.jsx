import React from "react";
import "./Posts.css";
import { Header } from "../../components/header/Header";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import truncateText from "../../utils/truncateText";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../components/api/ApiClient";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoadingState, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await apiClient.get("/api/blog/getAll");
      setBlogs(response.data);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await apiClient.delete(
        `/api/blog/${id}`
      );

      if (response.data.success) {
        alert("Blog posting " + id + "deleted successfully")
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.blogId !== id));
      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editBlog/${id}`);
  };

  return (
    <>
      <Header />
      <div className="posts__container">
        <div className="posts__heading">
          <h1>OUR STORIES</h1>
          <div>
            <Link className="link__btn" to="/createBlog">
              CREATE POST
            </Link>
          </div>
        </div>

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
            <p>Failed to fetch blogs: {error.message}</p>
          </div>
        ) : blogs.length > 0 ? (
          <ul className="posts__cards__container">
            {blogs.map((blog) => (
              <li
                key={blog.blogId}
                style={{ listStyle: "none" }}
                className="card"
              >
                <div className="card-top">
                  <img
                    src={`data:${blog.contentType};base64,${blog.img}`}
                    alt={blog.imgName}
                    className="image_custom"
                  />
                </div>
                <div className="card-bottom">
                  <h3>{blog.title}</h3>
                  <div className="divider"></div>
                  <p>{truncateText(blog.content, 30)}</p>
                  <div className="card__buttons">
                    <button onClick={() => handleEdit(blog.blogId)}>
                      <FiEdit />
                    </button>
                    <button
                      className="red"
                      onClick={() => handleDelete(blog.blogId)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="no-images-tag">No Blogs</h2>
        )}
      </div>
    </>
  );
};

export default Posts;
