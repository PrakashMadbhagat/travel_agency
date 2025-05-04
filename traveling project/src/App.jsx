import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/contact";

import AdminLogin from "./pages/admin/Adminlogin";
import AdminLayout from "./components/admin/Layout";
import LoginLayout from "./components/admin/LoginLayout";
import SetPassword from './pages/admin/Forgotpassword'
import Dashboard  from "./pages/admin/Dashboard";
import Hoteltable from './pages/admin/Hoteltable';
import CarBookingTable from './pages/admin/Carbookings';
import BusBookingTable from './pages/admin/BusBookingTable';
import ProfileSetting from './pages/admin/ProfileSetting';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap routes inside Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/booking", element: <Booking /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path : '/login',
    element : <LoginLayout/>,
    children : [
      {path : '/login', element : <AdminLogin/>},
      {path : '/login/SetPassword', element : <SetPassword/>}
    ]
  },
  {
    path : '/admin',
    element : <AdminLayout/>,
    children : [
      {path : '/admin', element : <Dashboard/>},
      {path : '/admin/Dashboard', element : <Dashboard/>},
      {path : '/admin/Hotel', element : <Hoteltable/>},
      {path : '/admin/Car', element : <CarBookingTable/>},
      {path : '/admin/Bus', element : <BusBookingTable/>},
      {path : '/admin/Profile', element : <ProfileSetting/>},

    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
