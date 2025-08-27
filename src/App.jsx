import { useState, useEffect, createContext, } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css'
import NavBar from './components/NavBar';

const apiURL = import.meta.env.VITE_API_URL;

function App() {
  //log a visit to the site
  useEffect(() => {
    fetch(`${apiURL}/`, {
      method: "POST"
    })
  }, []);

  return (
    <>
        <div className='h-screen flex flex-column w-screen'>
          <div className='h-screen w-screen grid grid-cols-1 grid-rows-[auto_1fr]
        text-black'>
            <NavBar />
            <div className="bg-[#132F57] overflow-y-auto">
              <Outlet />
            </div>
        </div>
        </div>
    </>
  )
}

export default App
