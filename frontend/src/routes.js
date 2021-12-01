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
import UserAdd from "./views/Users/UserAdd";
import UserEdit from "./views/Users/UserEdit";
import YearPlanFormComponent from "./forms/forms/year-plan/year-plan.form.component";
import WorkOrderFormComponent from "./forms/forms/work-order/work-order.form.component";
import InventoryFormComponent from "./forms/forms/work-sheet/inventory/inventory.form.component";


const dashboardRoutes = [
  // SideBar Routes
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    sidebar: false,
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
    sidebar: false,
  },
  {
    path: "/final-report",
    name: "Reporte",
    component: FinalReportComponent,
    icon: HiDocumentReport,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/deficiency-summary",
    name: "Resumen de deficiencia",
    component: DeficiencySummaryComponent,
    icon: BsGraphDown,
    layout: "/admin",
    sidebar: false,
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
    path: "/word-order/edit/:workOrderId",
    name: "Editar orden de trabajo",
    component: WorkOrderFormComponent,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/new/year-plan",
    name: "Nuevo plan anual",
    component: YearPlanFormComponent,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/new/inventory",
    name: "Nuevo inventario",
    component: InventoryFormComponent,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/user-profile",
    name: "Perfíl de Usuario",
    component: UserProfile,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/users/add",
    name: "Insertar Usuario",
    component: UserAdd,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/users/edit/:userId",
    name: "Editar Usuario",
    component: UserEdit,
    layout: "/admin",
    sidebar: false,
  },
];

export default dashboardRoutes;
