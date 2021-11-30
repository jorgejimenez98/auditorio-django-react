import React from 'react';
import { useField } from 'formik';
import { Checkbox, FormControlLabel } from '@mui/material';

const CustomCheckboxComponent = ({label, ...props }) => {
    const [field, meta] = useField({ ...props });
    return (
        <div>
            <FormControlLabel
             label={label} 
             fullWidth
             control={<Checkbox {...field} {...props} />}/>
            
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomCheckboxComponent;