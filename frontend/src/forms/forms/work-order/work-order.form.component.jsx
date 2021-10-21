import React from 'react'

import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import Button from "react-bootstrap/Button";

import CustomTextInputComponent from "../../custom-components/custom-text-input.component";

function WorkOrderFormComponent({values=null, otherHandleSubmit=false, ...otherProps}) {
    
    const handleSubmit = (values) => {
        alert(JSON.stringify(values))
    }
    
    return (
        <div>
            <Formik
            initialValues={{
                entidad: 0,
                codNIT: '',
                codREEUP: '',
                tipoAccion: '',
                directiva: '',
                particularidades: '',
                cantAudit: '',
                diasHabiles: '',
                diasAudit: '',
            }}
            validationSchema={Yup.object(

            )}
            onSubmit={(values, {setSubmitting})=>{
                if(otherHandleSubmit){
                    otherHandleSubmit(values)
                }else{
                    handleSubmit(values)
                }
                setSubmitting(true)
            }}
            >
                <Form>
                <CustomTextInputComponent
                        label="Entidad"
                        name="entidad"
                        type="number"
                        placeholder="Jane"
                    /> 
                <CustomTextInputComponent
                        label="Codigo NIT"
                        name="codNIT"
                        type="text"
                        placeholder="Jane"
                    /> 
                <CustomTextInputComponent
                        label="Codigo REEUP"
                        name="codREEUP"
                        type="text"
                        placeholder="Jane"
                    /> 
                <CustomTextInputComponent
                        label="Accion"
                        name="tipoAccion"
                        type="text"
                        placeholder="Jane"
                    /> 
                <CustomTextInputComponent
                        label="Directiva"
                        name="directiva"
                        type="text"
                        placeholder="Jane"
                    /> 
                <CustomTextInputComponent
                        label="Particularidades"
                        name="particularidades"
                        type="text"
                        placeholder="Jane"
                    /> 
                <CustomTextInputComponent
                        label="Cantidad de Auditores"
                        name="cantAudit"
                        type="text"
                        placeholder="Jane"
                    /> 
                <CustomTextInputComponent
                        label="Dias habiles"
                        name="diasHabiles"
                        type="text"
                        placeholder="Jane"
                    /> 
                <CustomTextInputComponent
                        label="Dias de auditoria"
                        name="diasAudit"
                        type="text"
                        placeholder="Jane"
                    /> 
                    {!otherHandleSubmit &&
                        <Button type='submit'>Enviar</Button>
                    }
                </Form>
            </Formik>
        </div>
    )
}

export default WorkOrderFormComponent;
