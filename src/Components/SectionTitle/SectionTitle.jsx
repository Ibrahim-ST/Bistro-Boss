import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-8'>
            <p className='subHeading'>--- {subHeading} ---</p>
            <h3 className='heading'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;