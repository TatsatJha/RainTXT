import React, { useState } from 'react'
import axios from "axios"
import {BsFileEarmarkPlus} from "react-icons/bs"
import Router, { useRouter } from 'next/router'

export default function CrtBtn(props:any) {
  // const dirId = props.id == null ? null : props.id.id

  const router = useRouter()
  const idQuery = router.query
  const id = idQuery.id
  console.log(id)
    const makeDoc = async ()=>{
      const res = await axios.post("http://localhost:3000/api/doc", {title: "Untitled", content: "", dir: id})
      props.refresh()
      console.log(res)
      if(id !== null){
        axios.patch(`http://localhost:3000/api/dir/${id}`, {docs: res.data})
      }
    }
  return (
    <div className='flex p-6'>
        <BsFileEarmarkPlus size="28px" ></BsFileEarmarkPlus>
        <button className= "text-xl px-4" onClick={makeDoc}>New File</button>
    </div>
  )
}
