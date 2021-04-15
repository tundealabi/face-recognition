import FaceRecognitionDisplay from "components/face-recognition-display/FaceRecognitionDisplay"
import ImageLinkForm from "components/image-link-form/ImageLinkForm"
import Logo from "components/logo/Logo"
import ImageUploadCount from "components/upload-count/UploadCount"

const HomePage = () => {
    return (
        <div>
            <Logo />
            <ImageUploadCount />
            <ImageLinkForm />
            <FaceRecognitionDisplay />
        </div>
    )
}

export default HomePage;