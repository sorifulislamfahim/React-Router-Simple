import React from 'react';
import Featchers from '../Featchers/Featchers';


const PrichingOption = ({option}) => {
    const {featchers} = option;
    return (
        <div className='gap-7 bg-indigo-300 m-8 p-8 rounded-md'>
            <div>
                <h1>
                    <span className='text-7xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                </h1>
                <p className='text-3xl font-semibold '>{option.name}</p>
            </div>
            <div>
                {
                    featchers.map((featcher, idx) => <Featchers key={idx} featcher={featcher}></Featchers>)
                }
            </div>
            <button className='bg-green-500 w-full text-2xl text-white py-2 rounded-md mt-3 hover:bg-orange-500'>Buy Now</button>
        </div>
    );
};

export default PrichingOption;