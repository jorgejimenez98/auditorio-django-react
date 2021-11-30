import React from 'react';
import {useField} from 'formik';
import { TextField } from '@mui/material';

const CustomTextInputComponent = ({...props}) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <TextField 
            className="text-input" 
            {...field} 
            {...props} 
            fullWidth
            />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomTextInputComponent;