import React from 'react'
import CrtBtn from '../../../Misc/CrtBtn'
import CrtDir from '../../../Misc/CrtDir'

export default function NavBar() {
  return (
    <div className='absolute top-24 flex flex-col p-3 border-2 h-screen w-64'>
      <CrtBtn></CrtBtn>
      <CrtDir></CrtDir>
    </div>
  )
}
