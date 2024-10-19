import React from 'react'
import './homeComp.css'
const HomeComp = (item) => {
  return (
    <div className='home-comp-div'>
    <h2>{item.item.title}</h2>
    <p>Desc: {item.item.description}</p>
    <p>Priority: {item.item.priority==="high"?item.item.priority+" "+"📈":item.item.priority}</p>
    </div>
  )
}

export default HomeComp