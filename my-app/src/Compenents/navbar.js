import React from 'react';
import style from "../Styles/navbar.module.css"
import logo from "../assets/images/logo.png"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import profil from "../assets/images/profil.png"

// import PropTypes from 'prop-types';

// const propTypes = {};

// const defaultProps = {};

const Navbar = () => {
    return(
        <div className={style.navbar} >
           <div className={style.logo} >
                <img alt="" src={logo} ></img>
           </div>
           <div className={style.rightside} >
               <div>
                   <TextField placeholder='Search post' variant="outlined"
                    sx={{ background: "#FAFAFA" }} 
                    className={style.searchinput}
                    size="small"
                    InputProps={{
                    sx: { background: "#FAFAFA" ,border: "none" },
                    endAdornment: (
                     <InputAdornment position="end">
                        <SearchIcon  sx={{ color: "#FF8252",cursor : "pointer" }} />
                     </InputAdornment>
                    )
                   }}   />
               </div>
               <div>
                    <button> 
                         <span><AddOutlinedIcon /></span>
                         <span> create offre</span>
                    </button>
               </div>
               <div className={style.notification}><NotificationsNoneOutlinedIcon sx={{ color: "#FF8252",cursor : "pointer"  }} /></div>
               <div className={style.profileimg}><img alt="" src={profil}></img></div>
           </div>
        </div>
    )}

// navbar.propTypes = propTypes;
// navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;