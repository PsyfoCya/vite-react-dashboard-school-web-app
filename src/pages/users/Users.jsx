import React, { useState } from "react";
import "./Users.css";
import { Header } from "../../components/header/Header";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { apiClient } from "../../components/api/ApiClient";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const loadingDelay = 2000;

  useEffect(() => {
    const fetchUsers = async () => {
      setError(null); // Clear any previous errors

      try {
        const response = await apiClient.get(
          "/users/details/all"
        );
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdate = (userID) => {
    navigate(`/user/${userID}`);
  };

  const handleDelete = async (userID) => {
    try {
      await apiClient.delete(`/users/delete/${userID}`);
      setUsers(users.filter((user) => user.id !== userID)); // Update the UI directly
      window.alert(`User ${userID} deleted successfully`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="users__container">
        <div className="users__header">
          <h1>USERS</h1>
          <div>
            <Link className="link__btn" to="/createUser">
              ADD NEW
            </Link>
          </div>
        </div>

        <div className="users__table-container">
          {loading ? (
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
              <p>Failed to fetch Users: {error.message}</p>
            </div>
          ) : users.length > 0 ? (
            <table className="user__table">
              <thead>
                <tr className="users__table-headings">
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Designation</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="user__row">
                    <td>{`${user.firstname} ${user.lastname}`}</td>
                    <td>{user.mobile}</td>
                    <td>{user.role}</td>
                    <td className="user__action-col">
                      <span onClick={() => handleDelete(user.id)}>
                        <FaRegTrashCan />
                      </span>

                      <span
                        className="user__action-icons primary-color"
                        onClick={() => handleUpdate(user.id)}
                      >
                        <GrEdit />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className="no-images-tag">No Users</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
