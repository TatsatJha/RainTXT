import React from 'react'
import CrtDoc from '../Docs/CrtDoc'
import CrtDir from '../Dirs/CrtDir'

export default function NavBar(props:any) {

  return (
    <div className='absolute top-24 flex flex-col p-3 border-2 h-screen w-64'>
      <CrtDoc id = {props.id} refresh={props.refresh}></CrtDoc>
      <CrtDir id = {props.id}></CrtDir>
    </div>
  )
}
