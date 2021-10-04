// Icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile";
import UserList from "./views/Users/UserList.js";

const dashboardRoutes = [
  // SideBar Routes
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/user-list",
    name: "Listado de Usuarios",
    component: UserList,
    icon: Person,
    layout: "/admin",
    sidebar: true,
  },
  // Other Routes
  {
    path: "/user-profile",
    name: "Perfíl de Usuario",
    component: UserProfile,
    layout: "/admin",
    sidebar: false,
  },
];

export default dashboardRoutes;
