import React from 'react';

const InfoContainer = (props) => {
    const { index } = props;
    const jobs = Object.values(props);

    return (
        <div className='col-span-6'>
            <h4>{jobs[index].name}</h4>
            <p>{jobs[index].jobtitle}</p>
            <p>{jobs[index].location}</p>
            <p>{jobs[index].date}</p>
            {jobs[index].responsibilities.map((item, index) => {
                return <p key={index}>{item}</p>;
            })}
        </div>
    );
};

export default InfoContainer;