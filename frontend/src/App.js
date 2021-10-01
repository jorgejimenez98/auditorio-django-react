import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomizedSnackbars from './containers/SnackBar';
import './App.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Dashbard = React.lazy(() => import('./components/Dashbard'));

// Pages
const Login = React.lazy(() => import('./components/Login'));
const Page403 = React.lazy(() => import('./components/Page403'));

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
            name="Dashbard"
            render={(props) => <Dashbard {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
