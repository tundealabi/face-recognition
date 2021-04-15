import { selectFormType } from "redux/form/formSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { logUserOut } from "redux/user/userSlice";

const Navigation = () => {
    const formType = useAppSelector(({ form }) => form.type);
    const userState = useAppSelector(({ user }) => user.userState)
    const dispatch = useAppDispatch();
    
    if(userState){
        return (
            <nav style={{display:'flex',justifyContent:'flex-end'}} >
            <p  className="f3 link dim pa3 pointer underline black" onClick={() => dispatch(logUserOut())} >Sign Out</p>
        </nav>
        )
    }else{
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}} >
                {
                    formType === "login" ? (
                    <p  className="f3 link dim pa3 pointer underline black" onClick={() => dispatch(selectFormType("register"))}>Register</p> 
                    ) : ( 
                    <p  className="f3 link dim pa3 pointer underline black" onClick={() => dispatch(selectFormType("login"))} >Sign In</p>
                    )
                }
        </nav>
    
        )
    }
        
}


export default Navigation;