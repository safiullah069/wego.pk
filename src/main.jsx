import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TravelBlog from './components/TravelBlog.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "hotels",
        element: <div>Hotels</div>,
      },
      {
        path: "flights",
        element: <div>Flights</div>,
      },
      {
        path: "business",
        element: <div>Page Under Development</div>,
      },
      
    ],
  },
  {
    path: "/travel-blog",
    element: <TravelBlog />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
