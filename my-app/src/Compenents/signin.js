import React ,{useState} from 'react';
//mport PropTypes from 'prop-types';
import style from "../Styles/signin.module.css"
import logo from "../assets/images/logo.png"
import quotes  from './quotes';
import google from "../assets/images/googleicon.png"

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
        setbgcolors("white")
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
                        <form style={style.forminputs}  >
                                <label>
                                    <p>E-mail Adresse</p>
                                    <input type="email" placeholder='Enter your email'  />
                                </label>
                                <label>
                                    <p>Password</p>
                                    <input type="password" placeholder='Enter your password'  />
                                </label>
                                <label>
                                    <button type="submit">Login</button>
                                </label>
                                <div className={style.orusing} >
                                    <div> <hr/> </div>
                                    <div>OR USING</div>
                                    <div> <hr/> </div>
                                </div>
                                <button className={style.google}>
                                    <div><img alt="" src={google} ></img></div>
                                    <div>Google</div>
                                </button>
                        </form>
                    </div>    
                </div>
        </div>
    )
   
}

//Signin.propTypes = propTypes;
//Signin.defaultProps = defaultProps;


export default Signin;