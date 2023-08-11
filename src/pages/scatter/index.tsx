import React from 'react'
import { useSearchParams } from 'react-router-dom'
import EchartContainer from '../../component/echartContainer'

export default function index() {

  const option = {
    xAxis: {
      data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [
      {
        type: 'scatter',
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  };
  return (
    <div className='w-full ml-[10px flex flex-wrap'>
          <EchartContainer 
            className='sm:w-[200px] sm:h-[100px] lg:w-[600px] lg:h-[300px] ml-[50px]'
            options={option}
            key='scatter'
          ></EchartContainer>
    </div>
  )
}
