
const FormInput = ({name, onChange, id, type, placeholder, value}) =>{
    return (
        <input type={type}
               id={id}
               value={value}
               name={name}
               placeholder={placeholder}
               onChange={onChange}
        />
    )
}

export default FormInput;