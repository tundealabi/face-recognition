import axios from 'axios';

let imageRoute = "http://localhost:5000/face-recog/image";

if(process.env.NODE_ENV === "production"){
    imageRoute = "https://face-recog-api-4780.herokuapp.com/face-recog/image"
}

// const databaseRoute = {
//     login: loginRoute,
//     register: registerRoute,
// }

const imageApi = async(data: {imageUrl: string, email?: string}) => {
    const response = await axios.post(imageRoute,{image: data.imageUrl, email: data.email})
    if(response.data.message){
        throw new Error(response.data.message);
    }
    return response.data;
}




export default imageApi;