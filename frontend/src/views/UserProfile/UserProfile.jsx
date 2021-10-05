import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
// Redux dependencies and types
import { useSelector, useDispatch } from "react-redux";
import { UserActionTypes } from "../../redux/user/user.types";
//  Actions
import {
  changePersonalData,
  changeUserLoginPassword,
} from "../../redux/user/user.actions";
import { setSnackbar } from "../../redux/snackbar/snackbar.actions";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
// FORMS and UTILS COMPONENTS
import PersonalDataForm from "../../forms/user-profile-forms/PersonalDataForm";
import PasswordChangeProfile from "../../forms/user-profile-forms/PasswordChangeProfile.jsx";
import Loader from "../../containers/Loader";
import Message from "../../containers/Message";

const styles = {
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

  // User Details Update Selector
  const {
    loading: loadingData,
    error: errorData,
    success: successData,
  } = useSelector((state) => state.user.userLoginChangeData);

  // User Password Update Selector
  const {
    loading: loadingPass,
    error: errorPass,
    success: successPass,
  } = useSelector((state) => state.user.userLoginChangePassword);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (successData) {
        const message = "Datos personales Actualizados satisfactoriamente";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: UserActionTypes.USER_LOGIN_CHANGE_DATA.RESET });
      }
      if (successPass) {
        const message = "Contraseña actualizada satisfactoriamente";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: UserActionTypes.USER_LOGIN_CHANGE_PASSWORD.RESET });
      }
    }
  }, [history, successData, successPass, dispatch, userInfo]);

  // Form with the initials values of the personal Data
  const dataFormik = useFormik({
    initialValues: initialPersonalData,
    validationSchema: personalDataSchema,
    onSubmit: (values) => {
      dispatch(changePersonalData(values));
    },
  });

  // Form with the initials values of the personal Data
  const passFormik = useFormik({
    initialValues: passwordInitialValues,
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(changeUserLoginPassword(values));
    },
  });

  // Init Profile FORM Values
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
              {loadingData && <Loader />}
              {errorData && <Message type={"error"} message={errorData} />}
              <PersonalDataForm dataFormik={dataFormik} />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cambiar Contraseña</h4>
            </CardHeader>
            <CardBody>
              {loadingPass && <Loader />}
              {errorPass && <Message type={"error"} message={errorPass} />}
              <PasswordChangeProfile passFormik={passFormik} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </Fade>
  );
}
