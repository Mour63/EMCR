import React from 'react';
import Sidebar from './sidebar';
import style from "../Styles/dashboard.module.css"
import Poste from './poste';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';


const Dashboards = () => {
  
    return (
            <div className={style.dashboard} >
                <Sidebar/> 
                    <div className={style.postes}>
                        <Poste intitule="ReactJs/Nodj Developer "
                            departement="Departement IT"
                            lieu ="Casablanca, avenu des far 44" 
                            contrat="CDI"
                            nbrcandidat="123"
                            etat="Ferme"
                            nbrprofil="50"
                        />
                        <Poste intitule="ReactJs/Nodj Developer "
                            departement="Departement IT"
                            lieu ="Casablanca, avenu des far 44" 
                            contrat="CDI"
                            nbrcandidat="123"
                            etat="Ferme"
                            nbrprofil="50"
                        />
                        <Poste intitule="ReactJs/Nodj Developer "
                            departement="Departement IT"
                            lieu ="Casablanca, avenu des far 44" 
                            contrat="CDI"
                            nbrcandidat="123"
                            etat="Ferme"
                            nbrprofil="50"
                        />
                        <Poste intitule="ReactJs/Nodj Developer "
                            departement="Departement IT"
                            lieu ="Casablanca, avenu des far 44" 
                            contrat="CDI"
                            nbrcandidat="123"
                            etat="Ferme"
                            nbrprofil="50"
                        />
                        <Poste intitule="ReactJs/Nodj Developer "
                            departement="Departement IT"
                            lieu ="Casablanca, avenu des far 44" 
                            contrat="CDI"
                            nbrcandidat="123"
                            etat="Publier"
                            nbrprofil="50"
                        />
                        <Poste intitule="ReactJs/Nodj Developer "
                            departement="Departement IT"
                            lieu ="Casablanca, avenu des far 44" 
                            contrat="CDI"
                            nbrcandidat="123"
                            etat="5 jours"
                            nbrprofil="50"
                        />
                        <div className={style.morebutton}  > 
                           <button> Afficher les 6 offres suivantes <NavigateNextOutlinedIcon/>  </button>
                        </div>
                    </div>
            </div>
            );
}

export default Dashboards;