import React from 'react';
import style from "../Styles/navbarsidebar.module.css"
import logo from "../assets/images/logo.png"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

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
                    className={style.searchinput}
                    size="small"
                    InputProps={{
                    endAdornment: (
                     <InputAdornment position="end">
                        <SearchIcon/>
                     </InputAdornment>
                    ),
                    className : style.searchinput
                   }}   />
               </div>
               <div>
                    <button> 
                         <span><AddOutlinedIcon color='#FF8252' /></span>
                         <span> create offre</span>
                    </button>
               </div>
               <div><NotificationsNoneOutlinedIcon/></div>
               <div>profile img</div>
           </div>
        </div>
    )}

// navbar.propTypes = propTypes;
// navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;