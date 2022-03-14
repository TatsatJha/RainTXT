import React from 'react'
import Link from "next/link"
import DltDoc from '../DltDoc'
import EditDoc from "../EditDoc"
import DocTitle from "./DocTitle"

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
      
      <DocTitle title={props.title} id={props.id}></DocTitle>
      
      <h2>{props.date}</h2>
      
      <div className='flex justify-between px-4'>
        <DltDoc id = {props.id} ></DltDoc>
        <EditDoc id = {props.id} ></EditDoc>
      
      </div>
    </div>
  )
}
