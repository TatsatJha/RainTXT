import React from 'react'
import NavBar from './NavBar'
import Docs from "./Docs"
import Dirs from "./Dirs"

export default function Main(props:any) {
  return (
    <div>
      <Docs refresh={props.refresh} data={props.data}></Docs>
      <Dirs></Dirs>
      <NavBar refresh={props.refresh}></NavBar>
    </div>
  )
}
