
type FormInputProps = {
    imageForm?: boolean
    type: string,
    name?: string,
    value: string,
    id?: string,
    onChange: React.FormEventHandler<HTMLInputElement>,
    onBlur?: React.FormEventHandler<HTMLInputElement>,
    faceRecogStatus?: string
};

const FormInput = ({ imageForm, faceRecogStatus, ...otherProps }:FormInputProps) => {
    const classess = {
        signUpInput: `${otherProps.type === "password" ? "b" : "" } pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100`,
        ImageLinkForm: "center w-70 pa2 f4"
    }
    return (
    <input className={imageForm ? classess.ImageLinkForm : classess.signUpInput} {...otherProps} disabled={faceRecogStatus === 'success'} />
     )
    }

export default FormInput;