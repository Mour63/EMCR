import React from 'react';
import PropTypes from 'prop-types';
import style from "../Styles/signin.module.css"
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Signin = () => {
    return(
        <div className={style.signin} >

                <div className={style.leftside} >
                    <div className={style.logo} >logo</div>
                    <div className={style.quote} >let's Hire</div>
                    <div className={style.description}>description</div>
                </div>

                <div className={style.rightside} >
                </div>
        </div>
    )
           
}

Signin.propTypes = propTypes;
Signin.defaultProps = defaultProps;


export default Signin;