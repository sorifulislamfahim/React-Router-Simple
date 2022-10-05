import React from 'react';
import PrichingOption from '../PrichingOption/PrichingOption';

const Pricing = () => {
    const prichingOption =[
        {id: 1, name: 'Free', price: 0, featchers: [
            'Awassam Featchers', 
            'Extra Feactcher',
            'Un Necessary Feacthers',
            'Will Never use feathcers',
            'Hudai Featchers',
            'Ajaira Featchers'
        ] },
        {id: 2, name: 'Mediom', price: 9.99, featchers: [
            'Mediom Featchers', 
            'Extra Feactcher',
            'Un Necessary Feacthers',
            'Will Never use feathcers',
            'Hudai Featchers',
            'Ajaira Featchers'
        ] },
        {id: 3, name: 'Premioum', price: 19.90, featchers: [
            'Premiom Featchers', 
            'Extra Feactcher',
            'Un Necessary Feacthers',
            'Will Never use feathcers',
            'Hudai Featchers',
            'Ajaira Featchers'
        ] },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-400 p-10 text-white my-5'>Best Deal Of The Market</h2>
            <div className='grid md:grid-cols-3'>
                {
                prichingOption.map(option => <PrichingOption
                                            key={option.id}
                                            option={option}></PrichingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;