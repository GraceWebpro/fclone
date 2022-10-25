import React from 'react'
import { useState } from 'react'
import Logo from '../../assets/face3.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory('');

    const login = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user logged in', cred.user)
            history.push('/');
        })
        .catch((e) => {
            if (
                e.message === "The password is invalid or the user does not have a password"
            ) {
                alert('Please check your credentials again')
            } else if (
                e.message === "Firebase: Error (auth/user-not-found)."
            ) {
                alert('Please check your credentials again')
            } else {
                alert(e.message)
            }
        })
    }

    const google =() => {

    }

  return (
    <div classname='login'>
        <center>
            <img src={Logo} alt='Facebook Logo' className='login-logo' />
            <div className='login-container'>
                <h3>Log In To Facebook</h3>
                <form>
                    <center>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' />
                    </center> 
                    <center>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    </center>
                    <center>
                        <button type='submit' onClick={login} className='login-btn'>Log In</button>
                    </center>
                    <center>
                        <div className='side-info'>
                            <Link to='/reset' style={{textDecoration: 'none'}}><h5 className='rtd'>Forgotten password?</h5></Link>
                        </div>
                    </center>
                    <center>
                        <hr className='line'/>
                    </center>
                    <center>
                        <Link to='/register'>
                            <button onClick={google} className='login-create'>Create New Account</button>
                        </Link>
                    </center>
                </form>
            </div>
        </center>
    </div>
  )
}

export default Login