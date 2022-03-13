// import dynamic from 'next/dynamic'
// import "quill/dist/quill.snow.css"
// import {Slate, Editable, withReact} from "slate-react"

// const QuillNoSSRWrapper = dynamic(import('slate-react'), {	
// 	ssr: false,
// 	loading: () => <p>Loading ...</p>,
// 	})
// export default function Edit() {
    // return <QuillNoSSRWrapper  theme="snow" />
// }

import React, { useState } from 'react'

export default function Edit(props:any) {
    
    return (
    <div >  
        <input value= {props.text} onChange={(e)=>props.setText(e.target.value)} className='border-2 w-fit p-64' type="text"></input>
    </div>
  )
}
