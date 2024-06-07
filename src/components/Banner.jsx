import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[90vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://images.thedirect.com/media/article_full/avengers-multiverse-saga-phase.jpg)`}}>
    <div className='text-white text-xl w-full text-center bg-gray-900/60 p-4'>
        Movie Name
    </div>
    </div>
  )
}

export default Banner