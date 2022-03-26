import React from 'react'
import NavBar from './NavBar'
import Docs from "./Docs"
import Dirs from "./Dirs"

export default function Main(props:any) {
  return (
    <div>
      <Docs data={props.data}></Docs>
      <Dirs></Dirs>
      <NavBar></NavBar>
    </div>
  )
}
