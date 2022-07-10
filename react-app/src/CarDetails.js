import { useEffect } from "react"
import { useRef } from "react"

export default function CarDetails({initialData}){

    const modelRef=useRef()
    const yearRef=useRef()
    const colorRef=useRef()

    useEffect(()=>{
        modelRef.current.value=initialData.model
        yearRef.current.value=initialData.year
        colorRef.current.value=initialData.color
    },[initialData])


    return (
        <form>
        <input ref={modelRef} name="model" />
        <input ref={yearRef} type="number" min="1900" max={new Date().getFullYear()} name="year" />
        <input ref={colorRef} name="color" />
    </form>
    )
}