import React, { useState } from 'react'
import Link from "next/link"
import DltDoc from '../DltDoc'
import EditDoc from "../EditDoc"
import DocTitle from "./DocTitle"



export default function doc(props: any) {

// const [first, setfirst] = useState(second)
  return (
    <div className="h-32  border-2 hover:-translate-y-2  duration-300 ease-in-out">
      
      <DocTitle refresh= {props.refresh}  setRefresh =  {props.setRefresh} title={props.data.title} id={props.data._id}></DocTitle>
      
      <h2>{props.data.date}</h2>
      
      <div className='flex justify-between px-4'>
        <DltDoc refresh= {props.refresh}  setRefresh =  {props.setRefresh} id = {props.data._id} ></DltDoc>
        <EditDoc id = {props.data._id} ></EditDoc>
      
      </div>
    </div>
  )
}
