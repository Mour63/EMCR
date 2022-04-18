import React , {useState ,useEffect}from 'react';
import Sidebar from './sidebar';
import style from "../Styles/dashboard.module.css"
import Poste from './poste';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import axios from "axios"


const Dashboards = () => {
    const baseURL = "http://localhost:5000/home";
    const [post, setpost] = useState([])
    useEffect(() => {
       axios.get(baseURL).then((res)=>{
          setpost(res.data[0].nom)
          console.log(res.data)
       });
    }, [])
    return (
            <div className={style.dashboard} >
                <Sidebar/> 
                    <div className={style.postes}>
                        <Poste intitule={post}
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