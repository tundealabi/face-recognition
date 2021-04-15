import axios from 'axios';

const imageCheck = async(imageUrl: string) => {
    try {
        const response = await axios.get(imageUrl);
        if(response.status === 200 && response.headers['content-type'] === 'image/jpeg'){
            return true;
        }
    } catch (error) {
        return false;
    }
   
}



export default imageCheck;