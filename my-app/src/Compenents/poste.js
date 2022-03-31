import React from 'react';
import style from "../Styles/dashboard.module.css"
import posticon from "../assets/images/posticon.png"
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

const Poste = (props) => {
    return(
         <div className={style.poste} >
             <div className={style.hide} >
                 <p><img alt="" src={posticon}></img></p>
                 <p> <strogn> {props.intitule} </strogn> </p>
             </div>
             <div className={style.details}>
                 <ul>
                     <li><MapsHomeWorkOutlinedIcon/> <span>{props.departement}</span></li>
                     <li><PlaceOutlinedIcon/>  <span>{props.lieu}</span> </li>
                     <li><WorkOutlineOutlinedIcon/> <span> {props.contrat}</span></li>
                     <li><ConfirmationNumberOutlinedIcon/> <span> {props.nbrprofil} Places </span> </li>
                 </ul>
             </div>
             <div className={style.buttons}>
                 <button> {props.nbrcandidat} candidats</button>
                 <button> {props.etat}   </button>
             </div>
         </div>
         );
}

// #endregion

export default Poste;