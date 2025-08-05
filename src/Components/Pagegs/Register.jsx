import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContex } from '../../Provider/AuthProvider';

const Register = () => {
    const { createNewuser, setUser,updatedUserProfile} = useContext(authContex);
    const [error, setError] = useState({})
    const navigate=useNavigate()
    const handaleFormSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name")
        if (name.length < 6) {
            setError({ ...error,name:"Name must be more then 5 charector" })
            return
        }
        const photo = form.get("photoUrl")
        console.log(photo)
        const email = form.get("email")
        const password = form.get("password")
        createNewuser(email, password)
            .then(result => {
                setUser(result.user)
            updatedUserProfile({displayName:name,photoURL:photo})
            .then(()=>{navigate("/")})
            .catch(error=>console.log(error))
            })
            .catch(errormessage => console.log(errormessage))
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h2 className='text-2xl text-center font-poppins'>Register your account</h2>
                <form onSubmit={handaleFormSubmit} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="User name" required />
                        {
                            error.name && <label className="text-red-500">{error.name}</label>
                        }
                        <label className="label">Photo Url</label>
                        <input type="text" name='photoUrl' className="input" placeholder="photo url" required />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='text-center '>Already have account?<Link className='text-red-500' to="/auth/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;