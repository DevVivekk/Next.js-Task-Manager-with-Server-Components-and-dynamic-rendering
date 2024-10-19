"use client";
import React, { useEffect, useState } from 'react'
import './editmode.css'
import { deleteTask, savbtn, updateCheck } from './EditFile';
import { MdDeleteForever } from "react-icons/md";
const EditHome = (item) => {
  const [data,setData] = useState({title:"",description:"",priority:""});
  useEffect(()=>{
    setData({...data,title:item.item.title,description:item.item.description,priority:item.item.priority});
  },[item])
  const handleChange = (e)=>{
   setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div className='home-comp-div'>
    <section><input  type='text' name='title' onChange={handleChange} value={data.title}></input></section>
    <section><input type='text' name='description' onChange={handleChange} value={data.description}></input></section>
    <section>
            <select name='priority' value={data.priority} onChange={handleChange}>
                        <option value={'low'}>Low</option>
                        <option value={'medium'}>Medium</option>
                        <option value={'high'}>High</option>
                    </select>
    </section>
    <div className='row-input-items'>
    <input type="checkbox"  checked={item.item.status === true} onChange={()=>updateCheck(item.item.id)} />
    <MdDeleteForever onClick={()=>deleteTask(item.item.id)} size={'3.5rem'} color='red' />
    </div>
    <button onClick={()=>savbtn(item.item.id,data)}>save</button>
    </div>
  )
}

export default EditHome