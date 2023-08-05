import React from 'react'
import { useParams ,useSearchParams} from 'react-router-dom'

export default function index() {
    const [searchParams, setSearchParams] = useSearchParams()  // 用于捕捉?后面的内容
    console.log(searchParams.get('type'))
  return (
    <div>柱状图</div>
  )
}
