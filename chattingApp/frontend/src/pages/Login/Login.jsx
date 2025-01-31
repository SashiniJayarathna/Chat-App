import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets';
import { login, signup,resetPass } from '../../confg/firebase';

const Login = () => {
  const [currState, setCurrentState] = useState('Sign Up');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    if(currState==="Sign ip"){
      signup(userName,email,password);
    }
    else{
      login(email,password)
    }
  }

  return (
    <div className="login">
      <img src={assets.logo_big} alt="Logo" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === 'Sign Up' && <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text"/> &&  (
          <input type="text" placeholder="Username" className="form-input" required />
        )}
        <input onChange={(e)=>setEmail(e.target.value)}value={email}type="email" placeholder="Email address" className="form-input" required />
        <input onClick={(e)=>setPassword(e.target.value)} value={password}type="password" placeholder="Password" className="form-input" required />
        <button type="submit">
          {currState === 'Sign Up' ? 'Create Account' : 'Login Now'}
        </button>
        {currState === 'Sign Up' && (
          <div className="login-term">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
        )}
        <div className="login-forgot">
          <p className="login-toggle">
            {currState === 'Sign Up' ? (
              <>
                Already have an account?{' '}
                <span onClick={() => setCurrentState('Login')}>Login here</span>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
              </>
            )}
            
          </p>
            {
            currState === 'Login'?<p className="login-toggle">Forgot Password?<span onclick={() =>resetPass(email) }>reset here</span></p>:null
            }
        </div>
      </form>
    </div>
  );
};

export default Login;
