import React from "react";
import { Button } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";

const Page403 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">403</h1>
              <h4 className="pt-3">Error. Acceso denegado.</h4>
              <p className="text-muted float-left">
                Usted no tiene permisos para acceder a esta Url del sistema
              </p>
            </div>
            <div className="text-center">
              <LinkContainer to="/">
                <Button color="info">Volver al Sistema</Button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page403;
