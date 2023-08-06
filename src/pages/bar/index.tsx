import React, { useEffect, useRef } from 'react'
import { useParams ,useSearchParams} from 'react-router-dom'
import * as echarts from 'echarts';
import { EChartsOption, EChartsType} from 'echarts'
import EchartContainer from '../../component/echartContainer';

export default function index() {
    const [searchParams, setSearchParams] = useSearchParams()  // 用于捕捉?后面的内容
    const type = searchParams.get('type')
    const ref1 = useRef<HTMLDivElement>()
    const ref2 = useRef<HTMLDivElement>()
    const ref3 = useRef<HTMLDivElement>()
    const ref4 = useRef<HTMLDivElement>()
    const ref5 = useRef<HTMLDivElement>()
    let echart1:EChartsType | null = null
    let echart2:EChartsType | null = null

    const options1:EChartsOption = {
      title:{
        text:'多系列的柱状图',
        link:'http://baidu.com',
        target:'blank',
        textStyle:{
          color:'#e4393c',
        },
        subtext:'副标题',
        left:'center',
      },
      legend:{
        left:200,
        top:50
      },
      xAxis: {
        name:'x轴',
        nameLocation:'center',
        nameGap:'35',
        type:"category"
      },
      dataset:{
        source:[
          ['产品','2023','2022','2021'],
          ['a', 43.3, 85.8, 93.7],
          ['b', 83.1, 73.4, 55.1],
          ['v', 86.4, 65.2, 82.5],
          ['c', 72.4, 53.9, 39.1]
        ]
      },
      grid:{
        top:80,
      },
      yAxis: {
        name:'y轴',
        nameLocation:'center',
        nameGap:'50'
      },
      series: [{type: 'bar'},{type: 'bar'},{type:'bar'}]
    }
    const option2:EChartsOption = {
      title:{
        text:'柱条样式设计',
        left:'center'
      },
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [
            10,
            22,
            28,
            {
              value: 43,
              // 设置单个柱子的样式
              itemStyle: {
                color: '#91cc75',
                shadowColor: '#91cc75',
                borderType: 'dashed',
                opacity: 0.5
              }
            },
            49
          ],
          itemStyle: {
            barBorderRadius: 5,
            borderWidth: 1,
            borderType: 'solid',
            borderColor: '#73c0de',
            shadowColor: '#5470c6',
            shadowBlur: 3
          }
        }
      ]
    };
    const option33:EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          title:{
            text:'给柱条添加背景色'
          },
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }
      ]
    };
    const stackOption:EChartsOption = {
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 43, 49],
          type: 'bar',
          stack: 'x'
        },
        {
          data: [5, 4, 3, 5, 10],
          type: 'bar',
          stack: 'x'
        }
      ],
      title:{
        text:'堆叠柱状图'
      }
    };


    // 动态
    var data = [];
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200));
    }

    let option:EChartsOption = {
      xAxis: {
        max: 'dataMax'
      },
      yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2 // only the largest 3 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          name: 'X',
          type: 'bar',
          data: data,
          label: {
            show: true,
            position: 'right',
            valueAnimation: true
          }
        }
      ],
      legend: {
        show: true
      },
      animationDuration: 3000,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };
    function update() {
      var data = option.series[0].data;
      for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000);
        } else {
          data[i] += Math.round(Math.random() * 200);
        }
      }
      if(ref5.current){
        ref5.current.reShow()
      }
    }

    setInterval(function() {
      update();
    }, 3000);
  return (
    <div className='mt-[30px] flex flex-wrap flex-1'>
      {
        type == 'b1'?
        <>
          <EchartContainer 
            className='sm:w-[200px] sm:h-[100px] lg:w-[600px] lg:h-[300px] ml-[50px]'
            options={options1}
            key={type+'1'}
            ref={ref1}
          ></EchartContainer>
          <EchartContainer 
            className='sm:w-[200px] sm:h-[100px] lg:w-[600px] lg:h-[300px] ml-[50px]'
            options={option2}
            key={type+'2'}
            ref={ref2}
          ></EchartContainer>
          <EchartContainer 
            className='sm:w-[200px] sm:h-[100px] lg:w-[600px] lg:h-[300px] ml-[50px]'
            options={option33}
            key={type+'3'}
            ref={ref3}
          ></EchartContainer>
        </>:
        type == 'b2'?
        <>
          <EchartContainer 
            className='sm:w-[200px] sm:h-[100px] lg:w-[600px] lg:h-[300px] ml-[50px]'
            options={stackOption}
            key={type+'1'}
            ref={ref4}
          ></EchartContainer>
        </>:
        type == 'b3'?
        <>
          <EchartContainer 
            className='sm:w-[200px] sm:h-[100px] lg:w-[600px] lg:h-[300px] ml-[50px]'
            options={option}
            key={type+'1'}
            ref={ref5}
          ></EchartContainer>
        </>:
        <div className='ml-[50px]'>请点击左侧，选择你要查看的图形</div>
      }
    </div>
  )
}
