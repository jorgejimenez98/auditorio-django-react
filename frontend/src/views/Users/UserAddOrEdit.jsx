import React from "react";
import { Fade } from "react-awesome-reveal";

// Form Components
import PersonalDataForm from "../../forms/user-add-edit-forms/PersonalDataForm";
import UserRolForm from "../../forms/user-add-edit-forms/UserRolForm.jsx";
import PasswordForm from "../../forms/user-add-edit-forms/PasswordForm.jsx";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

// formik imports
import {
  initialAddValues,
  addSchema,
  styles,
} from "../../settings/formik/user-add-edit-schema";
import { useFormik } from "formik";

const useStyles = makeStyles(styles);

function UserAddOrEdit() {
  const classes = useStyles();

  // Form with the initials values of the personal Data
  const formik = useFormik({
    initialValues: initialAddValues,
    validationSchema: addSchema,
    onSubmit: (values) => {
      console.log("ADD", values);
    },
  });

  return (
    <Fade bottom duration={1000} distance="40px">
      <form onSubmit={formik.handleSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h6 className={classes.cardTitleWhite}>Datos Personales</h6>
              </CardHeader>
              <CardBody>
                <PersonalDataForm formik={formik} />
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h6 className={classes.cardTitleWhite}>
                  Elegir Rol de Usuario
                </h6>
              </CardHeader>
              <CardBody>
                <UserRolForm formik={formik} />
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h6 className={classes.cardTitleWhite}>Contraseña</h6>
              </CardHeader>
              <CardBody>
                <PasswordForm formik={formik} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <div className="text-center mt-4">
          <Button type="submit" color="primary" variant="contained">
            Insertar Usuario
          </Button>
        </div>
      </form>
    </Fade>
  );
}

export default UserAddOrEdit;
