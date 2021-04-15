import './image-error.scss';
import errorImage from 'assets/error.png';
import { useAppDispatch } from 'redux/hooks';
import { resetFaceRecog } from 'redux/face-recognition/faceRecogSlice';

const ImageError = () => {
    const dispatch = useAppDispatch();
    return (
    <div className="error-container">
        <div className="image-container">
            <img src={errorImage} alt="error" className="error-image"/>
        </div>
        <div className="error-message">
        <p>Failed to process image</p>
        <p>Try again or try another image...</p>
        </div>
        <button className="reload-btn" onClick={() => dispatch(resetFaceRecog("idle"))} >Reload</button>
    </div>
)}

export default ImageError;