import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';

export default function header() {
  return (
    <div className='sm:h-[30px] lg:h-[50px] w-full bg-blue-600'>
        <div className='h-full lg:text-[30px] ml-[20px] text-sky-400'>echart使用</div>
    </div>
  )
}
