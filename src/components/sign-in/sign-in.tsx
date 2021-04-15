import { Formik } from 'formik';
import FormInput from "components/form-input/FormInput";
import { signInSchema } from "utils/form/yup-schemas";
import FormButton from "components/form-button/FormButton";
import { useAppDispatch } from "redux/hooks";
import { selectFormType } from "redux/form/formSlice";
import { fetchUserOnLogin } from "redux/user/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

const SignIn = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    
    const initialValues: {email: string, password: string} = {email:"", password: ""}
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <Formik
                    validationSchema={signInSchema}
                    initialValues={initialValues}
                    onSubmit={(values,actions) => {
                        actions.setSubmitting(true);
                        dispatch(fetchUserOnLogin(values))
                            .then(unwrapResult)
                            .then(() => history.push("/"))
                            .catch(error => {
                                actions.setSubmitting(false);
                                actions.setFieldError("password",error.message)
                            })
                    }}
                >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                    isSubmitting
                }) => (

                
            <form className="pa4 black-80" noValidate onSubmit={handleSubmit}>
                 <div className="measure">
                     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                     <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                         <FormInput  
                            type="email"
                            name="email" 
                            id="email-address"
                            value={values.email} 
                            onChange={handleChange}
                            onBlur={handleBlur} />
                             <p className="red">{touched.email && errors.email ? errors.email : null}</p>
                     </div>
                     <div className="mv3">
                         <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                         <FormInput  
                            type="password"
                            name="password" 
                            id="password"
                            value={values.password} 
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                             <p className="red">{touched.password && errors.password ? errors.password : null}</p>
                     </div>
                     </fieldset>
                     <div>
                     <FormButton text="Sign in" isDisabled={isSubmitting} />
                     </div>
                     <div className="lh-copy mt3">
                     <p className="f6 link dim black db  pointer" onClick={() => dispatch(selectFormType("register"))} >Register</p>
                    
                     </div>
                 </div>
                 </form>
                 )}
                 </Formik>
                 </article>
 
       
     );
    }
    


export default SignIn;
