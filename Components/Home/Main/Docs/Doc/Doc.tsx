import React, { useState } from 'react'
import Link from "next/link"
import DltDoc from '../DltDoc'
import EditDoc from "../EditDoc"
import DocTitle from "./DocTitle"



export default function doc(props: any) {
  const [deleted, setDeleted] = useState(false)

  if(deleted){
    return(<></>)
  }
  return (
    <div className="h-32  border-2 hover:-translate-y-2  duration-300 ease-in-out">
      
      <DocTitle refresh= {props.refresh} title={props.data.title} id={props.data._id}></DocTitle>
      
      <h2>{props.data.date}</h2>
      
      <div className='flex justify-between px-4'>
        <DltDoc setDeleted={setDeleted} refresh= {props.refresh} docCount={props.docCount} setDocCount={props.setDocCount} id = {props.data._id} ></DltDoc>
        <EditDoc id = {props.data._id} ></EditDoc>
      </div>

    </div>
  )
}
