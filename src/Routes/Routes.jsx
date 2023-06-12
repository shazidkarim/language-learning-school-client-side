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
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import ManageClass from "../Pages/DashBoard/ManageClass/ManageClass";
import Payment from "../Pages/DashBoard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyAddedClass from "../Pages/DashBoard/MyAddedClass/MyAddedClass";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import MyEnrolledClass from "../Pages/DashBoard/MyEnrolledClass/MyEnrolledClass";


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
        {
          path:'addclass',
          element:<AddClass></AddClass>
        },
        {
          path:'myaddclass',
          element:<MyAddedClass></MyAddedClass>
        },
        {
          path:'manageclass',
          element:<ManageClass></ManageClass>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'myenrolledclass',
          element:<MyEnrolledClass></MyEnrolledClass>
        },
      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    },
  ]);