import React from "react";
import { Fade } from "react-awesome-reveal";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
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
} from "../../settings/formik/user-add-edit-schema";
import { useFormik } from "formik";

const styles = {
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "200",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

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
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={
                        formik.touched.name && Boolean(formik.errors.name)
                          ? formik.errors.name
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
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={
                        formik.touched.email && Boolean(formik.errors.email)
                          ? formik.errors.email
                          : ""
                      }
                    />
                  </GridItem>
                </GridContainer>
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
                <FormControl
                  component="fieldset"
                  error={formik.touched.email && Boolean(formik.errors.email)}
                >
                  <RadioGroup
                    row
                    id="rol"
                    name="rol"
                    value={formik.values.rol}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="isAdmin"
                      control={<Radio />}
                      label="Administrador"
                    />
                    <FormControlLabel
                      value="isBoosWorkOrder"
                      control={<Radio />}
                      label="Rector"
                    />
                    <FormControlLabel
                      value="isBoosPlan"
                      control={<Radio />}
                      label="Jefe de Plan"
                    />
                    <FormControlLabel
                      value="isAuditor"
                      control={<Radio />}
                      label="Auditor"
                    />
                  </RadioGroup>
                  {/* ERROR ROL */}
                  {formik.touched.rol && Boolean(formik.errors.rol) ? (
                    <small className="text-red">{formik.errors.rol}</small>
                  ) : (
                    ""
                  )}
                </FormControl>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h6 className={classes.cardTitleWhite}>Contraseña</h6>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="newPassword"
                      name="newPassword"
                      label="Nueva Contraseña"
                      type="password"
                      variant="standard"
                      fullWidth
                      autoFocus
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.newPassword &&
                        Boolean(formik.errors.newPassword)
                      }
                      helperText={
                        formik.touched.newPassword &&
                        Boolean(formik.errors.newPassword)
                          ? formik.errors.newPassword
                          : ""
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirmar Contraseña"
                      type="password"
                      variant="standard"
                      fullWidth
                      autoFocus
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                      }
                      helperText={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                          ? formik.errors.confirmPassword
                          : ""
                      }
                    />
                  </GridItem>
                </GridContainer>
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
