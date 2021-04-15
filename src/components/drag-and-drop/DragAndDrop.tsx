import React from 'react';
import { fetchImageRecogByUpload } from 'redux/face-recognition/faceRecogSlice';
import { useAppDispatch } from 'redux/hooks';
import './drag-and-drop.scss';

const DragAndDrop = () => {
const dispatch = useAppDispatch();
const handleDrop = (e:React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
        dispatch(fetchImageRecogByUpload(e.dataTransfer.files[0]))
    } catch (error) {
        console.log('Error from drag and drop file',error)
    }
    
}
const handleDragOver = (e:React.DragEvent) => {
    e.preventDefault();
    (e.target as HTMLDivElement).style.borderColor = "red";
};
const handleDragLeave = (e:React.DragEvent) => {
    (e.target as HTMLDivElement).style.borderColor = "white";
};
    return (
        <div className='drag-drop' onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} >
            Drag And Drop Your Image Here
        </div>
    )
}

export default DragAndDrop;