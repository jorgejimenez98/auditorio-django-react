import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { LinkContainer } from "react-router-bootstrap";
// Utils containers
import { Loader, Message } from "../../containers";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../redux/user/user.actions";
import { setSnackbar } from "../../redux/snackbar/snackbar.actions";
import { UserActionTypes } from "../../redux/user/user.types";

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

function UserAdd({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // User Info Selector
  const { userInfo } = useSelector((state) => state.user.userLogin);

  // User Info Selector
  const { loading, error, success } = useSelector(
    (state) => state.user.userCreate
  );

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAdmin) {
      history.push("/403");
    } else {
      if (success) {
        const message = "Usuario creado satisfactoriamente";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: UserActionTypes.USER_CREATE.RESET });
        history.push("/admin/user-list");
      }
    }

    return () => {
      dispatch({ type: UserActionTypes.USER_CREATE.RESET });
    };
  }, [history, userInfo, dispatch, success]);

  // Form with the initials values of the personal Data
  const formik = useFormik({
    initialValues: initialAddValues,
    validationSchema: addSchema,
    onSubmit: (values) => {
      dispatch(createUser(values));
    },
  });

  return (
    <Fade duration={1000} distance="40px">
      <form onSubmit={formik.handleSubmit}>
        {error && <Message type="error" message={error} />}

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
          {loading && <Loader />}

          <LinkContainer to="/admin/user-list">
            <Button color="primary">Cancelar</Button>
          </LinkContainer>
          <Button type="submit" color="primary" variant="contained" className='ml-3'>
            Insertar Usuario
          </Button>
        </div>
      </form>
    </Fade>
  );
}

export default UserAdd;
