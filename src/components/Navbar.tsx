"use client"; // Add this line at the top

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai"; // Import AiFillMinusCircle
import { FaCirclePlus } from "react-icons/fa6";
import { BsFillBagCheckFill } from 'react-icons/bs'; // Import BsFillBagCheckFill

function Navbar() {
  const ref = useRef(null);

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-start py-2 shadow-md'>
      <div className='logo mx-5'>
        <Link href={'/'}>
          <Image width={100} height={20} src="/logo1.jpg" alt="Logo" />
        </Link>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-2 font-bold md:text-md'>
          <Link href={'/tshirts'}><li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li></Link>
          <Link href={'/stickers'}><li>Stickers</li></Link>
          <Link href={'/mugs'}><li>Mugs</li></Link>
        </ul>
      </div>
      <div className='cart absolute right-0 top-5 mx-5 cursor-pointer' onClick={toggleCart}>
        <CiShoppingCart className='text-xl md:text-3xl' />
      </div>
      <div ref={ref} className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-5 right-2 text-2xl cursor-pointer text-pink-500'>
          <IoIosCloseCircle />
        </span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className='item flex my-3 justify-between'>
              <div className='font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center space-x-1'>
                <AiFillMinusCircle className='text-pink-500 cursor-pointer' />
                <span>1</span>
                <FaCirclePlus className='text-pink-500 cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className='item flex my-3 justify-between'>
              <div className='font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center space-x-1'>
                <AiFillMinusCircle className='text-pink-500 cursor-pointer' />
                <span>1</span>
                <FaCirclePlus className='text-pink-500 cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className='item flex my-3 justify-between'>
              <div className='font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center space-x-1'>
                <AiFillMinusCircle className='text-pink-500 cursor-pointer' />
                <span>1</span>
                <FaCirclePlus className='text-pink-500 cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className='item flex my-3 justify-between'>
              <div className='font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center space-x-1'>
                <AiFillMinusCircle className='text-pink-500 cursor-pointer' />
                <span>1</span>
                <FaCirclePlus className='text-pink-500 cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className='item flex my-3 justify-between'>
              <div className='font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center space-x-1'>
                <AiFillMinusCircle className='text-pink-500 cursor-pointer' />
                <span>1</span>
                <FaCirclePlus className='text-pink-500 cursor-pointer' />
              </div>
            </div>
          </li>
        </ol>
        <div className='flex'>
        <button className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm items-center">
          <BsFillBagCheckFill className='mr-2' />
          Checkout
        </button>
        <button className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm items-center">
          <BsFillBagCheckFill className='mr-2' />
          Clear Cart
        </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
