import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { FaFileWaveform } from 'react-icons/fa6';

function SideBar({ setShow }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <>
      <div data-aos="fade-left" className='w-[80%] h-[100%] lg:hidden bg-blue-100 z-50 absolute top-0 right-0 shadow-lg shadow-black rounded-b-lg'>
        <button onClick={handleClose} className='px-6 py-5 text-red-500 font-extrabold text-2xl'>X</button>
        <ul className='list-none flex flex-col gap-5 justify-center px-6 mt-[20%] font-bold'>
          <li className='flex flex-row items-center gap-3' onClick={() => handleNavigate('/')}>
            <FaHome /><a href="#">Home</a>
          </li>
          <li className='flex flex-row items-center gap-3' onClick={() => handleNavigate('/aboutus')}>
            <MdPeopleAlt /><a href="#">About Us</a>
          </li>
          
          <li className='flex flex-row items-center gap-3' onClick={() => handleNavigate('/FormSubmission')}>
            <FaFileWaveform /><a href="#">Form Submission</a>
          </li>
          <li className='flex flex-row items-center gap-3' onClick={() => handleNavigate('/FDInfo')}>
            <FaFileWaveform /><a href="#">Fixed Deposit</a>
          </li>
          <li className='flex flex-row items-center gap-3' onClick={() => handleNavigate('/contactus')}>
            <MdOutlinePermContactCalendar /><a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
