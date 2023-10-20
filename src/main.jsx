import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Posts from './pages/blog/Posts.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Gallery from './pages/gallery/Gallery.jsx'
import Users from './pages/users/Users.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: '/posts',
        element: <Posts/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/gallery',
        element: <Gallery/>,
      },
      {
        path: '/users',
        element: <Users/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
