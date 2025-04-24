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
      {path : '/admin/Dashboard', element : <Dashboard/>}
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
