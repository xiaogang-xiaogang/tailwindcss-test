import React, { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import markdown from '../../assets/README.md'
import './index.css'
export default function index() {
  const [md,setMd] = useState()
  useEffect(()=>{

  },[])
  return (
    <div className='ml-[30px]'>
      <div className='first-container' dangerouslySetInnerHTML={{__html:markdown}}  ></div>
    </div>
  )
}
