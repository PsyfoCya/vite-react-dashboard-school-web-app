import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Posts from "./pages/blog/Posts.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Users from "./pages/users/Users.jsx";
import AuthProvider from "./components/security/AuthContext.jsx";
import CreateBlog from "./components/createBlog/CreateBlog.jsx";
import CreateUser from "./pages/users/createUser/createUser.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/createUser",
          element: <CreateUser />,
        },
        {
          path: "/createBlog",
          element: <CreateBlog />,
        },
        {
          path: "/editBlog/:id",
          element: <CreateBlog />,
        },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
