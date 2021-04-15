import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAR_8QZ_KH6B2jpCs5INxe0C35EZc0xX2U",
  authDomain: "face-recog-e9745.firebaseapp.com",
  projectId: "face-recog-e9745",
  storageBucket: "face-recog-e9745.appspot.com",
  messagingSenderId: "200954886454",
  appId: "1:200954886454:web:982c5a83b2a8e0e3ab9b97",
  measurementId: "G-24DJBQP3WN",
};

firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const storageRef = firebase.storage().ref();

export const uploadToFireStorage = async (imageFile: File) => {
    let isFileImage = imageFile.type.includes("image")
    if (isFileImage) {
        let metadata = {
            contentType: imageFile.type || 'images/jpeg'
        }
    let uploadImage = await storageRef.child(`user-image/${imageFile.name}`).put(imageFile,metadata);
    return await uploadImage.ref.getDownloadURL()
    

    } else {
        throw new Error ("Invalid file type")
    }

};

