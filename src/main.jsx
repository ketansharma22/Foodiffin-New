import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Pages/Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import Menu from './Pages/Menu/Menu.jsx'
import Aboutus from './Pages/Aboutus/Aboutus.jsx'
import Restaurants from './Pages/Restaurants/Restaurants.jsx'
import Contact from './Pages/contact/Contact.jsx'
import Orderonline from './Pages/orderonline/Orderonline.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[  
      {
        path:"",
        element:<Home/>
      },
      {
        path:"menu",
        element:<Menu/>
      }
      ,{
        path:"about",
        element:<Aboutus/>
      },
      {
        path:"restaurants",
        element:<Restaurants/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"orderonline",
        element:<Orderonline/>
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
