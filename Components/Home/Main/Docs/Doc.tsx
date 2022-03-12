import React from 'react'

type docProp = {
    title: String,
    content: String,
    date: String,
    id: String,
    v: String
}


export default function doc(props: docProp) {
  return (
    <div>
        <div className='p-4 mx-28'>
            <h1 className='text-4xl p-5 font-bold '>{props.title}</h1>
            <h2>{props.date}</h2>
        </div> 
    </div>
  )
}
