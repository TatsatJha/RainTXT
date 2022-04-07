import React, { useState } from 'react'
import NavBar from './NavBar'
import Docs from "./Docs"
import Dirs from "./Dirs"

export default function Main(props:any) {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <main>
        <Docs refresh={props.refresh} dirId={props.dirId} data={props.docData}></Docs>
        <Dirs data = {props.dirData}></Dirs>
        <NavBar data = {props.docData} dirId={props.dirId} refresh={props.refresh}></NavBar>
      </main>
    </div>
  )
}
