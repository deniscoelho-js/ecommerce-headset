import React from 'react';
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer' > 
        <p>copyright @2020</p>
        <div className="social">
          <span className='fa' ><AiOutlineFacebook/></span>
          <span className='fa' ><AiOutlineInstagram/></span>
        </div>
    </div>
  );
}
