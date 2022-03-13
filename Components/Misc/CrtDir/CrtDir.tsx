import axios from 'axios'
import React from 'react'
import {BsFolderPlus} from "react-icons/bs"

export default function CrtDir() {
    const  makeDir = ()=>{
        axios.post("http://localhost:3000/api/dir", {title: "djlfkdjs", docs: ""})
    }
  return (
    <div className='flex p-6'>
        <BsFolderPlus size="28px"></BsFolderPlus>
        <button className= "text-l px-4" onClick={makeDir}> New Workspace </button>
    </div>
  )
}
