import React from 'react';

const InfoContainer = (props) => {

    const jobs = Object.values(props);

    return (
        <div className='col-span-6'>
            <h4>{jobs[0].name}</h4>
            <p>{jobs[0].jobtitle}</p>
            <p>{jobs[0].location}</p>
            <p>{jobs[0].date}</p>
            {jobs[0].responsibilities.map((item, index) => {
                return <p key={index}>{item}</p>;
            })}
        </div>
    );
};

export default InfoContainer;