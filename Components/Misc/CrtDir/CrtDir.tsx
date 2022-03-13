import React from 'react'
import {BsFolderPlus} from "react-icons/bs"

export default function CrtDir() {
    const  makeDir = ()=>{

    }
  return (
    <div className='flex p-6'>
        <BsFolderPlus size="28px"></BsFolderPlus>
        <button className= "text-l px-4" onClick={makeDir}> New Workspace </button>
    </div>
  )
}
