import Auth from "../layout/Auth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const PATH = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
};

const publicRoutes = [
  {
    path: PATH.HOME,
    layout: null,
    component: Home,
  },
  {
    path: PATH.REGISTER,
    layout: Auth,
    component: Register,
  },
  {
    path: PATH.LOGIN,
    layout: Auth,
    component: Login,
  },
];

export { PATH, publicRoutes };
