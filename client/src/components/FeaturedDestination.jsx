import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20' >

<Title title='Featured Destinations' subTitle='Discover our collection of unique stays across South Africa, showcasing hidden gems and local hospitality that offer authentic experiences and memorable adventures beyond the ordinary tourist trail.'/>

        <div className='flex flex-wrap items-center justify-center gap-6 mt-20' >
            {roomsDummyData.slice(0,4).map((room, index)=>(
                <HotelCard key={room._id} room={room} index={index} />
            ))}
        </div>
        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
         className='my-16 px-6 py-3 text-sm font-medium border border-black rounded-lg bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-md relative overflow-hidden' >
            View All Destinations
        </button>
    </div>
  )
}

export default FeaturedDestination