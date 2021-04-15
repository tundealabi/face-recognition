import { useAppSelector } from "redux/hooks";


const ImageUploadCount = () => {
    const user = useAppSelector(({ user: { userState } }) => userState )
    return (
        <div>
            <div className=" white f3">
                {user && `${user.username}, your current entry count is.....`}
            </div>
            <div className=" white f1">
                {user?.entries}
            </div>
            
            

        </div>
    )
}


export default ImageUploadCount;
