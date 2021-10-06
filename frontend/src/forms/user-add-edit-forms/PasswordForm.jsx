import React from "react";
import TextField from "@mui/material/TextField";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

function PasswordForm({ formik }) {
  return (
    <div>
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
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
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
    </div>
  );
}

export default PasswordForm;
