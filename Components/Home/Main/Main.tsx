import React from 'react'
import NavBar from './NavBar'
import Docs from "./Docs"
import Dirs from "./Dirs"

export default function Main() {
  return (
    <div>
      <Docs></Docs>
      <Dirs></Dirs>
      <NavBar></NavBar>
    </div>
  )
}
