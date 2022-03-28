import React ,{useState} from 'react';
//mport PropTypes from 'prop-types';
import style from "../Styles/signin.module.css"
import logo from "../assets/images/logo.png"
import quotes  from './quotes';

//const propTypes = {};

//const defaultProps = {};

/**
 * 
 */
const Signin = () => {
    const [index, setindex] = useState(0)
    const quote = quotes[index]
    const normalcolor = "rgba(255, 255, 255, 0.2)"
    const [bgcolors, setbgcolors] = useState(["white",normalcolor,normalcolor])
    function nextQuote(i){
        setindex(i)
    }
    return(
        <div className={style.signin} >
            {/**left side ---------------------------------------------- begin Here : */}
                <div className={style.leftside} >
                    <div className={style.logo} >
                      <img alt="" src={logo} ></img>
                    </div>
                    <div className={style.quote} >Let's Change the way we Hire!</div>
                    <div className={style.description}>
                         <p> {quote}  </p>  
                         <button onClick={() => nextQuote(0)}  style={{backgroundColor: bgcolors[0]}} ></button>
                         <button onClick={() => nextQuote(1)}  style={{backgroundColor: bgcolors[1]}} ></button>
                         <button onClick={() => nextQuote(2)}  style={{backgroundColor: bgcolors[2]}} ></button>
                    </div>
                </div>
            { /**left side ------------------------------------------------ end Here : */}
            { /**right side ------------------------------------------------ start Here : */}
                <div className={style.rightside} >
                    <div className={style.logoright} > 
                        <img alt="" src={logo} ></img>
                    </div>
                    <div className={style.formcontainer}>
                        <div className={style.title} >
                            <p className={style.welcome}>Welcome back to  HR impact!</p>
                            <p className={style.letslogin}>Let’s Login into your Account!</p>
                            <div className={style.signin_up}>
                                <button>Login  </button>
                                <button>Sign up</button>
                            </div>
                        </div>
                        <div style={style.form} >
                                <p>sig in form</p>
                        </div>

                        
                    </div>    
                </div>
        </div>
    )
   
}

//Signin.propTypes = propTypes;
//Signin.defaultProps = defaultProps;


export default Signin;