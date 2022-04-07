import React ,{ useState } from 'react';
import Sidebar from '../sidebar';
import style from  './addoffre.module.css'
import Postinformation from "./postinformation"
import ProfilRecherche from './ProfilRecherche';
import Details from './details';
import SavePublish from './savePublish';
const Addoffre = () => {
    const [step, setstep] = useState(1)
    const [formData, setFormData] = useState({
        Intitule: " ",
        activités_Poste : "",
        Benifique: "",
        Pays: "" ,
        ville : "", 
        Mode : "" ,
        Mobilite_exigence : "",
        diplome : "",
        ecole : "", 
        specialite : "" ,
        niveau : "", 
        Qualite_Technique : [] ,
        Qualite_Relationelle : [] , 
        Aures_exigence : "" , 
        date_debut : "" , 
        date_fin : "" , 
        type_contrat : "" , 
        Nbr_prfile : "" 
      })
    const nextStep= () => {
        setstep(step+1)
    }
    const prevStep= () => {
        setstep(step-1)
    }
    const handleInputData = input => e => {
        const {value} = e.target;
        setFormData(prevState => ({
          ...prevState,
          [input]: value
      }));
    }    
    switch (step) {
        case 1:
            return (
                <div className={style.addoffre} >
                    <Sidebar/>  
                    <div className={style.offreforms}>
                        <Postinformation nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                    </div>
                </div>
              );
        case 2:
            return (
                <div className={style.addoffre} >
                    <Sidebar/>  
                    <div className={style.offreforms}>
                          <ProfilRecherche nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                    </div>
                    </div>
                  );
        case 3:
            return (
                <div className={style.addoffre} >
                    <Sidebar/>  
                    <div className={style.offreforms}>
                          <Details nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                    </div>
                    </div>
                  );
        default:
            return (
                <div className={style.addoffre} >
                     <Sidebar/>  
                     <div className={style.offreforms}>
                         <SavePublish values={formData}/>
                     </div>
            </div>);
            
    }
}
export default Addoffre;