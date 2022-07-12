import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../Assests/css/tasbi.css'
import { minusOne, plusOne, resetAll } from '../Redux/State/Counter/CounterSlice';
const TasbiDisplay = () => {
    let value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (

        <div className=' ring-4 ring-blue-500 w-[300px] h-[300px] rounded-full flex justify-center items-center flex-col p-3 '>
            <h1 className='text-3xl font-bold -mb-10 text-blue-500'>{value <= 0 ? 0 : value}</h1>
            <div className='border p-2 w-[200px] h-[50px] display flex justify-center items-center  '>
            </div>
            <div className='w-full p-2 flex justify-end -ml-16'>
                <div onClick={() => { dispatch(resetAll()) }} className='w-4 h-4 cursor-pointer hover:bg-red-500 rounded-full bg-blue-500 ring-2 '></div>
            </div>
            <div className='w-full flex justify-center gap-4 '>
                <div onClick={() => { dispatch(plusOne()) }} className='w-14 h-14 cursor-pointer hover:shadow rounded-full bg-blue-400 hover:bg-green-500 ring-2 -mb-10 '>
                    <img src="https://icon-library.com/images/plus-circle-512_98333.png" alt="" />
                </div>
                <div onClick={() => { dispatch(minusOne()) }} className='w-14 h-14 cursor-pointer hover:shadow rounded-full bg-red-400 hover:bg-red-500 ring-2 -mb-10 '>
                    <img src="https://icon-library.com/images/minus-icon/minus-icon-14.jpg" alt="" />
                </div>
            </div>

        </div>

    );
};

export default TasbiDisplay;