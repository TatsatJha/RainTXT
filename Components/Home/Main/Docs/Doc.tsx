import React from 'react'
import Link from "next/link"
import {BsFileEarmark} from "react-icons/bs"
import DltDoc from './DltDoc'
import EditDoc from "./EditDoc"

type docProp = {
    title: String,
    content: String,
    date: String,
    id: String,
    v: String
}


export default function doc(props: docProp) {
  return (
    <div className="h-32  border-2 hover:-translate-y-2  duration-300 ease-in-out">
      <div className='flex justify-between p-4'>
        <h1 className='text-4xl font-bold '>{props.title}</h1>
        <BsFileEarmark size="36px"></BsFileEarmark>
      </div>
      <h2>{props.date}</h2>
      <div className='flex justify-between px-4'>
        <DltDoc id = {props.id} ></DltDoc>
        <EditDoc id = {props.id} ></EditDoc>
      </div>
    </div>
  )
}
