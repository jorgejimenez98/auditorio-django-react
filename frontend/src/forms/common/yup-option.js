import * as Yup from "yup";

export const yupOptions = {
    userBasic: {
        firstName_r: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName_r: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email_r: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
            .required('Required'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
    },
    yearPlan: {
        year: Yup
            .number()
            .min(new Date().getFullYear())
            .integer()
            .required(),

        entidades: Yup
            .array()
            .of(
                Yup
                    .string()
                    .required()
            ),
        codNIT: Yup
            .array()
            .of(
                Yup
                    .string()
                    .length(11)
                    .matches(/^[0-9]*$/)
                    .required()
            ),
        codREEUP: Yup
            .array()
            .of(
                Yup
                    .string()
                    .length(8)
                    .matches(/^[0-9]*$/)
                    .required()
            ),
        diasHabiles: Yup
            .array()
            .of(
                Yup
                    .number()
                    .positive()
                    .integer()
                    .required()
            ),
        diasAudit: Yup
            .number()
            .positive()
            .integer()
            .required(),
        diasFeriad: Yup
            .number()
            .positive()
            .integer()
            .required(),
        diasVacaciones: Yup
            .number()
            .positive()
            .integer()
            .required(),
        diasCapacitacion: Yup
            .number()
            .positive()
            .integer()
            .required(),
        diasReservas: Yup
            .number()
            .positive()
            .integer()
            .required(),
        controlInterno: Yup
            .number()
            .positive()
            .integer()
            .required(),
    },
    workOrder: {
        system: Yup
            .string()
            .required(),
        auditType: Yup
            .string()
            .required(),
        staff: Yup
            .array()
            .of(
                Yup
                    .string()
                    .required()
            ),
        subordinated: Yup
            .string()
            .required(),
        address: Yup
            .string()
            .required(),
        province: Yup
            .string()
            .required(),
        municipality: Yup
            .string()
            .required(),
        NAE: Yup
            .string()
            .required(),
        cubanStateEntrpSys: Yup
            .string()
            .required(),
    },
    inventory: {
        yearPlan: Yup
            .object()
            .required(),
        workOrder: Yup
            .object()
            .required(),
        element: Yup
            .object()
            .shape(
                {
                    code: Yup.string().required(), // ##############################################################
                    description: Yup.string().required(),
                    UM: Yup.string().required(),
                    SSubCant: Yup.number().required(),
                    SSubPrice: Yup.number().required(),
                    SSubImport: Yup.number().required(),
                    STECant: Yup.number().required(),
                    STETotal: Yup.number().required(),
                    SContCant: Yup.number().required(),
                    SContTotal: Yup.number().required(),
                    dif: Yup.number().required(),
                }
            )
    },
}