import React from 'react';
import { useField, useFormikContext } from 'formik';
import { DatePicker } from '@material-ui/pickers';

const CustomDatePickerComponent = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            <DatePicker
                placeholder="DD/MM/YYYY"
                format={"DD/MM/YYYY"}
                {...props}
                label={label}
                name={field.name}
                value={field.value}
                helperText={meta.error}
                error={meta.touched && Boolean(meta.error)}
                disablePast
                onChange={(value) => setFieldValue(field.name, value)}
            />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomDatePickerComponent;