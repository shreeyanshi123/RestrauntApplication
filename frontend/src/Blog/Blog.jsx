import React from 'react'
import CustomNavbar from '../Components/CustomNavbar'
import lightImage from '../Components/Images/light.jpg';
import './Blog.css'
import { Link } from 'react-router-dom';
import Display from './Display';
export const Blog = () => {
  return (
    <>
      <CustomNavbar />
      <div
        className="background2"
        style={{
          backgroundImage: `url(${lightImage})`,
          marginTop: '5px',
          height: '40vh',
          width: '100%',
          backgroundSize: 'cover'
        }}
      >
        <div className="linkDiv">
          <Link className='link' to='/create-blog'>Click to Create Blog!!</Link>
        </div>
      </div>

      <Display />


    </>
  )
}
