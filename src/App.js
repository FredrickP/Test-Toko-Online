import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./tampilan/Main";
import Home from "./tampilan/Home"
import Login from "./tampilan/Login";
import Store from "./tampilan/Store";
import ShopingCart from "./tampilan/ShopingCart";

import './Global.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main name="home" layout={<Home />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/store",
    element: <Main name="store" layout={<Store />} />,
  },
  {
    path: "/shoping-cart",
    element: <Main name="shoping-cart" layout={<ShopingCart />} />,
  },
  
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
