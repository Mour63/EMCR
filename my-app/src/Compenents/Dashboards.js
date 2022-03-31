import React from 'react';
import Sidebar from './sidebar';
import style from "../Styles/dashboard.module.css"
import Poste from './poste';

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
                </div>
            </div>
            );
}


export default Dashboards;