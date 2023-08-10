import React, {useRef} from 'react'
import { useSearchParams } from 'react-router-dom'
import EchartContainer from '../../component/echartContainer'

export default function index() {
  const [searchParams, setSearchParams] = useSearchParams()
  const type = searchParams.get('type')
  let refs = useRef<HTMLDivElement>([]);

  let options:Array<EChartsOption> = [
    {
      title:{
        text:'最简单的折线图'
      },
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150],
          type: 'line'
        }
      ]
    },
    {
      title:{
        text:'笛卡尔坐标系下的折线图'
      },
      xAxis: {},
      yAxis: {},
      series: [
        {
          data: [
            [20, 120],
            [50, 200],
            [40, 50]
          ],
          type: 'line'
        }
      ]
    },
    {
      title:{
        text:'空数据'
      },
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [0, 22, '-', 23, 19],
          type: 'line'
        }
      ]
    }
  ]
 if(type=='l2'){
    options = [
      {
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'line',
            stack: 'x'
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'line',
            stack: 'x'
          }
        ]
      },
      {
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'line',
            stack: 'x',
            areaStyle: {}
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'line',
            stack: 'x',
            areaStyle: {}
          }
        ]
      }
    ]
 }else if(type=='l3'){
    options=[
      {
        title:{
          text:'区域面积图'
        },
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 23, 19],
            type: 'line',
            areaStyle: {}
          },
          {
            data: [25, 14, 23, 35, 10],
            type: 'line',
            areaStyle: {
              color: '#ff0',
              opacity: 0.5
            }
          }
        ]
      }
    ]
 }else if(type=='l4'){
  options = [
    {
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: 'line',
          smooth: true
        }
      ],
      title:{
        text:'平滑曲线图'
      }
    }
  ]
 }else if(type=='l5'){
    options = [
      {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
          },
          {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
          }
        ],
        title:{
          text:'阶梯线图'
        }
      }
    ]
 }
  return (
    <div className='w-full ml-[10px flex flex-wrap'>
        {
          options.map((item,index)=>
            <EchartContainer 
              className='sm:w-[200px] sm:h-[100px] lg:w-[600px] lg:h-[300px] ml-[50px]'
              options={item}
              key={type+index+'1'}
              ref={ref=>{
                if(ref){
                  refs.current[index]=ref
                }
              }}
            ></EchartContainer>
          )
        }
    </div>
  )
}
