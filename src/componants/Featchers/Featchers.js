import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Featchers = ({featcher}) => {
    return (
        <div className='flex items-center mt-2'>
            <CheckCircleIcon className="h-5 w-5 text-green-800"/>
            <p className='ml-3'>{featcher}</p>
        </div>
    );
};

export default Featchers;