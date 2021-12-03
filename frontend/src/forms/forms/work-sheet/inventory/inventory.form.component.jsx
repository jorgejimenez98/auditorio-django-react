import React, { useState } from 'react'

import { FieldArray, Form, Formik, useField, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
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
import { Loader, Message } from '../../../../containers';
import inventoryActions from '../../../../redux/work-sheet/inventory/inventory.actions';


function InventoryFormComponent({ data = null }) {
    const dispatch = useDispatch()
    const author = useSelector((state) => state.user.userLogin).userInfo.name;
    const { loading: loadYear, list: listYear, error: errorYear } = useSelector((state) => state.yearPlan.list);


    const loadInitialValues = () => {
        if (data) {
            return (
                {
                    ...data,
                    author: author,
                }
            )
        } else {
            return (
                {
                    //meta values
                    author: author,

                    yearPlanId: '',
                    workOrderId: '',
                    element: [
                        {
                            code: '',
                            description: '',
                            UM: '',
                            // segun submayor
                            SSubCant: '',
                            SSubPrice: '',
                            SSubImport: '',
                            // segun Tarjeta de estiba
                            STECant: '',
                            STETotal: '',
                            // segun conteo
                            SContCant: '',
                            SContTotal: '',
                            dif: '',
                        }
                    ]

                }
            )
        }
    }

    const handleSubmit = (values) => {
        dispatch(inventoryActions.create(
            {
                ...values,
                yearPlanId: values.yearPlanId.id,
                workOrderId: values.workOrderId.id,
            }
        ))
    }

    return (
        <div>
            {loadYear ? (
                <Loader />
            ) : errorYear ? (
                <Message type="error" message={errorYear} />
            ) : (
                <Formik
                    initialValues={loadInitialValues()}
                    validationSchema={Yup.object({
                        yearPlanId: yupOptions.inventory.yearPlan,
                        workOrderId: yupOptions.inventory.workOrder,
                        // element: yupOptions.inventory.element,
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
                                        name="yearPlanId"
                                        variant='standard'
                                    >
                                        {listYear.map((year, idx) => (
                                            <MenuItem key={idx} value={year}>{`${year.year}`}</MenuItem>
                                        ))}
                                    </CustomSelectComponent>
                                </Grid>
                                <Grid item xs={4}>
                                    <MyField
                                        label="Orden de trabajo"
                                        name="workOrderId"
                                        variant='standard'
                                    >
                                    </MyField>
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
            )}
        </div >
    )
}

const MyField = (props) => {
    const [list, setList] = useState([])
    const {
        values: { yearPlanId },
        touched,
    } = useFormikContext();
    const [field] = useField(props);

    React.useEffect(() => {
        if (
            yearPlanId !== '' &&
            touched.yearPlanId
        ) {
            setList(yearPlanId.workOrders);
        }
    }, [yearPlanId, props.name, touched.yearPlanId]);

    return (
        <>
            <CustomSelectComponent {...props} {...field} >
                {list.map((wo, idx) => (
                    <MenuItem key={idx} value={wo}>{`OT-${wo.noWO}`}</MenuItem>
                ))}
            </CustomSelectComponent>
        </>
    );
};

export default InventoryFormComponent;
