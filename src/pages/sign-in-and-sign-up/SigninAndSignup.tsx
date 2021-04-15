import Register from "components/register/Register";
import SignIn from "components/sign-in/sign-in";
import { useAppSelector } from "redux/hooks";


const SigninAndSignupPage = () => {
    const formType = useAppSelector(({form}) => form.type);
    return (
        <>
        {
            formType === "login" ?
            <SignIn />
            :
            <Register />
        }
        </>
    )  
} 

export default SigninAndSignupPage;