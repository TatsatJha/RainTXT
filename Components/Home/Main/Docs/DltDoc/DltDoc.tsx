import React from 'react'
import {BsTrash} from "react-icons/bs"
import axios from 'axios'

export default function DltDoc(props: any) {
    const handleDelete = async () =>{
        await axios.delete(`http://localhost:3000/api/doc/${props.id}`)
    }
  return (
    <>
        <button onClick={handleDelete}>
            <BsTrash size = "24px"></BsTrash>
        </button>
    </>
  )
}
