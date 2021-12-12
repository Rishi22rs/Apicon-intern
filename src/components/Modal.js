import ReactCircleModal from 'react-circle-modal'
import Form from './Form'

const Modal=({children,addCard})=>{
  return(
      <ReactCircleModal
      backgroundColor="rgb(0,0,0,0.7)"
      toogleComponent={onClick => (
        <div onClick={onClick}>
          {children}
        </div>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <Form addCard={addCard} onClick={onClick}/>
      )}
    </ReactCircleModal>
  )
}

export default Modal