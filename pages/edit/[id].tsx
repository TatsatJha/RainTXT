import React, { useEffect, useState } from 'react'
import TextEditor from '../../Components/Edit/TextEditor'
import Edit from '../../Components/Edit/Edit'
import { useRouter } from 'next/router'
import axios from 'axios'



export async function getServerSideProps({params}:any) {
  const res = await fetch(`http://localhost:3000/api/doc/${params.id}`)
  const data = await res.json()
  return{ props: { data} }
}

export default function editDoc({ data }: any) {
  const router = useRouter()
  const {id} = router.query
    const [text, setText] = useState("")

    useEffect(()=> {
      const getText = () => {
        setText(data.content)
      }
  getText()}, [])

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
