import React from 'react'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import './styles/styles.css'

function Root() {
  return (
    <div>

        <Outlet/>
      
    </div>
  )
}

export default Root;
