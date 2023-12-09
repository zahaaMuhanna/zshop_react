import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/web/cart/Cart.jsx";
import Categories from "../components/web/categories/Categories.jsx";
import CategoriesDetailes from "../components/web/categories/CategoriesDetailes.jsx";
import Home from "../components/web/home/Home.jsx";
import Login from "../components/web/login/Login.jsx";
import Product from "../components/web/product/Product.jsx";
import Register from "../components/web/register/Register.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import Layout from "./Layout.jsx";
import ProtectedRoute from "../components/web/protectedRoute/ProtectedRoute.jsx";
import Profile from "../components/web/profile/Profile.jsx";
import SendCode from "../components/web/auth/SendCode.jsx";
import ForgotPassword from "../components/web/auth/ForgotPassword.jsx";
import Info from "../components/web/profile/Info.jsx";
import Contact from "../components/web/profile/Contact.jsx";

export const router = createBrowserRouter([
    {
      path:'/',
       element : <Layout />,
       children : [
        {
            path:'register',
            element: <Register />
        },
        {
          path:'login',
          element: 
            <Login/>
       },
       {
        path:'sendCode',
        element: <SendCode />
       },
       {
        path:'forgotpassword',
        element: <ForgotPassword />
       },
        {
          path:'/',
          element :<Home />
        },
        {
          path:'categories',
          element:<Categories />
        },
        {
          path:'products/category/:categoryId',
          element:<CategoriesDetailes />
        },
        {
          path:'product/:productId',
          element:<Product />
        },
        {
          path:'profile',
          element: 
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>,
          children:[
            {
              index:true,
              element:<Info />
            },
            {
              path:'contact',
              element:<Contact />
            }
          ]
        },
        {
          path:'/cart',
          element :
          <ProtectedRoute>
              <Cart />
          </ProtectedRoute>
        },
        {
          path:'*',
          element: <h2>Page Not Found --Web</h2>
        }
       ]
    },
    {
      path:'/dashboard',
       element : <DashboardLayout />,
       children : [
        // {
        //   path:'home',
        //   element :<HomeDashboard />
        // },
        // {
        //   path:'categories',
        //   element:<CategoriesDashboard />
        // },
        {
          path:'*',
          element: <h2>Page Not Found --Dashboard</h2>
        }
       ]
    },
    
  ]);