import React from 'react'
import Link from "next/link"

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
    <Link href="/edit">
        <div className='p-4'>
            <h1 className='text-4xl font-bold '>{props.title}</h1>
            <h2>{props.date}</h2>
        </div> 
    </Link>
    </div>
  )
}
