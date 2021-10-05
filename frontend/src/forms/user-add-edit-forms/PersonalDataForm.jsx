import React from "react";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

// @material-ui/core components
import TextField from "@mui/material/TextField";

function PersonalDataForm({ formik }) {
  return (
    <div>
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
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email && Boolean(formik.errors.email)
                ? formik.errors.email
                : ""
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default PersonalDataForm;
