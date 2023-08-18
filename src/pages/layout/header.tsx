import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import { useNavigate } from 'react-router';

export default function header() {
  const navigate = useNavigate()
  const goFirst = ()=>{
    navigate('/admin/home')
  }
  return (
    <div className='sm:h-[30px] lg:h-[50px] w-full bg-blue-600 cursor-pointer'>
        <div onClick={goFirst} className='h-full lg:text-[30px] ml-[20px] text-sky-400'>echart使用</div>
    </div>
  )
}
