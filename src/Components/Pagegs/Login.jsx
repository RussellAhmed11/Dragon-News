import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContex } from '../../Provider/AuthProvider';

const Login = () => {
    const {logInUser,setUser}=useContext(authContex)
    const [error,setError]=useState({})
    const location=useLocation()
    console.log(location)
    const navigate=useNavigate()
    const handleLogIn=(e)=>{
       e.preventDefault();
       const form=e.target;
       const email=form.email.value;
       const password=form.password.value;
      logInUser(email,password)
      .then(result=>{
        setUser(result.user)
        navigate(location?.state ? location.state : "/")
      })
      .catch(err=>{setError({...error,login:err.code})})
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                 <h2 className='text-2xl text-center font-poppins'>Login your account</h2>
                <form onSubmit={handleLogIn} className="card-body"> 
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        {
                            error.login &&  <label className="text-red-500 text-sm">{error.login}</label>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-center '>Don't have accout?<Link className='text-red-500' to="/auth/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;