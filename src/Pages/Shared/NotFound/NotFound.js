import React from 'react';
import sleepy from '../../../images/sleepy.jpg';

const NotFound = () => {
    return (
        <div className='mt-5 container'>
            <h1 className='text-primary text-center p-3'>Sleeping Mechanic</h1>
            <img className='w-100' src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;