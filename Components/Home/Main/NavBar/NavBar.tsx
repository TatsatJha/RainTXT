import React from 'react'
import CrtBtn from '../Docs/CrtBtn'
import CrtDir from '../Dirs/CrtDir'

export default function NavBar() {
  return (
    <div className='absolute top-24 flex flex-col p-3 border-2 h-screen w-64'>
      <CrtBtn></CrtBtn>
      <CrtDir></CrtDir>
    </div>
  )
}
