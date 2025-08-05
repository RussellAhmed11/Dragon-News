import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {data:news}=useLoaderData()
    return (
        <div>
            <h1>Dragon News</h1>
            <p className='text-gray-400 text-sm'>{news.length} News found this category</p>
            <div className='space-y-3'>
                {news.map(singleNews=><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)}
            </div>
        </div>
    );
};

export default CategoryNews;