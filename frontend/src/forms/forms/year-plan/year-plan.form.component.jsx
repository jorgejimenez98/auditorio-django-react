import React from 'react'

import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Button from "react-bootstrap/Button";
import { yupOptions } from '../../common/yup-option';

import CustomTextInputComponent from "../../custom-components/custom-text-input.component";


function YearPlanFormComponent() {
    
    console.log(new Date().getFullYear())

    const handleSubmit = (values) => {
        alert(JSON.stringify(values))
    }
    
    return (
        <div>
            <Formik
            initialValues={{
                year: new Date().getFullYear(),
                cantidadAudit: 1,
                diasAudit: 1,
                diasFeriad: 1,
                diasVacaciones: 1,
                diasCapacitacion: 1,
                diasReservas: 1,
                controlInterno: 1,
            }}
            validationSchema={Yup.object({
                //  cantidadAudit: Yup.number()
                //  .oneOf([1,2,3,4])
                //  .required(),
                //  diasAudit: Yup.number(),  
                //  diasFeriad: Yup.number(),  
                //  diasVacaciones: Yup.number(),  
                //  diasCapacitacion: Yup.number(),  
                //  diasReservas: Yup.number(),  
                //  controlInterno: Yup.number(),  
            })}
            onSubmit={(values, {setSubmitting})=>{
                handleSubmit(values)
                setSubmitting(false)
            }}
            >
                <Form>
                    <CustomTextInputComponent
                        label="Cantidad de auditorias"
                        name="cantidadAudit"
                        type="number"
                        placeholder="Jane"
                    />
                
                    <Button type='submit'>Enviar</Button>

                </Form>
            </Formik>

        </div>
    )
}

export default YearPlanFormComponent;
