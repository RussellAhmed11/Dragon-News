import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 bg-base-300 p-2'>
            <p className='bg-[#d72050] text-base-100 px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} speed={70} className='space-x-10'>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas totam a cum quibusdam alias quasi.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas totam a cum quibusdam alias quasi.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas totam a cum quibusdam alias quasi.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas totam a cum quibusdam alias quasi.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;