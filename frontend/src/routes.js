// Icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import {
  AiFillFilePpt,
  FaFileSignature,
  GiFullFolder,
  HiDocumentReport,
  BsGraphDown,
  FaFileInvoice,
} from "react-icons/all";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import UserProfile from "./views/UserProfile/UserProfile";
import UserList from "./views/Users/UserList";
import DeficiencySummaryComponent from "./views/deficiency-summary/deficiency-summary.component";
import FileComponent from "./views/file/file.component";
import FinalReportComponent from "./views/final-report/final-report.component";
import WorkOrderComponent from "./views/work-order/work-order.component";
import WorkSheetComponent from "./views/work-sheet/work-sheet.component";
import YearPlanComponent from "./views/year-plan/year-plan.component";
import UserAddOrEdit from "./views/Users/UserAddOrEdit";

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
    path: "/year-plan",
    name: "Plan anual",
    component: YearPlanComponent,
    icon: AiFillFilePpt,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/work-order",
    name: "Orden de trabajo",
    component: WorkOrderComponent,
    icon: FaFileSignature,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/file",
    name: "Expediente",
    component: FileComponent,
    icon: GiFullFolder,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/final-report",
    name: "Reporte",
    component: FinalReportComponent,
    icon: HiDocumentReport,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/deficiency-summary",
    name: "Resumen de deficiencia",
    component: DeficiencySummaryComponent,
    icon: BsGraphDown,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/work-sheet",
    name: "Plantilla de trabajo",
    component: WorkSheetComponent,
    icon: FaFileInvoice,
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
  {
    path: "/users/form",
    name: "Insertar o Editar Usuario",
    component: UserAddOrEdit,
    layout: "/admin",
    sidebar: false,
  },
];

export default dashboardRoutes;
