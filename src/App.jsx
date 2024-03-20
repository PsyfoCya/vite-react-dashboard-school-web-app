import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Posts from "./pages/blog/Posts.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Users from "./pages/users/Users.jsx";
import AuthProvider, { useAuth } from "./security/AuthContext.jsx";
import CreateBlog from "./components/createBlog/CreateBlog.jsx";
import CreateUser from "./pages/users/createUser/createUser.jsx";
import Login from "./pages/login/Login.jsx";

function App() {
  const AuthenticatedRoute = ({ children }) => {
    const authContext = useAuth();
    if (authContext.isAuthenticated) {
      return children;
    }
    return <Navigate to="/login" />;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <AuthenticatedRoute>
          <Sidebar />
        </AuthenticatedRoute>
      ),
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/posts",

          element: (
            <AuthenticatedRoute>
              <Posts />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/about",
          element: (
            <AuthenticatedRoute>
              <About />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/contact",
          element: (
            <AuthenticatedRoute>
              <Contact />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/gallery",
          element: (
            <AuthenticatedRoute>
              <Gallery />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/users",
          element: (
            <AuthenticatedRoute>
              <Users />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/createUser",
          element: (
            <AuthenticatedRoute>
              <CreateUser />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/createBlog",
          element: (
            <AuthenticatedRoute>
              <CreateBlog />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/editBlog/:id",
          element: (
            <AuthenticatedRoute>
              <CreateBlog />
            </AuthenticatedRoute>
          ),
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
