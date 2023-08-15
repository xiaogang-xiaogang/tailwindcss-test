import React from 'react'
import '@/assets/loading.css'
export default function loading(props) {
  return (
    <div className={'flex '+props.className}>
        <div className='loading-icon' ></div>
        <div>{props.text}加载中</div>
    </div>
  )
}
