import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Mobiles from './components/Mobile/Mobiles'
import ViewDetails from './components/Mobile/ViewDetails'
import CartPage from './components/CartPage'
import { cartData } from './components/loaders/getMobileCart'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'mobile',
        element:<Mobiles/>
      },
      {
        path:'details/:id',
        element:<ViewDetails/>,
        loader:()=>fetch('/Mobiles.json')
      },
      {
        path:'cart',
        element:<CartPage/>,
        loader:cartData
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
