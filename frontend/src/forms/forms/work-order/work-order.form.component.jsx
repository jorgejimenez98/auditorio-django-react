import React from 'react'

import * as Yup from 'yup';
import { useSelector } from "react-redux";
import { Form, Formik } from 'formik';
import Button from "react-bootstrap/Button";

import { yupOptions } from '../../common/yup-option';

import CustomTextInputComponent from "../../custom-components/custom-text-input.component";

function WorkOrderFormComponent() {
    const today = new Date();


    const handleSubmit = (values) => {
        alert(JSON.stringify(values))
    }
    
    return (
        <div>
            <Formik
            initialValues={{
                // meta values
                date: today.toLocaleDateString(),
                time: today.toLocaleTimeString(),
                author: useSelector((state) => state.user.userLogin).userInfo.name,
                // step 1
                yearPlan: {}, // plan anual al que pertenece(objeto, opciones)
                noWO: 0, // numero de orden de trabajo(numero, opciones)
                // step 2
                directives: {}, // directivas y objetivos(textos)
                criteria: '', // criterios (texto)
                system: '', // sistema automatizado a aplicar (texto)
                staff: {        // auditores designados (texto)
                    leader: '',
                    auditor1: '',
                    auditor2: '',
                },
                // step 3
                entity: '', // entidad a auditar (texto)
                subordinated: '', // subordinada a ... (texto)
                address: '', // direccion (texto)
                province: '', // provincia (texto, opciones)
                municipality: '', // municipio (texto, opciones)
                NAE: '', // nomenclatura de la actividad economica (texto)
                financingForm: '', // forma de financiamiento (texto, opciones)
                FORG: '', // forma organizativa (texto)
                cubanStateEntrpSys: '', // Sistema empresarial estatal cubano (texto, opciones)
                isPerfecting: false, // empresa en perfeccionamiento (boolean)
                merchantSociety: false, // sociedad mercantil (boolean)
            }}
            validationSchema={Yup.object({
                // yearPlan: yupOptions.firstName_r,
                // noWO: yupOptions.firstName_r,
                // directives: yupOptions.firstName_r,
                // criteria: yupOptions.firstName_r,
                // system: yupOptions.firstName_r,
                // staff: yupOptions.firstName_r,
                // entity: yupOptions.firstName_r,
                // subordinated: yupOptions.firstName_r,
                // address: yupOptions.firstName_r,
                // province: yupOptions.firstName_r,
                // municipality: yupOptions.firstName_r,
                // NAE: yupOptions.firstName_r,
                // financingForm: yupOptions.firstName_r,
                // FORG: yupOptions.firstName_r,
                // cubanStateEntrpSys: yupOptions.firstName_r,
            })}
            onSubmit={(values, {setSubmitting})=>{
                handleSubmit(values)
                setSubmitting(false)
            }}
            >
                <Form>
                    <CustomTextInputComponent
                        label="Entidad"
                        name="entidad"
                        type="text"
                        placeholder="Jane"
                    /> 
                  
                    <Button type='submit'>Enviar</Button>
                    
                </Form>
            </Formik>
        </div>
    )
}

export default WorkOrderFormComponent;
