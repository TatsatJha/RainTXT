import React, { useEffect, useState } from 'react'
import TextEditor from '../../Components/Edit/TextEditor'
import Edit from '../../Components/Edit/Edit'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function editDoc() {
    const router = useRouter()
    const { id } = router.query
    const [text, setText] = useState("")


    useEffect(()=> {
      const getDocs = async () => {
          await axios.get(`http://localhost:3000/api/doc/${id}`).then((response) => {
              const existingText = response.data.content
              console.log(existingText)
              setText(existingText)
          })
      }
  getDocs()}, [])

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
