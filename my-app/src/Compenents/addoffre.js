import React from 'react';
import Sidebar from './sidebar';
import style from '../Styles/addoffre.module.css'


const Addoffre = () => {
    return (
            <div className={style.addoffre} >
                 <Sidebar/>  
                 <div className={style.offreforms}>
                    <p>programme</p>
                    <p>programme</p>
                    <p>programme</p>
                    
                 </div>
            </div>);
}
export default Addoffre;