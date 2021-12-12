import { bg1, bg10, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, icon } from "../assets"
import "./card.css"

const Card=({teamName="Unavailable"})=>{

  const bgs=[bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10]
  const randombg=bgs[Math.floor(Math.random() * bgs.length)]

  return(
    <div className="col-md-3">
      <div className="_card" style={{backgroundImage:`url(${randombg})`}}>
        <p className="_card_text">{teamName}</p>
        <img className="_icon" height={60} width={60} src={icon} alt="icon"/>
      </div>
    </div>
  ) 
}

export default Card