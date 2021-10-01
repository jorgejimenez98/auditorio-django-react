import React, { useEffect } from "react";
// OBJECTS
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/user/user.actions";
import * as yup from "yup";
import { useFormik } from "formik";
// COMPONENTS
import Message from "../containers/Message";
import Loader from "../containers/Loader";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Login({ location, history }) {
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  // Selectors
  const { userInfo, loading, error } = useSelector(
    (state) => state.user.userLogin
  );

  // Use Effect
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo, error]);

  // Formik Validation
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Entre un correo válido. Ej: nombre@correo.com")
      .required("El correo es obligatorio"),
    password: yup.string().trim().required("La contraseña es obligatoria"),
  });

  // Form with the initials values of the user
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (user) => {
      dispatch(login(user.email, user.password));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="mb-4">
          Sistema de Auditoría
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          {error && <Message type="error" message={error} />}
          {loading && <Loader />}

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Correo"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email && Boolean(formik.errors.email)
                ? formik.errors.email
                : ""
            }
          />

          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            margin="normal"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              formik.touched.password && Boolean(formik.errors.password)
                ? formik.errors.password
                : ""
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Acceder
          </Button>
        </form>
      </Box>
    </Container>
  );
}
