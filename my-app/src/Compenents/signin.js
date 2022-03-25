import React from 'react';
//mport PropTypes from 'prop-types';
import style from "../Styles/signin.module.css"
import logo from "../assets/images/logo.png"

//const propTypes = {};

//const defaultProps = {};

/**
 * 
 */
const Signin = () => {
    return(
        <div className={style.signin} >

                <div className={style.leftside} >
                    <div className={style.logo} >
                      <img src={logo} ></img>
                    </div>
                    <div className={style.quote} >let's Hire</div>
                    <div className={style.description}>
                        <p>Recruiting candidates is easier than ever with EMCRecruitement .
                           Whether you work for a recruitment agency or in a human resources department,
                           software is made for you. Start now!</p>
                    </div>
                </div>
                <div className={style.rightside} >
                </div>
        </div>
    )
           
}

//Signin.propTypes = propTypes;
//Signin.defaultProps = defaultProps;


export default Signin;