import ButtonContainer from './components/ButtonContainer';
import InfoContainer from './components/InfoContainer';

function App() {

  return (
    <div className='max-w-[1200px] bg-slate-300 p-8 mx-auto grid grid-cols-8 gap-x-[10px]'>
      <h1 className='col-span-full min-h-[50px] text-center'>Tabs Content</h1>
      <ButtonContainer />
      <InfoContainer />
    </div>
  );
}

export default App;
