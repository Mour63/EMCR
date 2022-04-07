import React from 'react';

const Details =({ nextStep, handleFormData, values }) => {
    const submitFormData = (e) => {
        nextStep();
        e.preventDefault();
      };
    return ( 
            <div>
                <form onSubmit={() =>{submitFormData()}}>
                        <input placeholder='profile' name="activités_Poste" defaultValue={values.Intitule} onChange={()=>{handleFormData("activités_Poste")}} ></input>
                        <button type='submit' primary >Details</button>
                </form>
            </div>);
}


export default Details;