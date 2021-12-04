import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import workOrderActions from "../../../redux/work-order/work-order.actions.js";

import { Loader, Message } from "../../../containers";

import * as Yup from "yup";
import { FieldArray, Form, Formik, useField, useFormikContext } from "formik";

import {
  Grid,
  Stepper,
  Step,
  StepButton,
  Button,
  MenuItem,
  Typography,
  ButtonGroup,
} from "@mui/material";

import { yupOptions } from "../../common/yup-option";

import CustomCheckboxComponent from "../../custom-components/custom-checkbox.component";
import CustomTextInputComponent from "../../custom-components/custom-text-input.component";
import CustomSelectComponent from "../../custom-components/custom-select.component";
import { Link } from "react-router-dom";

const steps = [
  "Seleccionar Plan Anual",
  "Datos de auditoria",
  "Datos de Entidad",
];

function WorkOrderFormComponent({ match, history }) {
  const workOrderId = match.params.workOrderId;
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);
  const author = useSelector((state) => state.user.userLogin).userInfo.name;

  // USER INFO Selector
  const { userInfo } = useSelector((state) => state.user.userLogin);

  // WORK ORDERS DETAILS
  const { loading, error, workOrder } = useSelector(
    (state) => state.workOrder.details
  );

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAuditor) {
      history.push("/403");
    } else {
      if (workOrderId) {
        dispatch(workOrderActions.details(workOrderId));
      }
    }
  }, [history, userInfo, dispatch, workOrderId]);

  const loadInitialValues = () => {
    if (workOrder !== {}) {
      return {
        ...workOrder,
        author: author,
      };
    } else {
      return {
        // meta values

        author: author,
        // step 1
        yearPlan: 2021, // plan anual al que pertenece(objeto, opciones)
        noWO: 1, // numero de orden de trabajo(numero, opciones)
        // step 2
        criteria: "", // criterios (texto)
        system: "", // sistema automatizado a aplicar (texto)
        auditType: "", // sistema automatizado a aplicar (texto)
        staff: [""], // auditores designados (texto),
        // step 3
        entity: "", // entidad a auditar (texto)
        subordinated: "", // subordinada a ... (texto)
        address: "", // direccion (texto)
        province: "", // provincia (texto, opciones)
        municipality: "", // municipio (texto, opciones)
        NAE: "", // nomenclatura de la actividad economica (texto)
        FORG: false, // forma organizativa (BOOL)
        cubanStateEntrpSys: "", // Sistema empresarial estatal cubano (texto, opciones {if AUTOFINANCIADA} {OSDE, Empresa, Unidad empresarial de Base})
        isPerfecting: false, // empresa en perfeccionamiento (boolean)
        merchantSociety: false, // sociedad mercantil (boolean)
      };
    }
  };

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values) => {
    dispatch(workOrderActions.update({
      yearPlanId: values.yearPlanId,
      noWO: values.noWO,
      author: author,
      entity: values.entity,
      criteria: values.criteria,
      system: values.system,
      auditType: values.auditType,
      staff: values.staff,
      subordinated: values.subordinated,
      address: values.address,
      province: values.province,
      municipality: values.municipality,
      NAE: values.NAE,
      FORG: values.FORG,
      cubanStateEntrpSys: values.cubanStateEntrpSys,
      isPerfecting: values.isPerfecting,
      merchantSociety: values.merchantSociety,
    }, workOrderId))
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
      ) : (
        <div>
          <Formik
            initialValues={loadInitialValues()}
            validationSchema={Yup.object({
              system: yupOptions.workOrder.system,
              auditType: yupOptions.workOrder.auditType,
              staff: yupOptions.workOrder.staff,
              subordinated: yupOptions.workOrder.subordinated,
              address: yupOptions.workOrder.address,
              province: yupOptions.workOrder.province,
              municipality: yupOptions.workOrder.municipality,
              NAE: yupOptions.workOrder.NAE,
              cubanStateEntrpSys: yupOptions.workOrder.cubanStateEntrpSys,
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleSubmit(values);
              setActiveStep(0);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ values }) => (
              <Form>
                <Grid container justifyContent="center" spacing={7}>
                  <Grid item sx={{ width: "100%" }}>
                    <Stepper nonLinear activeStep={activeStep}>
                      {steps.map((label, index) => (
                        <Step key={label} completed={index < activeStep}>
                          <StepButton color="inherit">{label}</StepButton>
                        </Step>
                      ))}
                    </Stepper>
                  </Grid>
                  <Grid container item sx={{ width: "100%" }}>
                    {step(activeStep, values)}
                  </Grid>
                  <Grid container item justifyContent="space-between" xs={12}>
                    <Grid item sx={{ flex: "1 1 auto" }}>
                      <ButtonGroup>
                        <Link to="/admin/work-order">
                          <Button>Cancelar</Button>
                        </Link>
                        <Button
                          variant="contained"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Atras
                        </Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid item sx={{ flex: "1 1 auto" }}>
                      <Button
                        color="success"
                        onClick={isLastStep() ? null : handleNext}
                        type={isLastStep() ? "submit" : "button"}
                        sx={{ mr: 1 }}
                        variant="contained"
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
      )}
    </React.Fragment>
  );
}

export default WorkOrderFormComponent;

