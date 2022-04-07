import React from 'react';

const ProfilRecherche = ({ nextStep, handleFormData, values }) => {
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
      };
    return ( 
            <div>
                <form onSubmit={() =>{submitFormData()}}>
                        <input placeholder='profile' name="activités_Poste" defaultValue={values.Intitule} onChange={()=>{handleFormData("activités_Poste")}} ></input>
                        <button type='submit' primary  >Profile</button>
                </form>
            </div>);
}

export default ProfilRecherche;