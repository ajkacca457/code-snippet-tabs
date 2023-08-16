import ButtonContainer from './components/ButtonContainer';
import InfoContainer from './components/InfoContainer';
import { data as jobData } from './data';
import { useState } from 'react';

function App() {

  const [index, setIndex] = useState(0);
  const updateIndex = (index) => {
    setIndex(index);
  };

  return (
    <div className='max-w-[1200px] bg-slate-300 p-8 mx-auto grid grid-cols-8 gap-x-[20px]'>
      <h1 className='col-span-full text-center bg-blue-800 text-white text-2xl py-2'>Tabs Content</h1>
      <ButtonContainer jobData={jobData} updateIndex={updateIndex} index={index} />
      <InfoContainer {...jobData} index={index} />
    </div>
  );
}

export default App;
