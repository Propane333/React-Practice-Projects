import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Electronics from './components/Electronics/Electronics.jsx'
import Clothes from './components/Clothes/Clothes.jsx'
import Contact from './components/Contact/Contact.jsx'
import Cart from './components/Cart/Cart.jsx'
import Login from './components/Login/Login.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[{
      path:'',
      element:<Home />
    },
    {
      path:'about',
      element:<About />
    },
    {
      path:'electronics',
      element:<Electronics />
    },
    {
      path:'clothes',
      element:<Clothes />
    },
    {
      path:'contact',
      element:<Contact />
    },
    {
      path:'cart',
      element:<Cart />
    }
    ,
    {
      path:'login',
      element:<Login />
    }
  
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
