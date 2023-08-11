import React, { useRef } from 'react'
import { useParams ,useSearchParams} from 'react-router-dom'
import { EChartsOption, EChartsType} from 'echarts'
import EchartContainer from '../../component/echartContainer'


export default function index() {
  const [searchParams, setSearchParams] = useSearchParams()  // 用于捕捉?后面的内容
  const type = searchParams.get('type')
  const refs = useRef<Array<HTMLDivElement>>([])
  let options:Array<EChartsOption> = [
    {
      title:{
        text:'基本饼图'
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 234,
              name: '联盟广告'
            },
            {
              value: 1548,
              name: '搜索引擎'
            }
          ]
        }
      ]
    },
    {
      title:{
        text:'饼图样式设计'
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 234,
              name: '联盟广告'
            },
            {
              value: 1548,
              name: '搜索引擎'
            }
          ],
          radius: '50%'
        }
      ]
    }
  ]
  if(type=='p2'){
    options = [
      {
        title: {
          text: '圆环图的例子',
          left: 'center',
          top: 'center'
        },
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 335,
                name: 'A'
              },
              {
                value: 234,
                name: 'B'
              },
              {
                value: 1548,
                name: 'C'
              }
            ],
            radius: ['40%', '70%']
          }
        ]
      },
      {
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['A', 'B', 'C', 'D', 'E']
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 335, name: 'A' },
              { value: 310, name: 'B' },
              { value: 234, name: 'C' },
              { value: 135, name: 'D' },
              { value: 1548, name: 'E' }
            ]
          }
        ]
      }
    ]
  }else if(type=='p3'){
    options = [
      {
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 100,
                name: 'A'
              },
              {
                value: 200,
                name: 'B'
              },
              {
                value: 300,
                name: 'C'
              },
              {
                value: 400,
                name: 'D'
              },
              {
                value: 500,
                name: 'E'
              }
            ],
            roseType: 'area'
          }
        ],
        title:{
          text:'玫瑰图'
        }
      }
    ]
  }
  return (
    <div className='mt-[30px] flex flex-wrap'>
      {
        options.map((item,index)=>
          <EchartContainer
          className='sm:w-[200px] sm:h-[100px] lg:w-[600px] lg:h-[300px] ml-[50px]'
          options={item}
          key={type+index}
          ref={ref=>{
            if(ref){
              refs.current[index]=ref
            }
          }}
          >

          </EchartContainer>
        )
      }
    </div>
  )
}
