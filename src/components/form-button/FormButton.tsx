type FormButtonProps = {
    text: string,
    isDisabled: boolean
}


const FormButton = ({ text, isDisabled }:FormButtonProps) => (
    <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" disabled={isDisabled} >{text}</button>
)

export default FormButton;