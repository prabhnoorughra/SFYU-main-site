import { useState, useEffect, createContext, } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css'

function App() {

  return (
    <>
      <h1>
        Our First Test
      </h1>
      <Outlet />
    </>
  )
}

export default App
