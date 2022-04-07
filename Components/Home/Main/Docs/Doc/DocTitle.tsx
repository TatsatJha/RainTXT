import React, { useState } from 'react'
import axios from "axios"
import {BsFileEarmark} from "react-icons/bs"

export default function DocTitle(props:any) {
    const [title, setTitle] = useState(props.title)
    const [open, setOpen] = useState(false)

    const handleTitleSave = async ()=>{
      const docId = props.id

        await axios.patch(`http://localhost:3000/api/doc/${docId}`, {title:title})
        setOpen(!open)
        
        if(props.dirId != null || props.dirId !== undefined){
          const dirId = props.dirId
          const parentDir = await axios.get(`http://localhost:3000/api/dir/${dirId}`)
          const localDocs = parentDir.data.docs
          let newLocalDocs:Array<any> = []

          localDocs.forEach((doc:any) => {
            if(doc._id !== docId){
              newLocalDocs.push(doc)
            }
            else{
              const adjustedDoc = {...doc, title:title}
              newLocalDocs.push(adjustedDoc)
            }
          });

          await axios.patch(`http://localhost:3000/api/dir/${dirId}`, {docs: newLocalDocs})

        }
      }
  return (
    <div className='flex justify-between p-4 '>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="text-[20px] font-bold block w-72" onBlur={handleTitleSave}></input>
        <BsFileEarmark size="36px"></BsFileEarmark>

    </div>
  )
}
