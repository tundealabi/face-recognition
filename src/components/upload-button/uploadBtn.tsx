import { useRef } from 'react';
import { fetchImageRecogByUpload, resetFaceRecog } from 'redux/face-recognition/faceRecogSlice';
import { useAppDispatch } from 'redux/hooks';

type UploadBtnProps  = {
    useUpload: boolean,
    faceRecogStatus: string
}

const UploadBtn = ( { useUpload, faceRecogStatus }:UploadBtnProps ) => {
    const dispatch = useAppDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileUpload = () => {
        if(fileInputRef.current) fileInputRef.current.click();
    }
    const onImageDrop = async (e:React.ChangeEvent<HTMLInputElement>) => {
        try {
            if(e.target.files?.length) {
                try {
                    dispatch(fetchImageRecogByUpload(e.target.files[0]));
                } catch (err) {
                    dispatch(resetFaceRecog("error"))
                }
            }
        } catch (error) {
            console.log("error-uploadBtn",error);
        }
    }
    return (
        <>
       
        {
            useUpload && faceRecogStatus !== "success" ?
            <>
            <input className="hide" type="file" accept="image/*" ref={fileInputRef} onChange={onImageDrop} />
            <button className="center w-30 grow ph1 pv2 dib white link f4" onClick={handleFileUpload} type="button" >upload</button>
            </>
            :
            faceRecogStatus !== "success" ?
            <button className="center w-30 grow ph1 pv2 dib white link f4" >Detect</button>
            :
            <button className="center w-30 grow ph1 pv2 dib white link f4" type="button" onClick={() => dispatch(resetFaceRecog("idle"))}>reset</button>
        }

        </>
     
    )
}

export default UploadBtn;


                //  URL.createObjectURL(event.target.files[0]),
                // progress: Math.round((100 * event.loaded) / event.total),//uploading 
                   // <input type="file" onChange={onImageDrop} accept="image/*"/>