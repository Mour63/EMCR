import React from 'react';
import style from "../Styles/dashboard.module.css"
import posticon from "../assets/images/posticon.png"

const Poste = (props) => {
    return(
         <div className={style.poste} >
             <div className={style.hide} >
                 <span><img alt="" src={posticon}></img></span>
                 <span> <strogn> {props.intitule} </strogn> </span>
             </div>
             <div className={style.details}>
                 <ul>
                     <li> {props.departement} </li>
                     <li> {props.lieu}</li>
                     <li> {props.contrat}</li>
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