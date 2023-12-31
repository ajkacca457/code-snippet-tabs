import React from 'react';

const ButtonContainer = (props) => {
    const { jobData, updateIndex, index: topIndex } = props;
    const companyNames = Object.values(jobData).map(company => company.name);
    return (
        <div className='col-span-2'>
            {companyNames.map((company, index) => {
                const isActive = index === topIndex ? 'bg-purple-500' : 'bg-purple-300';
                return (
                    <button className={`block ${isActive} text-white w-full rounded h-fit my-2 py-2 px-4`} key={index} onClick={() => updateIndex(index)}>{company}</button>
                );
            })}
        </div>
    );
};

export default ButtonContainer;