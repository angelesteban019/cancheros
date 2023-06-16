import React from 'react'
import './LogoCont.css'
import { Link } from 'react-router-dom'

export const LogoCont = () => {
  return (
    <>
    <div className="logoContainer">
        <Link className="Home" to="/">
            <img src="https://res.cloudinary.com/dbenwgwfn/image/upload/v1684087408/Cancheros-Map/cancheros%20logos/logo.png" alt="" className="logo" ></img>
        </Link>
    </div>
    </>
  )
}
