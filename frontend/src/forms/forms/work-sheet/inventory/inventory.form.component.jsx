import React from 'react'

import { FieldArray, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
    Button,
    Grid,
    MenuItem,
    Typography
} from '@mui/material';

import { yupOptions } from '../../../common/yup-option';

import CustomTextInputComponent from '../../../custom-components/custom-text-input.component';
import CustomSelectComponent from '../../../custom-components/custom-select.component';
import { Link } from 'react-router-dom';


function InventoryFormComponent({ data = null }) {
    const today = new Date();
    const author = useSelector((state) => state.user.userLogin).userInfo.name;

    const loadInitialValues = () => {
        if (data) {
            return (
                {
                    ...data,
                    date: today.toLocaleDateString(),
                    time: today.toLocaleTimeString(),
                    author: author,
                }
            )
        } else {
            return (
                {
                    //meta values
                    date: today.toLocaleDateString(),
                    time: today.toLocaleTimeString(),
                    author: author,

                    yearPlan: '',
                    workOrder: '',
                    element: [
                        {
                            code: '',
                            description: '',
                            UM: '',
                            // segun submayor
                            SSubCant: 0,
                            SSubPrice: 0,
                            SSubImport: 0,
                            // segun Tarjeta de estiba
                            STECant: 0,
                            STETotal: 0,
                            // segun conteo
                            SContCant: 0,
                            SContTotal: 0,
                            dif: 0,
                        }
                    ]

                }
            )
        }
    }

    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <div>
            <Formik
                initialValues={loadInitialValues()}
                validationSchema={Yup.object({
                    yearPlan: yupOptions.inventory.yearPlan,
                    workOrder: yupOptions.inventory.workOrder,
                    element: yupOptions.inventory.element,
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleSubmit(values)
                    setSubmitting(false)
                    resetForm();
                }}
            >
                {({ values }) => (
                    <Form>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <CustomSelectComponent
                                    label="Plan Anual"
                                    name="yearPlan"
                                    variant='standard'
                                >
                                    <MenuItem value={2021}>2021</MenuItem>
                                </CustomSelectComponent>
                            </Grid>
                            <Grid item xs={4}>
                                <CustomSelectComponent
                                    label="Orden de trabajo"
                                    name="workOrder"
                                    variant='standard'
                                >
                                    <MenuItem value={1}>ot-1</MenuItem>
                                </CustomSelectComponent>
                            </Grid>
                            <FieldArray name='element'>
                                {({ remove, push }) => (
                                    <Grid item container >
                                        {values.element.length > 0 &&
                                            values.element.map((element, idx) => (
                                                <Grid
                                                    item
                                                    container
                                                    justifyContent='space-between'
                                                    alignItems="baseline"
                                                    spacing={2}
                                                    key={idx}
                                                    marginBottom={10}
                                                >
                                                    <Grid item xs={12}>
                                                        <Typography variant='h4'>{`Elemento ${idx + 1}`}</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <CustomTextInputComponent
                                                            label='Codigo'
                                                            name={`element.${idx}.code`}
                                                            variant='standard'
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <CustomTextInputComponent
                                                            label='Descripcion'
                                                            name={`element.${idx}.description`}
                                                            variant='standard'
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <CustomTextInputComponent
                                                            label='Unidad de medida'
                                                            name={`element.${idx}.UM`}
                                                            variant='standard'
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <CustomTextInputComponent
                                                            label='Diferencia'
                                                            name={`element.${idx}.dif`}
                                                            variant='standard'
                                                            type='number'
                                                        />
                                                    </Grid>
                                                    <Grid item container spacing={2} direction='column' xs={4}>
                                                        <Grid item>
                                                            <Typography variant='h5'>Segun Submayor</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <CustomTextInputComponent
                                                                label='Cantidad'
                                                                name={`element.${idx}.SSubCant`}
                                                                variant='standard'
                                                                type='number'
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                            <CustomTextInputComponent
                                                                label='Precio'
                                                                name={`element.${idx}.SSubPrice`}
                                                                variant='standard'
                                                                type='number'
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                            <CustomTextInputComponent
                                                                label='Importe'
                                                                name={`element.${idx}.SSubImport`}
                                                                variant='standard'
                                                                type='number'
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item container spacing={2} direction='column' xs={4}>
                                                        <Grid item>
                                                            <Typography variant='h5'>Segun T/E</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <CustomTextInputComponent
                                                                label='Cantidad'
                                                                name={`element.${idx}.STECant`}
                                                                variant='standard'
                                                                type='number'
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                            <CustomTextInputComponent
                                                                label='Total'
                                                                name={`element.${idx}.STETotal`}
                                                                variant='standard'
                                                                type='number'
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item container spacing={2} direction='column' xs={4}>
                                                        <Grid item>
                                                            <Typography variant='h5'>Segun Conteo</Typography>
                                                        </Grid>
                                                        <Grid item >
                                                            <CustomTextInputComponent
                                                                label='Cantidad'
                                                                name={`element.${idx}.SContCant`}
                                                                variant='standard'
                                                                type='number'
                                                            />
                                                        </Grid>
                                                        <Grid item >
                                                            <CustomTextInputComponent
                                                                label='Total'
                                                                name={`element.${idx}.SContTotal`}
                                                                variant='standard'
                                                                type='number'
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            disabled={idx === 0}
                                                            variant='contained'
                                                            color='error'
                                                            onClick={() => remove(idx)}
                                                        >
                                                            Eliminar
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            ))}
                                        <Grid item container justifyContent='space-around'>
                                            <Grid item>
                                                <Button
                                                    variant='contained'
                                                    onClick={() => push('')}
                                                >
                                                    Añadir elemento
                                                </Button>
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    color='success'
                                                    type='submit'
                                                    sx={{ mr: 1 }}
                                                    variant='contained'
                                                >
                                                    Completar
                                                </Button>
                                            </Grid>
                                            <Grid item>
                                                <Link to='/admin/work-sheet'>
                                                    <Button>
                                                        Cancelar
                                                    </Button>
                                                </Link>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                )}
                            </FieldArray>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default InventoryFormComponent;
