import React, { useState } from 'react'
import axios from "axios"
import {BsFileEarmarkPlus} from "react-icons/bs"
import Router, { useRouter } from 'next/router'

export default function CrtBtn(props:any) {
  const dirId = props.id == null ? null : props.id.id

  console.log(dirId)
  
    const makeDoc = async ()=>{
      const res = await axios.post("http://localhost:3000/api/doc", {title: "Untitled", content: "", dir: dirId})
      props.refresh()
      console.log(res)
      if(dirId !== null){
        const res2 = await axios.patch(`http://localhost:3000/api/dir/${dirId}`, {docs: res.data})
        console.log(res2)
      }
    }
  return (
    <div className='flex p-6'>
        <BsFileEarmarkPlus size="28px" ></BsFileEarmarkPlus>
        <button className= "text-xl px-4" onClick={makeDoc}>New File</button>
    </div>
  )
}
