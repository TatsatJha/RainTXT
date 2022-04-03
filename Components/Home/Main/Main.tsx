import React, { useState } from 'react'
import NavBar from './NavBar'
import Docs from "./Docs"
import Dirs from "./Dirs"

export default function Main(props:any) {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <main>
        <Docs refresh={props.refresh} data={props.data}></Docs>
        <Dirs data = {props.dirData}></Dirs>
        <NavBar data = {props.data} id={props.dirId} refresh={props.refresh}></NavBar>
      </main>
    </div>
  )
}
