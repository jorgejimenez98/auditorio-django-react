import React from "react";

// @mui components
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function UserRolForm({ formik }) {
  return (
    <div>
      <FormControl
        component="fieldset"
        error={formik.touched.rol && Boolean(formik.errors.rol)}
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
    </div>
  );
}

export default UserRolForm;
