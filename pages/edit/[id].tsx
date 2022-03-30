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
  const [textDivisions, setTextDivisions] = useState([""])

    useEffect(()=> {
      const getText = () => {
        const text: string = data.content
        setText(text)
        setTextDivisions(text.split(" "))
      }
  getText()}, [])

  // useEffect(()=>{
  //   const resetLocals = () =>{
  //     setText(textDivisions.join(" "))
  //     setTextDivisions(text.split(" "))
  //   }
  // resetLocals()}, [])

    const handleSave = ()=>{
      axios.put(`http://localhost:3000/api/doc/${id}`, {content:text})
    }
  return (
    <div className='bg-slate-50 m-0'>
        <Edit textDivisions={textDivisions} setTextDivisions={setTextDivisions} ></Edit>
        <button onClick={handleSave}>Save</button>
    </div>
  )
}
