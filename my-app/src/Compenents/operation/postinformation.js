import React ,{ useState }  from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const Postinformation = ({ nextStep, handleFormData, values }) => {
    const [email, setisemail] = useState(false)
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep() ;
        console.log(values.Intitule)
      };
    return ( 
            <div>
                <form onSubmit={()=>{submitFormData()}}>
                        <input placeholder='post' name="Intitule" defaultValue={values.Intitule} onChange={()=>{handleFormData("Intitule")}} ></input>
                        <button type='submit' primary >Post</button>
                        <button type='submit' primary >Post</button>
                        <button type='submit' primary >Post</button>
                        <button type='submit' primary >Post</button>
                </form>
            </div>);
}

export default Postinformation;