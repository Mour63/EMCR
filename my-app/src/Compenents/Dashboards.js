import React from 'react';
import Sidebar from './sidebar';
import style from "../Styles/dashboard.module.css"
import Poste from './poste';

const Dashboards = () => {
    return (
            <div className={style.dashboard} >
                <Sidebar/>
                <div className={style.postes}>
                    <Poste/>
                    <Poste/>
                    <Poste/>
                    <Poste/>
                    <Poste/>
                    <Poste/>
                </div>
            </div>
            );
}


export default Dashboards;