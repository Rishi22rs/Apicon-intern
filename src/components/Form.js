import { useState } from "react";
import "./form.css"

const Form=({onClick,addCard})=>{

  const [inputValue,setInputValue]=useState("")

  return(
    <form onSubmit={e=>e.preventDefault()} className="_form row d-flex justify-content-center align-items-center _form">
      <input value={inputValue} onChange={e=>setInputValue(e.target.value)} className="_w" type="text" placeholder="Security group name"/>
      <b/>
      <button onClick={e=>{
        addCard(inputValue);
        setInputValue("")
        onClick();
      }} className="_btn mt-3 _w">Add</button>
    </form>
  )
}

export default Form