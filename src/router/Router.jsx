import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/home/shop/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <PrivateRouter><Menu/></PrivateRouter>
        },
    ],
  },
  {
    path: "/signup",
    element: <Signup/>
  }
]);

export default router;
