import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

function PersonalDataForm({ dataFormik }) {
  return (
    <div>
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
              error={dataFormik.touched.name && Boolean(dataFormik.errors.name)}
              helperText={
                dataFormik.touched.name && Boolean(dataFormik.errors.name)
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
                dataFormik.touched.email && Boolean(dataFormik.errors.email)
              }
              helperText={
                dataFormik.touched.email && Boolean(dataFormik.errors.email)
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
    </div>
  );
}

export default PersonalDataForm;
