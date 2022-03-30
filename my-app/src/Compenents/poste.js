import React from 'react';
import style from "../Styles/dashboard.module.css"

const Poste = (props) => {
    return(
         <div className={style.poste} >
               {props.name}
         </div>
         );
}

// #endregion

export default Poste;