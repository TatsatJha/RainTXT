import React from 'react'
import CrtDoc from '../Docs/CrtDoc'
import CrtDir from '../Dirs/CrtDir'

export default function NavBar(props:any) {

  return (
    <div className='absolute top-24 flex flex-col p-3 border-2 h-screen w-64'>
      <CrtDoc data={props.data} dirId = {props.dirId} refresh={props.refresh}></CrtDoc>
      <CrtDir id = {props.id} dirId = {props.dirId} refresh={props.refresh} ></CrtDir>
    </div>
  )
}
