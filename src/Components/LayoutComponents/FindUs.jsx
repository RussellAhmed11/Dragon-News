import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTwitter, FaTwitterSquare } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='space-y-3'>
            <h2 className='fond-semibold mb-3'>Find us on</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitterSquare></FaTwitterSquare> Twitter
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;