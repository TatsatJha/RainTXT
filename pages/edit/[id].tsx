import React, { useEffect, useState } from 'react'
import TextEditor from '../../Components/Edit/TextEditor'
import Edit from '../../Components/Edit/Edit'
import { useRouter } from 'next/router'
import axios from 'axios'



export async function getServerSideProps({params}:any) {
  const existingText = await axios.get(`http://localhost:3000/api/doc/${params.id}}`)
  return{ props: { content: existingText} }
}

export default function editDoc({ content }: any) {
    const [text, setText] = useState("")

    useEffect(()=> {
      const getText = () => {
        setText(content)
      }
  getText()}, [])

    const handleSave = ()=>{
      // axios.put(`http://localhost:3000/api/doc/${id}`, {content:text})
    }
  return (
    <div className=''>
        <Edit setText= {setText} text= {text}></Edit>
        <button onClick={handleSave}>Save</button>
    </div>
  )
}
