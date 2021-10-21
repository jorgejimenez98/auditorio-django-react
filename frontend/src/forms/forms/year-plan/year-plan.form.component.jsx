import React, { useState } from 'react'
import {
    Grid,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
} from '@mui/material';
import WorkOrderFormComponent from '../work-order/work-order.form.component';

function YearPlanFormComponent(id) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [auditNumb, setAuditNumb] = useState(1)


    const changeAuditNumb = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }

    const handleNext = (values) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log('next')
        alert(JSON.stringify(values))
        console.log('@!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        console.log('back')
        console.log('@!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    };

    const handleFinish = () => {
        console.log('finish')
        console.log('@!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    }

    if (id) {

    }

    return (
        <Grid container rowSpacing={2} columnSpacing={1} direction='column'>
            {/* header */}
            <Grid item justifyContent='center' mb={3}>
                <h2>Formulario Plan Anual</h2>
            </Grid>
            {/* body */}
            <Grid container justifyContent='space-around' alignItems='center'>
                <Grid item justifyContent='center' xs={6} mr={5}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cantidad de Auditorias</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={auditNumb}
                            label="Age"
                            onChange={changeAuditNumb}
                            defaultValue={1}
                            variant='standard'
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid>
                <Grid item justifyContent='center' mb={3}>
                    <span>{`OT-${activeStep + 1}`}</span>
                </Grid>
                <Stepper activeStep={activeStep}>
                    {[...Array(auditNumb)].map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <React.Fragment>
                    <WorkOrderFormComponent otherHandleSubmit={true} activeStep={activeStep}/>
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={activeStep === auditNumb - 1 ? handleFinish : handleNext}>
                                {activeStep === auditNumb - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                </React.Fragment>
            </Grid>
        </Grid>
    )
}

export default YearPlanFormComponent;
