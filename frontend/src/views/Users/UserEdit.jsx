import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { LinkContainer } from "react-router-bootstrap";
// Utils containers
import { Loader, Message } from "../../containers";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails, updateUser } from "../../redux/user/user.actions";
import { setSnackbar } from "../../redux/snackbar/snackbar.actions";
import { UserActionTypes } from "../../redux/user/user.types";

// Form Components
import PersonalDataForm from "../../forms/user-add-edit-forms/PersonalDataForm";
import UserRolForm from "../../forms/user-add-edit-forms/UserRolForm.jsx";

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
  editSchema,
  styles,
  initialEditValues,
} from "../../settings/formik/user-add-edit-schema";
import { useFormik } from "formik";

const useStyles = makeStyles(styles);

function UserEdit({ history, match }) {
  const userId = match.params.userId;
  const classes = useStyles();
  const dispatch = useDispatch();

  // User Info Selector
  const { userInfo } = useSelector((state) => state.user.userLogin);

  // User Details Selector
  const {
    loading: loadingDetails,
    error: errorDetails,
    user,
  } = useSelector((state) => state.user.userDetails);

  // User Update Selector
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.user.userUpdate);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAdmin) {
      history.push("/403");
    } else {
      if (userId) {
        dispatch(getUserDetails(userId));
      }
      if (successUpdate) {
        const message = "Usuario Editado Satisfactoriamente";
        dispatch(setSnackbar(true, "success", message));
        history.push("/admin/user-list");
        dispatch({ type: UserActionTypes.USER_UPDATE.RESET });
      }
    }

    return () => {
      dispatch({ type: UserActionTypes.USER_DETAILS.RESET });
      dispatch({ type: UserActionTypes.USER_UPDATE.RESET });
    };
  }, [history, userInfo, dispatch, userId, successUpdate]);

  // Form with the initials values of the personal Data
  const formik = useFormik({
    initialValues: initialEditValues,
    validationSchema: editSchema,
    onSubmit: (values) => {
      dispatch(updateUser(userId, values));
    },
  });

  // Initialize the formik values
  initialEditValues.name = user?.name;
  initialEditValues.email = user?.email;
  initialEditValues.rol = user?.bolRol;

  return (
    <Fade duration={1000} distance="40px">
      {loadingDetails ? (
        <Loader />
      ) : errorDetails ? (
        <Message type="error" message={errorDetails} />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          {errorUpdate && <Message message={errorUpdate} type="error" />}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h6 className={classes.cardTitleWhite}>
                    Editar Datos Personales
                  </h6>
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
                    Editar Rol de Usuario
                  </h6>
                </CardHeader>
                <CardBody>
                  <UserRolForm formik={formik} />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          <div className="text-center mt-4">
            {loadingUpdate && <Loader />}
            <LinkContainer to="/admin/user-list">
              <Button color="primary">Cancelar</Button>
            </LinkContainer>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className="ml-3"
            >
              Editar Usuario
            </Button>
          </div>
        </form>
      )}
    </Fade>
  );
}

export default UserEdit;
