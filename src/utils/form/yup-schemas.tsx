import * as Yup from 'yup';
// import yupP from 'yup-password';

const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').trim().required('Email field is required'),
    password: Yup.string().required("Password field is required").matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Min 0f 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
})
const registerSchema = Yup.object().shape({
    username: Yup.string().min(3,"username must be more than two characters").max(15,"Username must be less than 15 characters").matches(/^[a-zA-Z]+$/,"Username must contain only alphabets").required("Username field is required"),
    email: Yup.string().email('Invalid email address').trim().required('Email field is required'),
    password: Yup.string().required("Password field is required").matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Min 0f 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
})



export { signInSchema, registerSchema }
