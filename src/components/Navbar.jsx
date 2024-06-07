import React from 'react';
import movieLogo from '../transparent-movie-logo-movie-theater-scene-with-popcorn-soda-and-3d-gla65a5d0ee055e64.349485691705365742022.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-2'>
        <img className='w-[50px]' src={movieLogo} alt='Movie Logo'/>
        <Link to='/' className='text-blue-500 text-xl'>Movies</Link>
        <Link to='/watchList' className='text-blue-500 text-xl'>Watchlist</Link>
    </div>
  )
}

export default Navbar