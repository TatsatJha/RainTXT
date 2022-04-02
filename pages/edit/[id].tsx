import React, { useEffect, useState } from 'react'
import Edit from '../../Components/TextEditor'
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
  // const [textDivisions, setTextDivisions] = useState([""])
  // const [renderingDivisions, setRenderingDivisions] = useState(textDivisions)

    useEffect(()=> {
      const getText = () => {
        const text: string = data.content
        setText(text)
      }
  getText()}, [])

  // useEffect(()=>{
  //   const resetText = () =>{
  //     if(textDivisions!==undefined) {
  //       const text = textDivisions.join(" ")
  //       setText(text)
  //     }
  //   }
  // resetText()}, [textDivisions])

    const handleSave = ()=>{
      axios.put(`http://localhost:3000/api/doc/${id}`, {content:text})
    }
  return (
    <div className='bg-slate-50 m-0'>
        <Edit setText={setText} text={text}></Edit>
        <button onClick={handleSave}>Save</button>
    </div>
  )
}
