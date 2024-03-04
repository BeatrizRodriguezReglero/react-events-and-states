import { useState } from "react"
import { StyledBox } from "./box.styles"

const Box =()=>{
    const[color,setColor]=useState('orange')
    return(
        <>
        <StyledBox $color={color}/>
        <button onClick={()=>changeColor(color,setColor)}>CHANGE COLOR</button>
        </>
    )
}
const changeColor = (color,setColor)=>{
  if(color==='orange'){
    setColor('blue')
  }else{
    setColor('orange')
  }
    

}
export default Box