import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import {
    Grid,
    MenuItem,
    Step,
    StepButton,
    Stepper,
    Tab,
    Button,
    ButtonGroup
} from '@mui/material';
import {
    TabPanel,
    TabContext,
    TabList
} from '@mui/lab';

import { yupOptions } from '../../common/yup-option';

import CustomTextInputComponent from "../../custom-components/custom-text-input.component";
import CustomSelectComponent from '../../custom-components/custom-select.component';
import CustomDatePickerComponent from '../../custom-components/custom.datepicker.component';
import CustomCheckboxComponent from '../../custom-components/custom-checkbox.component';
import { Link } from 'react-router-dom';
import yearPlanActions from '../../../redux/year-plan/year-plan.actions';
import workOrderActions from '../../../redux/work-order/work-order.actions';

const steps = ['Seleccionar Plan Anual', 'Datos de auditoria(s)', 'Anexo'];

function YearPlanFormComponent({ data = null }) {
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = React.useState(0);
    const [tab, setTab] = useState('1');
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
                    //paso 1
                    year: new Date().getFullYear(),
                    cantidadAudit: 1,
                    // paso 2
                    // auditorias
                    entidades: ['', '', '', ''], // entidades a auditar (texto)
                    codNIT: ['', '', '', ''], // codigo NIT (txt num)
                    codREEUP: ['', '', '', ''], // codigo REEUP (txt num)
                    actionType: ['', '', '', ''], // tipo de accion (txt)
                    directives: [[], [], [], []], // directivas (num)
                    unidadPres: [false, false, false, false], //unidad presupuestada(bool)
                    cantAuditores: ['', '', '', ''], // cantidad de auditores (num)
                    diasHabiles: [30, 30, 30, 30], // dias habiles (num)
                    startDate: [null, null, null, null], // fecha de inicio de auditoria (fecha)
                    // paso 3
                    // anexo
                    diasAudit: 1, // dias auditables (num)
                    diasFeriad: 1, // dias feriados (num)
                    diasVacaciones: 1, // dias de vacaciones (num)
                    diasCapacitacion: 1, // dias de capacitacion (num)
                    diasReservas: 1, // dias de reserva (num) 
                    controlInterno: 1, // dias de control interno (num)
                }
            )
        }
    }

    const changeTab = (event, newValue) => {
        setTab(newValue);
    }

    const totalSteps = () => {
        return steps.length;
    }

    const isLastStep = () => {
        return activeStep === totalSteps();
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    async function handleSubmit(values) {
        const { yearPlanId } = await dispatch(yearPlanActions.create({
            year: values.year,
            author: values.author,
            cantidadAudit: values.cantidadAudit,
            diasAudit: values.diasAudit,
            diasFeriad: values.diasFeriad,
            diasVacaciones: values.diasVacaciones,
            diasCapacitacion: values.diasCapacitacion,
            diasReservas: values.diasReservas,
            controlInterno: values.controlInterno,
        }))
        for (let index = 0; index < values.cantidadAudit; index++) {
            dispatch(workOrderActions.create({
                noWO: index+1,
                yearPlanId: yearPlanId,
                author: values.author,
                codNIT: values.codNIT[index],
                codREEUP: values.codREEUP[index],
                actionType: values.actionType[index],
                unidadPres: values.unidadPres[index],
                cantAuditores: values.cantAuditores[index],
                diasHabiles: values.diasHabiles[index],
                startDate: values.startDate[index],
                directives: values.directives[index]
            }))
        }

    }

    return (
        <div>
            <Formik
                initialValues={loadInitialValues()}
                validationSchema={Yup.object({
                    year: yupOptions.yearPlan.year,
                    // entidades: yupOptions.yearPlan.entidades,
                    // codNIT: yupOptions.yearPlan.codNIT,
                    // codREEUP: yupOptions.yearPlan.codREEUP,
                    // diasHabiles: yupOptions.yearPlan.diasHabiles,
                    diasAudit: yupOptions.yearPlan.diasAudit,
                    diasFeriad: yupOptions.yearPlan.diasFeriad,
                    diasVacaciones: yupOptions.yearPlan.diasVacaciones,
                    diasCapacitacion: yupOptions.yearPlan.diasCapacitacion,
                    diasReservas: yupOptions.yearPlan.diasReservas,
                    controlInterno: yupOptions.yearPlan.controlInterno,
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleSubmit(values)
                    setActiveStep(0)
                    setSubmitting(false)
                    resetForm();
                }}
            >
                {({ values }) => (
                    <Form>
                        <Grid container justifyContent='center' spacing={7} >
                            <Grid item sx={{ width: '100%' }}>
                                <Stepper nonLinear activeStep={activeStep}>
                                    {steps.map((label, index) => (
                                        <Step key={label} completed={index < activeStep}>
                                            <StepButton color="inherit">
                                                {label}
                                            </StepButton>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Grid>
                            <Grid container item sx={{ width: '100%' }}>
                                {step(activeStep, values, tab, changeTab)}
                            </Grid>
                            <Grid container item justifyContent='space-between' xs={12}>
                                <Grid item sx={{ flex: '1 1 auto' }} >
                                    <ButtonGroup>
                                        <Link to='/admin/year-plan'>
                                            <Button>
                                                Cancelar
                                            </Button>
                                        </Link>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                            variant='contained'
                                        >
                                            Atras
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item sx={{ flex: '1 1 auto' }}>
                                    <Button
                                        color='success'
                                        onClick={isLastStep() ? null : handleNext}
                                        type={isLastStep() ? 'submit' : 'button'}
                                        sx={{ mr: 1 }}
                                        variant='contained'
                                    >
                                        Completar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default YearPlanFormComponent;

function step(step, values, tab, changeTab) {

    switch (step) {
        case 1:
            const dummy = [...new Array(values.cantidadAudit)].map(() => 0)
            return (
                <Grid container columnSpacing={5} rowSpacing={4} sx={{ width: '100%' }}>
                    <TabContext value={tab}>
                        <Grid item xs={12} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={changeTab} aria-label="lab API tabs example">
                                {dummy.map((element, idx) => (
                                    <Tab key={idx} label={`OT-${idx + 1}`} value={`${idx + 1}`} />
                                ))}

                            </TabList>
                        </Grid>
                        {dummy.map((element, idx) => (
                            <TabPanel key={idx} value={`${idx + 1}`}>
                                <Grid container columnSpacing={5} rowSpacing={4}>
                                    <Grid item xs={6}>
                                        <CustomTextInputComponent
                                            label='Entidad a auditar'
                                            name={`entidades.${idx}`}
                                            variant='standard'
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomSelectComponent
                                            label="Tipo de accion"
                                            name={`actionType.${idx}`}
                                            variant='standard'
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </CustomSelectComponent>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomTextInputComponent
                                            label='Codigo NIT'
                                            name={`codNIT.${idx}`}
                                            variant='standard'
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomTextInputComponent
                                            label='Codigo REEUP'
                                            name={`codREEUP.${idx}`}
                                            variant='standard'
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <CustomSelectComponent
                                            label="Cantidad de auditores"
                                            name={`cantAuditores.${idx}`}
                                            variant='standard'
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </CustomSelectComponent>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <CustomSelectComponent
                                            label='Directivas'
                                            name={`directives.${idx}`}
                                            variant='standard'
                                            multiple
                                        >
                                            <MenuItem value={1}>directiva 1</MenuItem>
                                            <MenuItem value={2}>directiva 2</MenuItem>
                                            <MenuItem value={3}>directiva 3</MenuItem>
                                            <MenuItem value={4}>directiva 4</MenuItem>
                                            <MenuItem value={5}>directiva 5</MenuItem>
                                        </CustomSelectComponent>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <CustomCheckboxComponent
                                            label="Unidad presupuestada"
                                            name={`unidadPres.${idx}`}
                                            variant='standard'
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomDatePickerComponent
                                            label='Fecha de inicio'
                                            name={`startDate.${idx}`}
                                            variant='standard'
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CustomTextInputComponent
                                            label='Dias Habiles'
                                            name={`diasHabiles.${idx}`}
                                            variant='standard'
                                        />
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Grid>
            )
        case 2:
            return (
                <Grid container columnSpacing={5} rowSpacing={4}>
                    <Grid item>
                        <CustomTextInputComponent
                            label='Dias auditables'
                            name='diasAudit'
                            variant='standard'
                            type='number'
                        />
                    </Grid>
                    <Grid item>
                        <CustomTextInputComponent
                            label='Dias feriados'
                            name='diasFeriad'
                            variant='standard'
                            type='number'
                        />
                    </Grid>
                    <Grid item>
                        <CustomTextInputComponent
                            label='Dias de vacaciones'
                            name='diasVacaciones'
                            variant='standard'
                            type='number'
                        />
                    </Grid>
                    <Grid item>
                        <CustomTextInputComponent
                            label='Dias de capacitacion'
                            name='diasCapacitacion'
                            variant='standard'
                            type='number'
                        />
                    </Grid>
                    <Grid item>
                        <CustomTextInputComponent
                            label='Dias de reserva'
                            name='diasReservas'
                            variant='standard'
                            type='number'
                        />
                    </Grid>
                    <Grid item>
                        <CustomTextInputComponent
                            label='Dias de control interno'
                            name='controlInterno'
                            variant='standard'
                            type='number'
                        />
                    </Grid>
                </Grid>
            )
        default:
            return (
                <Grid container columnSpacing={5} rowSpacing={4}>
                    <Grid item xs={4}>
                        <CustomTextInputComponent
                            label='Ano'
                            name='year'
                            variant='standard'
                            type='number'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomSelectComponent
                            label='Cantidad de auditorias'
                            name='cantidadAudit'
                            variant='standard'
                        >
                            <MenuItem key={1} value={1}>{1}</MenuItem>
                            <MenuItem key={2} value={2}>{2}</MenuItem>
                            <MenuItem key={3} value={3}>{3}</MenuItem>
                            <MenuItem key={4} value={4}>{4}</MenuItem>
                        </CustomSelectComponent>
                    </Grid>
                </Grid>
            )
    }
}