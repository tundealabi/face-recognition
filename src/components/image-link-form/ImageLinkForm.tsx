import FormInput from 'components/form-input/FormInput';
import { FormEvent, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import imageCheck from 'utils/face-recog/image-check';
import './image-link-form.scss';
import { fetchImageRecog, imageCheckFailed } from 'redux/face-recognition/faceRecogSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import UploadBtn from 'components/upload-button/uploadBtn';
import { incEntries } from 'redux/user/userSlice';

const ImageLinkForm = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(({ user: { userState } }) => userState );
    const faceRecogStatus = useAppSelector(({ faceRecog }) => faceRecog.faceRecogState.status);
    const [ imageUrl, setImageUrl] = useState("");
    const [ useUpload, setUpload ] = useState(true);
    useEffect(() => {
        if(faceRecogStatus === 'idle') {
            setImageUrl("")
            setUpload(true)
        }
        if(faceRecogStatus === 'success') dispatch(incEntries())
    },[faceRecogStatus])
    const handleInputChange = (evet: React.FormEvent<HTMLInputElement>) => {
        let inputValue = (evet.target as HTMLInputElement).value
        setImageUrl(inputValue.trim());
        inputValue.trim().length ? setUpload(false) : setUpload(true);
    }
    const handleImageSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if(imageUrl.length){
            let result = await imageCheck(imageUrl)
            if(result) {
                try {
                    const dispatchResp = await dispatch(fetchImageRecog({imageUrl,email:user?.email}))
                    await unwrapResult(dispatchResp);
                    setImageUrl("");
                } catch (error) {
                    console.log(error)
                }
            }else{
                dispatch(imageCheckFailed("error"))
            }
        }
        
    } 
    return (
        <div>
            <p className="f3">
                {"This magic brain will detect faces in your pictures. Give it a try."}
            </p>
            <div className="center" >
                <form className="form center shadow-5 br3 pa4" onSubmit={handleImageSubmit} >
                <FormInput imageForm type="text" value={imageUrl} onChange={handleInputChange} faceRecogStatus={faceRecogStatus} />
                <UploadBtn useUpload={useUpload} faceRecogStatus={faceRecogStatus} userEmail={user?.email}/>
                </form>
            </div>

        </div>
    )
}


export default ImageLinkForm;
