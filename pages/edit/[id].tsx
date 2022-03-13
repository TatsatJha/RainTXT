import React, { useState } from 'react'
import TextEditor from '../../Components/Edit/TextEditor'
import Edit from '../../Components/Edit/Edit'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function editDoc() {
    const router = useRouter()
    const { id } = router.query
    const [text, setText] = useState("")

    const handleSave = ()=>{
      axios.put(`http://localhost:3000/api/doc/${id}`, {content:text})
    }
  return (
    <div className=''>
        <Edit setText= {setText} text= {text}></Edit>
        <button onClick={handleSave}>Save</button>
    </div>
  )
}
