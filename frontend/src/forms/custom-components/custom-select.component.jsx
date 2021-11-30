import React from 'react';
import { useField } from 'formik';
import { FormControl, InputLabel, Select } from '@mui/material';

const CustomSelectComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <FormControl
        fullWidth
        style={{minWidth:'100px'}}
      >
        <InputLabel id="label" htmlFor={props.id || props.name}>{label}</InputLabel>
        <Select labelId='label' {...field} {...props} />
      </FormControl>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomSelectComponent;