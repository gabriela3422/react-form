import './Home.scss';
import FormInput from "../../components/Form/Input/FormInput.jsx";
import {useState} from "react";

const Home = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const validate = () => {
        const newErrors = {};
        let isValid = true;
        if (!values.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!values.phone.trim()) {
            newErrors.phone = 'Phone is required';
            isValid = false;
        }
        if (!values.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // const data = new FormData(e.target);
        // const values = Object.fromEntries(data)
        if(!validate()){
            return false;
        }
        setValues({
            name: "",
            email: "",
            phone: "",
        });
        setErrors({
            name: "",
            email: "",
            phone: "",
        });
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    console.log(values)

    return (
        <section className="form-section">
            <form onSubmit={handleSubmit}>
                <div className={`form-group ${errors.name ? 'error-group' : ''}`}>
                    <label className="block" htmlFor="name">Numele tau</label>
                    <FormInput id="name"
                               type="text"
                               name="name"
                               placeholder="Numele tau"
                               value={values.name}
                               onChange={onChange}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label className="block" htmlFor="email">Email</label>
                    <FormInput id="email"
                               type="email"
                               name="email"
                               placeholder="Email"
                               value={values.email}
                               onChange={onChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}

                </div>
                <div className="form-group">
                    <label className="block" htmlFor="phone">Telefon</label>
                    <FormInput id="phone"
                               type="tel"
                               name="phone"
                               placeholder="Telefon"
                               value={values.phone}
                               onChange={onChange}/>
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="buttons">
                    <button type="submit">
                        Trimite
                    </button>
                </div>
            </form>
        </section>
    )
}
export default Home