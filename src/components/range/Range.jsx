import { useState } from "react"

const Range = ()=>{
    const[value,setValue]=useState(0)
    return (
        <>
            <h1>{value}</h1>
            <input type="range" value={value} min={0} max={10} onChange={(event)=>changeValue(event,setValue)}/>
        </>
    )
}
const changeValue =(event, setValue)=>{
    const valueChanged = event.target.value
    setValue(valueChanged)
     
}
export default Range