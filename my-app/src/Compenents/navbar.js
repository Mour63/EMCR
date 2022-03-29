import React from 'react';
import style from "../Styles/navbarsidebar.module.css"
import logo from "../assets/images/logo.png"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

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
                   <TextField placeholder='Search post'  className={style.searchinput}
                    InputProps={{
                    endAdornment: (
                     <InputAdornment position="end">
                        <SearchIcon/>
                     </InputAdornment>
                    )
                   }}   />
               </div>
               <div>
                    <button>create offre</button>
               </div>
               <div>notification</div>
               <div>profile img</div>
           </div>
        </div>
    )}

// navbar.propTypes = propTypes;
// navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;