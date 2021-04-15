import FormInput from 'components/form-input/FormInput';
import { Formik } from 'formik';
import { registerSchema } from 'utils/form/yup-schemas';
import FormButton from 'components/form-button/FormButton';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchUserOnRegister } from 'redux/user/userSlice';
const Register = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const initialValues: {username:string, email: string, password: string} = {username: "", email: "", password: ""}
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                 <Formik
                    validationSchema={registerSchema}
                    initialValues={initialValues}
                    onSubmit={(values,actions) => {
                        actions.setSubmitting(true);
                        console.log({ values, actions });
                        dispatch(fetchUserOnRegister(values))
                            .then(unwrapResult)
                            .then(() => history.push("/"))
                            .catch(error => {
                                actions.setSubmitting(false);
                                actions.setFieldError("email",error.message)
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
            <form className="pa4 black-80" noValidate onSubmit={handleSubmit} >
                 <div className="measure">
                     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                     <legend className="f1 fw6 ph0 mh0">Register</legend>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                         <FormInput 
                            type="text"
                            name="username" 
                            id="username" 
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                             />
                        <p className="red">{touched.username && errors.username ? errors.username : null}</p>
                     </div>
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
                            onChange= {handleChange}
                            onBlur={handleBlur}
                            />
                     </div>
             
                     </fieldset>
                     <div >
                     <FormButton text="Register" isDisabled={isSubmitting} />
                     </div>
                    
                 </div>
                 </form>
                 )}
                 </Formik>
                 </article>
 
       
     );
    }


export default Register;
