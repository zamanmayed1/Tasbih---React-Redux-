import React from 'react';
import Tasbi from './Pages/Tasbi';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode, whiteMode } from './Redux/State/Theme/ThemeSlice';
const App = () => {
  const Theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()
  // bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMI7CwlY_ZyrM4kB3jIDBO0rvB_gJfqu82Q&usqp=CAU")] bg-no-repeat
  return (
    <div className={`w-full h-screen 	 max-h-screen flex flex-col items-center justify-center ${Theme} bg-cover`}>
      {
        Theme == 'bg-blue-100' && <button onClick={() => { dispatch(darkMode()) }} className='px-4 absolute top-1 py-2 border border-black font-bold  hover:text-white right-2'>
          <img className='w-6 h-6' src="https://img.icons8.com/ios-filled/344/moon-symbol.png" alt="" />
        </button>
      }

      {
        Theme == 'bg-gray-800' && <button onClick={() => { dispatch(whiteMode()) }} className='px-4 absolute top-1 py-2 border font-bold border-black text-black  right-2'>
          <img className='w-6 h-6' src="https://img.icons8.com/color/344/smiling-sun.png" alt="" />
        </button>
      }
      <Tasbi />
      <div className='absolute bottom-0 bg-gray-400 py-10 w-full text-center' >
        <h1 className='text-xl font-bold'>Tasbih</h1>
        <h1 className='font-bold'>Copyright © 2022 Zaman Mayed</h1>

        <a className='text-white underline' href="https://github.com/zamanmayed1/Tasbih-React-Redux-App" target="_blank" rel="noopener noreferrer">Source Code</a>
      </div>
    </div>
  );
};

export default App;