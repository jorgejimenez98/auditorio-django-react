import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

function PasswordChangeProfile({ passFormik }) {
  return (
    <div>
      <form onSubmit={passFormik.handleSubmit}>
        {/* Password Data */}
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <TextField
              id="oldPassword"
              name="oldPassword"
              label="Contraseña Actual"
              type="password"
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
              type="password"
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
              type="password"
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
    </div>
  );
}

export default PasswordChangeProfile;
