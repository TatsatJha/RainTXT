import React, { useState } from 'react'
import axios from "axios"
import {BsFileEarmarkPlus} from "react-icons/bs"

export default function CrtBtn(props:any) {

    const makeDoc = ()=>{
      axios.post("http://localhost:3000/api/doc", {title: "Untitled", content: "", dir:""})
      props.refresh()
    }
  return (
    <div className='flex p-6'>
        <BsFileEarmarkPlus size="28px" ></BsFileEarmarkPlus>
        <button className= "text-xl px-4" onClick={makeDoc}>New File</button>
    </div>
  )
}