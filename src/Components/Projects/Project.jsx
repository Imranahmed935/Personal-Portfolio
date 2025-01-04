import React from 'react';
import port1 from '../../assets/Port/session1.jpg'
import port2 from '../../assets/Port/session2.webp'
import port3 from '../../assets/Port/session3.jpg'

const Project = () => {
    return (
        <div className='py-24 lg:w-8/12 mx-auto'>
            <h1 className='text-3xl font-bold py-6'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <img className='lg:w-96 lg:h-52 rounded' src={port1} alt="" />
                </div>
                <div>
                    <img className='lg:w-96 lg:h-52 rounded'  src={port2} alt="" />
                </div>
                <div>
                    <img className='lg:w-96 lg:h-52 rounded'  src={port3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;