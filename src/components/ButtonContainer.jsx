import React from 'react';

const ButtonContainer = (props) => {
    const companyNames = Object.values(props).map(company => company.name);
    return (
        <div className='col-span-2'>
            {companyNames.map((company, index) => {
                return (
                    <button className='block bg-orange-300 w-full rounded h-fit my-2 py-2 px-4' key={index}>{company}</button>
                );
            })}
        </div>
    );
};

export default ButtonContainer;