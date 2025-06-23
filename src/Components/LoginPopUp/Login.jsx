import React from 'react'
import './Login.css'
import { useState } from 'react'
const Login = ({setShowLogin}) => {

    const[currState,setCurrState] = useState("Sign In")
  return (
    <div className='Login-PopUp'>
      <form  className="loginContainer">
        <div className="loginTitle">
            <h2 className='font-bold text-lg'>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={'src/assets/close.svg'} alt="" />
        </div>
        <div className="login-input">
            {currState==="Login"?<></> : <input type="text" placeholder='Your name' required /> }
           
            <input type="email" placeholder='abc123@gmail.com' required />
            <input type="password" placeholder='Password' required />
        </div>

        <button>{currState==="Sign In" ? "Create Account" :"Login"}</button>

        <div className="login-condition">

            <input type="checkbox" required/>
            <p className='text-black'>By continuing,I agree to the terms of Use & privacy policy</p>

        </div>

        {
            currState==='Login'
            ?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign In")}>Click here</span></p>

            : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span> </p>
        }

      </form>
    </div>
  )
}

export default Login
