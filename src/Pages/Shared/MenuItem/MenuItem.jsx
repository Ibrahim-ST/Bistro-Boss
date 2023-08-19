import React from 'react';

const MenuItem = ({item}) => {
    console.log(item)
    const {name, image, price, recipe} = item;
    return (
        <div className='flex space-x-2 items-center'>
            <img style={{borderRadius: '0px 200px 200px'}} className='h-[60px] w-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;