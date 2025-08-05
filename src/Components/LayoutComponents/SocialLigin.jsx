import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLigin = () => {
    return (
        <div>
            <h2 className='mb-3'>LogIn With</h2>
            <div className='*:w-full space-y-2'>
                <button className='btn'><FaGoogle></FaGoogle> Login with google</button>
                <button className='btn'><FaGithub> </FaGithub> Login with gitthub</button>
            </div>
        </div>
    );
};

export default SocialLigin;