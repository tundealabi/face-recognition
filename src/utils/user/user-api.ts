import axios from 'axios';

let loginRoute = "http://localhost:5000/user/login";
let registerRoute = "http://localhost:5000/user/register"

if(process.env.NODE_ENV === "production"){
    loginRoute = "https://face-recog-api-4780.herokuapp.com/user/login"
    registerRoute = "https://face-recog-api-4780.herokuapp.com/user/register"
}

const databaseRoute = {
    login: loginRoute,
    register: registerRoute,
}

const userApi =  {
    logUserIn: async (loginDetails:{email: string, password: string}) => {
            const response = await axios.post(databaseRoute.login, {
                ...loginDetails
            })
            if(response.data.message){
                throw new Error("Wrong email or password");
            }
            return response.data;
    },
    registerUser: async (registerDetails:{username: string, email: string, password: string}) => {
        const response = await axios.post(databaseRoute.register, {
            ...registerDetails
        })
        if(response.data.message){
            throw new Error("Email is already taken");
        }
        return response.data;
    }
}



export default userApi;