import React, { useRef, useState } from 'react'
import axios from 'axios'

function createChunk(file:File, size = 2 * 1024 * 1024) {//两个形参：file是大文件，size是切片的大小
    const chunkList = []
    let cur = 0
    while (cur < file.size) {
        chunkList.push({
            file: file.slice(cur, cur + size)//使用slice()进行切片
        })
        cur += size
    }
    return chunkList
}

function axiosRequest(data,index) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("success")
        },1000*index)
    })
}



export default function index() {
    let files:File = {} as File
    const [paused,setPaused] = useState(true)
    let progressRef = useRef()
    const change = (e:Event)=>{
        files = e.target.files[0]
        progressRef.current.style.width = 0
    }
    const upload = ()=>{
        let chunkList=createChunk(files)
        
        const uploadList = chunkList.map(({file}, index) => ({
            file,
            size: file.size,
            percent: 0,
            chunkName: `${files.name}-${index}`,
            fileName: files.name,
            index
        }))
        setPaused(false)
        uploadFile(uploadList)
    }

    
    const uploadFile = async (list)=>{
        let count = 0
        const requestList = list.map(({file,fileName,index,chunkName}) => {
            // 数据封装
            const formData = new FormData() // 创建表单类型数据
            formData.append('file', file)//该文件
            formData.append('fileName', fileName)//文件名
            formData.append('chunkName', chunkName)//切片名
            return {formData,index}
        }).map(({formData,index}) =>axiosRequest(
            formData,
            index
        ).then(res => {
                count++
                //显示每个切片上传进度
                progressRef.current.style.width = count/requestList.length*100+'%'
            },
            err=>{
                console.log(err)
            })
        )
        await Promise.all(requestList)
        setPaused(true)
    }
  return (
    <div className='ml-[50px] mt-[10px]'>
        <input type="file" id="input" onChange={change}/>
        <button 
        className='mt-[10px] sm:w-[50px] block lg:w-[100px] h-[30px] border-[1px] rounded-[5px] bg-teal-300'
        id="upload" onClick={upload} disabled={!paused}>上传</button>
        <div className='mt-[10px] sm:w-[150px] lg:w-[300px] h-[20px] border-[1px] rounded-[10px]'>
            <div ref={progressRef} className='h-full transition-left duration-500 w-[0px] rounded-[10px] w-0 bg-yellow-200'></div>
        </div>
    </div>
  )
}
