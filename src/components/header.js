import React from 'react';
import {BiSearch} from 'react-icons/bi'
import {BiShoppingBag} from 'react-icons/bi'

export default function Header() {
  return (
    <nav>
      <div className="logo">Rayes.</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About US</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <span className='fa'><BiSearch/></span>
        <span className='fa' ><BiShoppingBag/></span>
      </div>
    </nav>
  );
}
