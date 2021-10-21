import * as Yup from "yup";

export const yupOptions = {
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
        // .min(8, 'Password must be at least 8 characters long')
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
}