function step(step, values) {
  switch (step) {
    case 1:
      return (
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={6}>
            <CustomTextInputComponent
              label="Criteria"
              name="criteria"
              variant="filled"
              multiline
            />
          </Grid>
          <Grid container item direction="column" xs={6} rowSpacing={3}>
            <Grid item>
              <CustomTextInputComponent
                label="Sistema automatizado a aplicar"
                name="system"
                variant="standard"
              />
            </Grid>
            <Grid item>
              <CustomSelectComponent
                label="Tipo de auditoria"
                name="auditType"
                variant="standard"
              >
                <MenuItem value={"Con enfoque de proceso"}>
                  Con enfoque de proceso
                </MenuItem>
                <MenuItem value={"Plan"}>Plan</MenuItem>
                <MenuItem value={"Extraplan"}>Extraplan</MenuItem>
              </CustomSelectComponent>
            </Grid>
            <Grid item>
              <Typography>Auditores</Typography>
              <FieldArray name="staff">
                {({ remove, push }) => (
                  <Grid item>
                    {values.staff.length > 0 &&
                      values.staff.map((auditor, idx) => (
                        <Grid container item key={idx} direction="row">
                          <CustomTextInputComponent
                            label="Auditor"
                            name={`staff.${idx}`}
                            variant="standard"
                          />
                          <Button
                            disabled={idx === 0}
                            variant="contained"
                            color="error"
                            onClick={() => remove(idx)}
                          >
                            Eliminar
                          </Button>
                        </Grid>
                      ))}
                    <Button
                      disabled={values.staff.length === 3}
                      variant="contained"
                      onClick={() => push("")}
                    >
                      Añadir auditor
                    </Button>
                  </Grid>
                )}
              </FieldArray>
            </Grid>
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container columnSpacing={5} rowSpacing={4}>
          <Grid item xs={6}>
            <CustomTextInputComponent
              label="Entidad a auditar"
              name="entity"
              variant="standard"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextInputComponent
              label="Subordinada a ..."
              name="subordinated"
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomTextInputComponent
              label="Direccion"
              name="address"
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomSelectComponent
              label="Provincia"
              name="province"
              variant="standard"
            >
              <MenuItem value={"Pinar_del_Río"}>Pinar del Río</MenuItem>
              <MenuItem value={"Artemisa"}>Artemisa</MenuItem>
              <MenuItem value={"La_Habana"}>La Habana</MenuItem>
              <MenuItem value={"Mayabeque"}>Mayabeque</MenuItem>
              <MenuItem value={"Matanzas"}>Matanzas</MenuItem>
              <MenuItem value={"Cienfuegos"}>Cienfuegos</MenuItem>
              <MenuItem value={"Villa_Clara"}>Villa Clara</MenuItem>
              <MenuItem value={"Sancti_Spíritus"}>Sancti Spíritus</MenuItem>
              <MenuItem value={"Ciego_de_Ávila"}>Ciego de Ávila</MenuItem>
              <MenuItem value={"Camagüey"}>Camagüey</MenuItem>
              <MenuItem value={"Las_Tunas"}>Las Tunas</MenuItem>
              <MenuItem value={"Granma"}>Granma</MenuItem>
              <MenuItem value={"Holguín"}>Holguín</MenuItem>
              <MenuItem value={"Santiago de Cuba"}>Santiago de Cuba</MenuItem>
              <MenuItem value={"Guantánamo"}>Guantánamo</MenuItem>
            </CustomSelectComponent>
          </Grid>
          <Grid item xs={4}>
            <CustomSelectComponent
              label="Municipio"
              name="municipality"
              variant="standard"
            ></CustomSelectComponent>
          </Grid>
          <Grid item xs={6}>
            <CustomTextInputComponent
              label="Nomenclatura de la actividad economica"
              name="NAE"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSelectComponent
              label="Sistema empresarial estatal cubano"
              name="cubanStateEntrpSys"
              variant="standard"
            >
              <MenuItem value={"OSDE"}>OSDE</MenuItem>
              <MenuItem value={"Empresa"}>Empresa</MenuItem>
              <MenuItem value={"Unidad empresarial de Base"}>
                Unidad empresarial de Base
              </MenuItem>
            </CustomSelectComponent>
          </Grid>
          <Grid item xs={4}>
            <CustomCheckboxComponent
              label="Unidad Presupuestada con Tratamiento Especial"
              name="FORG"
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomCheckboxComponent
              label="Empresa en perfeccionamiento"
              name="isPerfecting"
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomCheckboxComponent
              label="sociedad mercantil"
              name="merchantSociety"
              variant="standard"
            />
          </Grid>
        </Grid>
      );
    default:
      return (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CustomTextInputComponent
              disabled
              label="Plan anual"
              name="yearPlan"
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomSelectComponent
              disabled
              label="Numero de orden de trabajo"
              name="noWO"
              variant="standard"
            >
              {steps.map((element, idx) => (
                <MenuItem key={idx} value={1 + idx}>
                  {1 + idx}
                </MenuItem>
              ))}
            </CustomSelectComponent>
          </Grid>
        </Grid>
      );
  }
}

const municipalitiesList = {
  Pinar_del_Río: [
    'Consolación del Sur',
    'Guane',
    'La Palma',
    'Los Palacios',
    'Mantua',
    'Minas de Matahambre',
  ],
  Artemisa: [],
  La_Habana: [],
  Mayabeque: [],
  Matanzas: [],
  Cienfuegos: [],
  Villa_Clara: [],
  Sancti_Spíritus: [],
  Ciego_de_Ávila: [],
  Camagüey: [],
  Las_Tunas: [],
  Granma: [],
  Holguín: [],
  Santiago_de_Cuba: [],
  Guantánamo: [],
}

const MyField = (props) => {
  const [list, setList] = useState([])
  const {
    values: { province },
    touched,
  } = useFormikContext();
  const [field] = useField(props);

  React.useEffect(() => {
    if (
      province !== '' &&
      touched.province
    ) {
      setList(municipalitiesList.province);
    }
  }, [province, props.name, touched.province]);

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