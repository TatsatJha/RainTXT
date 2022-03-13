import React from 'react'
import Link from "next/link"
import {BsFolder} from "react-icons/bs"

type docProp = {
    title: String,
    id: String,
    v: String
}


export default function Dir(props: docProp) {
  return (
    <div className="h-32  border-2 hover:-translate-y-2  duration-300 ease-in-out">
        <div className='p-4 flex justify-between'>
            <h1 className='text-4xl font-bold '>{props.title}</h1>
            <BsFolder size="36px"></BsFolder>
        </div> 
    </div>
  )
}