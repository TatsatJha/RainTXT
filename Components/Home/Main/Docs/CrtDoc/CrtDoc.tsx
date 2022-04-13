import React, { useState } from 'react'
import axios from "axios"
import {BsFileEarmarkPlus} from "react-icons/bs"
import Router, { useRouter } from 'next/router'

export default function CrtBtn(props:any) {
  const dirId = props.dirId == null ? null : props.dirId
  
    const makeDoc = async ()=> {
      console.log(dirId)
      const res = await axios.post("http://localhost:3000/api/doc", {title: "Untitled", content: "", dir: dirId})
      
      if(dirId !== null){
        console.log(dirId)
        
        const dirData = await axios.get(`http://localhost:3000/api/dir/${dirId}`)

        const existingDocs = dirData.data.docs
        const newDoc = res.data
        const newData = [...existingDocs, newDoc]

        await axios.patch(`http://localhost:3000/api/dir/${dirId}`, {docs: newData})
        
      }
      props.refresh()
    }
  return (
    <div className='flex p-6'>
        <BsFileEarmarkPlus size="28px" ></BsFileEarmarkPlus>
        <button className= "text-xl px-4" onClick={makeDoc}>New File</button>
    </div>
  )
}
