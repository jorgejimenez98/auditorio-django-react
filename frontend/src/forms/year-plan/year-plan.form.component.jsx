import React, { useState } from 'react'
import {
    Grid,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Input,
} from '@mui/material';

function YearPlanFormComponent(id) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [auditNumb, setAuditNumb] = useState(1)

    const [entidades, setEntidades] = useState(['', '', '', ''])
    const [codNIT, setCodNIT] = useState(['', '', '', ''])
    const [codREEUP, setCodREEUP] = useState(['', '', '', ''])
    const [tipoAccion, setTipoAccion] = useState(['', '', '', ''])
    const [directiva, setDirectiva] = useState(['', '', '', ''])
    const [particularidades, setParticularidades] = useState(['', '', '', ''])
    const [cantAudit, setCantAudit] = useState([1, 1, 1, 1])
    const [diasHabiles, setDiasHabiles] = useState([0, 0, 0, 0])
    const [diasAudit, setDiasAudit] = useState([0, 0, 0, 0])

    const changeAuditNumb = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }

    const changeEntidades = event => {
        let entidadesTemp = entidades;
        entidadesTemp[activeStep] = event.target.value.trimLeft();
        setEntidades(entidadesTemp);

        console.log(entidades)

    }
    const changeCodNIT = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }
    const changeCodREEUP = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }
    const changeTipoAccion = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }
    const changeDirectiva = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }
    const changeParticularidades = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }
    const changeCantAudit = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }
    const changeDiasHabiles = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }
    const changeDiasAudit = event => {
        event.preventDefault()
        setAuditNumb(event.target.value)
    }
    



    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log('next')
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
                    <Box>
                        <Grid item xs>
                            <FormControl>
                            <Input value={entidades[activeStep]} onChange={changeEntidades} key={`name${activeStep + 1}`} label={`Entidad a Comprobar`} variant="standard" />
                            </FormControl>
                        </Grid>
                        <Grid item xs>
                            <TextField value={codNIT[activeStep]} onChange={changeCodNIT} key={`NIT${activeStep + 1}`} label='Codigo NIT' variant="standard" />
                        </Grid>
                        <Grid item xs>
                            <TextField value={codREEUP[activeStep]} onChange={changeCodREEUP} key={`REEUP${activeStep + 1}`} label='Codigo REEUP' variant="standard" />
                        </Grid>
                        <Grid item xs>
                            <TextField value={tipoAccion[activeStep]} onChange={changeTipoAccion} key={`actionType${activeStep + 1}`} label='Tipo de accion' variant="standard" />
                        </Grid>
                        <Grid item xs>
                            <TextField value={directiva[activeStep]} onChange={changeDirectiva} key={`directiva${activeStep + 1}`} label='Directiva' variant="standard" />
                        </Grid>
                        <Grid item xs>
                            <TextField value={particularidades[activeStep]} onChange={changeParticularidades} key={`peculiarity${activeStep + 1}`} label='Particularidades' variant="standard" />
                        </Grid>
                        <Grid item justifyContent='center'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Cantidad de Auditores</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id={`cantAudit${activeStep + 1}`}
                                    value={cantAudit[activeStep]}
                                    label="Age"
                                    onChange={changeCantAudit}
                                    defaultValue={1}
                                    variant='standard'
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item justifyContent='center'>
                            <TextField
                                id={`Dias habiles${activeStep + 1}`}
                                label="Dias habiles"
                                type="number"
                                value={diasHabiles[activeStep]}
                                onChange={changeDiasHabiles}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item justifyContent='center'>
                            <TextField
                                id={`Auditores Dias${activeStep + 1}`}
                                label="Auditores Dias"
                                type="number"
                                value={diasAudit[activeStep]}
                                onChange={changeDiasAudit}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Box>
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
