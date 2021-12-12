import { useState } from "react"
import Card from "../components/Card"
import Form from "../components/Form"
import Modal from "../components/Modal"

const Layout=()=>{
  const [cards,setCards]=useState([])
  const addCard=(name)=>{
    setCards([...cards,name])
  }

  return(
    <div className="container">
      <div className="d-flex flex-row-reverse mt-5 mb-5">
        <Modal addCard={addCard}>
          <button className="_btn">Create security group</button>
        </Modal>
      </div>
      <div className="row">
        <Card teamName="Admin Group"/>
        <Card teamName="Managers"/>
        <Card teamName="Sales Team"/>
        <Card teamName="HR Team"/>
        <Card teamName="IT Team"/>
        <Card teamName="Production Team"/>
        {cards.length>0&&cards.map(x=><Card teamName={x}/>)}
      </div>
    </div>
  )
}

export default Layout