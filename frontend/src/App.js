import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomizedSnackbars from "./containers/SnackBar";
import "./App.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const AdminLayout = React.lazy(() => import("./layouts/AdminLayout"));

// Pages
const Login = React.lazy(() => import("./views/Login/Login"));
const Page403 = React.lazy(() => import("./views/Page403/Page403"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <CustomizedSnackbars />
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/403"
            name="Page 403"
            render={(props) => <Page403 {...props} />}
          />
          <Route
            path="/"
            name="The Layout"
            render={(props) => <AdminLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
