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
    function nextQuote(i){
        setindex(i)
    }
    return(
        <div className={style.signin} >

                <div className={style.leftside} >
                    <div className={style.logo} >
                      <img alt="" src={logo} ></img>
                    </div>
                    <div className={style.quote} >Let's Change the way we Hire!</div>
                    <div className={style.description}>
                         <p> {quote}  </p>  
                         <button onClick={() => nextQuote(0)}></button>
                         <button onClick={() => nextQuote(1)}></button>
                         <button onClick={() => nextQuote(2)}></button>
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