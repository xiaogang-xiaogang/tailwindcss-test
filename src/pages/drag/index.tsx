import React, { useEffect, useRef } from 'react'
import Loading from '../../component/loading'
import useDrag from '@/hooks/useDrag'


export default function index() {
  const {position,mouseDownHandle,elementRef} = useDrag()
  const ref = useRef<HTMLDivElement>()
  return (  
    <div className='ml-[10px] mt-[10px]'>
        <div className='w-[300px] h-[300px] border-amber-200 border-2 relative'>
          <div 
          ref={elementRef}
          onMouseDown={mouseDownHandle} 
          style={{top:10+position.y,left:20+position.x,cursor:'pointer'}}
          className='w-[50px] h-[50px] rounded-full bg-emerald-500 absolute'
          ></div>
        </div>
    </div>
  ) 
}
