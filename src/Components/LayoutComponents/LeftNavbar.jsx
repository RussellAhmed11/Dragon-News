import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categorys, setCategorys] = useState([])
    
    useEffect(() => {
        fetch(' https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategorys(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className='my-3'>All Caterogy({categorys.length})</h2>
            <div className='flex flex-col gap-2'>
                {categorys.map((category) => 
                <NavLink to={`/category/${category.category_id}`} className='btn btn-base-100 rounded-none' 
                key={category.category_id}>{category.category_name}
                </NavLink>)}
            </div>
        </div>
    );
};

export default LeftNavbar;