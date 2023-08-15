import { Ref, useEffect, useRef, useState } from "react"


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const useDrag = ()=>{
    const [position,setPosition] = useState({x:0,y:0})
    const [preM,setPreM] = useState({x:0,y:0})
    const elementRef = useRef(null);
    const mouseDownHandle =  async (e:MouseEvent)=>{
        setPreM({x:e.clientX,y:e.clientY})
        document.addEventListener('mousemove',mouseMoveHandle)
        document.addEventListener('mouseup',mouseUpHandle)
    }
    const mouseUpHandle = (e:Event)=>{
        document.removeEventListener('mousemove',mouseMoveHandle)
    }
    const mouseMoveHandle = (e:MouseEvent)=>{
        if(preM.x!=0){
            const newPosition = {
                x: position.x + e.clientX-preM.x,
                y: position.y + e.clientY-preM.y,
            };
            setPosition(newPosition)
            setPreM({x:e.clientX,y:e.clientY})
        }
    }
    return {position,mouseDownHandle,elementRef}
}
export default useDrag;