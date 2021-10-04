import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
// Formik
import { useFormik } from "formik";
import {
  initialPersonalData,
  personalDataSchema,
  passwordInitialValues,
  passwordSchema,
} from "../../settings/formik/user-profile-schema";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // User Login
  const { userInfo } = useSelector((state) => state.user.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  // Form with the initials values of the personal Data
  const dataFormik = useFormik({
    initialValues: initialPersonalData,
    validationSchema: personalDataSchema,
    onSubmit: (values) => {
      console.log("Values", values);
    },
  });

  // Form with the initials values of the personal Data
  const passFormik = useFormik({
    initialValues: passwordInitialValues,
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      console.log("Values", values);
    },
  });

  // Init Profile Values
  initialPersonalData.name = userInfo?.name;
  initialPersonalData.email = userInfo?.email;

  return (
    <Fade bottom duration={1000} distance="40px">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Editar Datos Personales
              </h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={dataFormik.handleSubmit}>
                {/* Personal Data */}
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="name"
                      name="name"
                      label="Nombre Completo"
                      variant="standard"
                      fullWidth
                      autoFocus
                      value={dataFormik.values.name}
                      onChange={dataFormik.handleChange}
                      error={
                        dataFormik.touched.name &&
                        Boolean(dataFormik.errors.name)
                      }
                      helperText={
                        dataFormik.touched.name &&
                        Boolean(dataFormik.errors.name)
                          ? dataFormik.errors.name
                          : ""
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="email"
                      name="email"
                      variant="standard"
                      fullWidth
                      label="Correo"
                      autoComplete="email"
                      autoFocus
                      value={dataFormik.values.email}
                      onChange={dataFormik.handleChange}
                      error={
                        dataFormik.touched.email &&
                        Boolean(dataFormik.errors.email)
                      }
                      helperText={
                        dataFormik.touched.email &&
                        Boolean(dataFormik.errors.email)
                          ? dataFormik.errors.email
                          : ""
                      }
                    />
                  </GridItem>
                </GridContainer>
                <div className="text-center mt-4">
                  <Button type={"submit"}>Confirmar Edición</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cambiar Contraseña</h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={passFormik.handleSubmit}>
                {/* Password Data */}
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="oldPassword"
                      name="oldPassword"
                      label="Contraseña Actual"
                      variant="standard"
                      fullWidth
                      autoFocus
                      value={passFormik.values.oldPassword}
                      onChange={passFormik.handleChange}
                      error={
                        passFormik.touched.oldPassword &&
                        Boolean(passFormik.errors.oldPassword)
                      }
                      helperText={
                        passFormik.touched.oldPassword &&
                        Boolean(passFormik.errors.oldPassword)
                          ? passFormik.errors.oldPassword
                          : ""
                      }
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="newPassword"
                      name="newPassword"
                      label="Nueva Contraseña"
                      variant="standard"
                      fullWidth
                      autoFocus
                      value={passFormik.values.newPassword}
                      onChange={passFormik.handleChange}
                      error={
                        passFormik.touched.newPassword &&
                        Boolean(passFormik.errors.newPassword)
                      }
                      helperText={
                        passFormik.touched.newPassword &&
                        Boolean(passFormik.errors.newPassword)
                          ? passFormik.errors.newPassword
                          : ""
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirmar Contraseña"
                      variant="standard"
                      fullWidth
                      autoFocus
                      value={passFormik.values.confirmPassword}
                      onChange={passFormik.handleChange}
                      error={
                        passFormik.touched.confirmPassword &&
                        Boolean(passFormik.errors.confirmPassword)
                      }
                      helperText={
                        passFormik.touched.confirmPassword &&
                        Boolean(passFormik.errors.confirmPassword)
                          ? passFormik.errors.confirmPassword
                          : ""
                      }
                    />
                  </GridItem>
                </GridContainer>
                <div className="text-center mt-4">
                  <Button type="submit">Confirmar nueva Contraseña</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </Fade>
  );
}
