// import "./App.css";
// import React from "react";
// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import Sidebar from "./components/sidebar/Sidebar";
// import Dashboard from "./pages/dashboard/Dashboard.jsx";
// import Posts from "./pages/blog/Posts.jsx";
// import About from "./pages/about/About.jsx";
// import Contact from "./pages/contact/Contact.jsx";
// import Gallery from "./pages/gallery/Gallery.jsx";
// import Users from "./pages/users/Users.jsx";
// import AuthProvider, { useAuth } from "./security/AuthContext.jsx";
// import CreateBlog from "./components/createBlog/CreateBlog.jsx";
// import CreateUser from "./pages/users/createUser/createUser.jsx";
// import Login from "./pages/login/Login.jsx";
// import SignUp from "./pages/signup/SignUp.jsx";

// function App() {
//   const AuthenticatedRoute = ({ children }) => {
//     const authContext = useAuth();
//     if (authContext.isAuthenticated) {
//       return children;
//     }
//     return <Navigate to="/login" />;
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "signup",
//       element: <SignUp/>
//     },
//     {
//       path: "/",
//       element: (
//         <AuthenticatedRoute>
//           <Sidebar />
//         </AuthenticatedRoute>
//       ),
//       // errorElement: <ErrorPage />,
//       children: [
//         {
//           index: true,
//           element: (
//             <AuthenticatedRoute>
//               <Dashboard />
//             </AuthenticatedRoute>
//           ),
//         },
//         {
//           path: "/posts",

//           element: (
//             <AuthenticatedRoute>
//               <Posts />
//             </AuthenticatedRoute>
//           ),
//         },
//         {
//           path: "/about",
//           element: (
//             <AuthenticatedRoute>
//               <About />
//             </AuthenticatedRoute>
//           ),
//         },
//         {
//           path: "/contact",
//           element: (
//             <AuthenticatedRoute>
//               <Contact />
//             </AuthenticatedRoute>
//           ),
//         },
//         {
//           path: "/gallery",
//           element: (
//             <AuthenticatedRoute>
//               <Gallery />
//             </AuthenticatedRoute>
//           ),
//         },
//         {
//           path: "/users",
//           element: (
//             <AuthenticatedRoute>
//               <Users />
//             </AuthenticatedRoute>
//           ),
//         },
//         {
//           path: "/createUser",
//           element: (
//             <AuthenticatedRoute>
//               <CreateUser />
//             </AuthenticatedRoute>
//           ),
//         },
//         {
//           path: "/createBlog",
//           element: (
//             <AuthenticatedRoute>
//               <CreateBlog />
//             </AuthenticatedRoute>
//           ),
//         },
//         {
//           path: "/editBlog/:id",
//           element: (
//             <AuthenticatedRoute>
//               <CreateBlog />
//             </AuthenticatedRoute>
//           ),
//         },
//       ],
//     },
//   ]);

//   return (
//     <>
//       <AuthProvider>
//         <RouterProvider router={router} />
//       </AuthProvider>
//     </>
//   );
// }

// export default App;

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
import AuthProvider from "./security/AuthContext.jsx";
import CreateBlog from "./components/createBlog/CreateBlog.jsx";
import CreateUser from "./pages/users/createUser/createUser.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Unauthorized from "./pages/unathorized/Unauthorized.jsx";
import ProtectedRoute from "./security/ProtectedRoute.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Sidebar />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/posts",
          element: (
            <ProtectedRoute allowedRoles={["ROLE_CONTENT_CREATOR"]}>
              <Posts />
            </ProtectedRoute>
          ),
        },
        {
          path: "/about",
          element: (
            <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "/contact",
          element: (
            <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
              <Contact />
            </ProtectedRoute>
          ),
        },
        {
          path: "/gallery",
          element: (
            <ProtectedRoute allowedRoles={["ROLE_CONTENT_CREATOR"]}>
              <Gallery />
            </ProtectedRoute>
          ),
        },
        {
          path: "/users",
          element: (
            <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
              <Users />
            </ProtectedRoute>
          ),
        },
        {
          path: "/createUser",
          element: (
            <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
              <CreateUser />
            </ProtectedRoute>
          ),
        },
        {
          path: "/createBlog",
          element: (
            <ProtectedRoute allowedRoles={["ROLE_CONTENT_CREATOR"]}>
              <CreateBlog />
            </ProtectedRoute>
          ),
        },
        {
          path: "/editBlog/:id",
          element: (
            <ProtectedRoute allowedRoles={["ROLE_CONTENT_CREATOR"]}>
              <CreateBlog />
            </ProtectedRoute>
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
