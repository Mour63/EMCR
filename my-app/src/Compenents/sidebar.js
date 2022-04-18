import React from 'react';
import style from "../Styles/sidebar.module.css"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ApprovalIcon from '@mui/icons-material/Approval';


const Sidebar = () => {
    return(
        <div className={style.sidebar}>
            <div className={style.options}>
                <div>
                    <span><DashboardOutlinedIcon/></span>
                    <span className={style.oplabel} >Dashboard</span>
                </div>
                <div>
                    <span><InsightsOutlinedIcon/></span>
                    <span className={style.oplabel} >Statistic</span>
                </div>
                <div>
                    <span><ApprovalIcon/></span>
                    <span className={style.oplabel} >Approval</span>
                </div>
            </div>
            <div className={style.setting}>
                <span><SettingsOutlinedIcon/></span>
                <span className={style.oplabel}>Setting</span>
                <span className={style.oplabel}>Setting</span>
                <span className={style.oplabel}>Setting</span>
                <span className={style.oplabel}>Setting</span>
            </div>
        </div>
    ) ;
}

// #endregion

export default Sidebar;