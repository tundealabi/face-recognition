import Tilt from 'react-tilt';
import "./Logo.scss"
import icon from "assets/brain-icon.png";



const Logo = () => {
    return (
        <div className="ma4 mt0" >
            <Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"> 
            <img style={{paddingTop:'5px'}} src={icon} alt="icon"/> </div>
            </Tilt>

        </div>
    )
}


export default Logo;