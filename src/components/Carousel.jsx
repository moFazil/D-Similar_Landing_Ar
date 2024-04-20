import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

const Carousel = ({children : slides}) => {
  const[current,setCurrent] = useState(0);

  const previous = ()=>{
    setCurrent((current)=>(current===0 ? slides.length -1:current-1))
  }
  const next = ()=>{
    setCurrent((current)=>(current=== slides.length -1?0:current+1))
  }

  return (
    <div className=' overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500'
          style={{transform:`translateX(-${current*100}%)`}}
        >{slides}</div>
        <div className=' absolute inset-0 flex items-center justify-between'>
          <button onClick={previous} className=' p-1 rounded-full shadow bg-white/80 hover:bg-slate-300 text-gray-800'>
        <ChevronLeft size={40}/>
        </button>
          <button onClick={next} className=' p-1 rounded-full shadow bg-white/80 hover:bg-slate-300 text-gray-800'>
        <ChevronRight size={40}/>
        </button>
        </div>
    </div>
  )
}

export default Carousel