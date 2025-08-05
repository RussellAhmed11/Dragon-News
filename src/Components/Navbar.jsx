import { Link, Links } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { authContex } from '../Provider/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {
    const { user,signOutUser } = useContext(authContex)

    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/auth/register">Register</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img className='rounded-full w-10' src={user?.photoURL} alt="" />
                    <span>{user?.displayName}</span>
                </div>
                {
                    user && user?.email? 
                    <button onClick={signOutUser} className='btn btn-neutral rounded-none'>Logout</button>
                    :<Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
                   
                }
            </div>
        </div>
    );
};

export default Navbar;