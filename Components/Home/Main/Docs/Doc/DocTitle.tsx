import React, { useState } from 'react'
import axios from "axios"
import {BsFileEarmark} from "react-icons/bs"

export default function DocTitle(props:any) {
    const [title, setTitle] = useState(props.title)
    const [open, setOpen] = useState(false)

    const handleTitleSave = ()=>{
        axios.put(`http://localhost:3000/api/doc/${props.id}`, {title:title})
        setOpen(!open)
      }
  return (
    <div className='flex justify-between p-4 '>
{/* 622e89d6ab01d44d4c9c2242 */}
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="text-4xl font-bold block w-72" onBlur={handleTitleSave}></input>
        <BsFileEarmark size="36px"></BsFileEarmark>

    </div>
  )
}
