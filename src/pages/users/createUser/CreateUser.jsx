import React from "react";
import CreateUserForm from "../../../components/createUserForm/CreateUserForm";
import { Header } from "../../../components/header/Header";
import "./CreateUser.css"

const CreateUser = () => {
  return (
    <>
      <Header />
      <div className="createUser__container">
        <h1>Create User</h1>
        <CreateUserForm />
      </div>
    </>
  );
};

export default CreateUser;
