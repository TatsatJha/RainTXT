import axios from 'axios'
import React, { useState } from 'react'
import {BsFolderPlus} from "react-icons/bs"

export default function CrtDir(props: any) {
  
const [open, setOpen] = useState(false)
const [value, setValue] = useState("Untitled Folder")
    const  makeDir = ()=>{
        axios.post("http://localhost:3000/api/dir", {title: value, docs: [], dirs:[]})
        setOpen(!open)
        props.refresh()
    }

    const abort = ()=>{
      setValue("Untitled Folder")
      setOpen(!open)
    }

    if(open){
      return(
        <div className='fixed p-8 left-[800px] bg-white border-4'>
          <p className='p-4 text-xl text-center'>Name of Workspace</p>
          <input className='bg-slate-100 rounded-xl p-4' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
          <div className='p-4 flex justify-evenly'>
            <button onClick={abort}>Cancel</button>
            <button onClick={makeDir} >Create</button>
          </div>
        </div>
      )
    }
  return (
    <div className='flex p-6'>
        <BsFolderPlus size="28px"></BsFolderPlus>
        <button className= "text-l px-4" onClick={()=>{setOpen(true)}}> New Workspace </button>
    </div>
  )
}
