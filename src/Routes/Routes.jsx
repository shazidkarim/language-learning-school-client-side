import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyClass from "../Pages/DashBoard/MyClass";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";


  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/instructors',
            element:<Instructors></Instructors>
        },
        {
            path:'/classes',
            element:<Classes></Classes>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
      ]
    },
    {
      path: "/dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:'myclass',
          element:<MyClass></MyClass>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        },
      ]
    },
  ]);