import React, { useEffect, useImperativeHandle, useRef } from 'react'
import * as echarts from 'echarts';
import { EChartsOption, EChartsType} from 'echarts'

const echartContainer = React.forwardRef((props, ref)=> {
    let echart1:EChartsType | null = null
    const echartRef = useRef<HTMLDivElement>()
    const options:EChartsOption|null = props.options?props.options:null
    useEffect(()=>{
        if(options!=null){
            echart1 = echarts.init(echartRef.current)
            echart1.setOption(options)
        }
    },[])
    useImperativeHandle(ref,()=>({
        reShow:()=>{
            if(echart1){
                echart1.setOption(options)
            }
        }
    }))
  return (
    <div ref={echartRef} className={props.className}>111</div>
  )
})

export default echartContainer