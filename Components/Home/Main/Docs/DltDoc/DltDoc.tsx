import React, { useEffect, useState } from 'react'
import {BsTrash} from "react-icons/bs"
import axios from 'axios'

export default function DltDoc(props: any) {
    const handleDelete = async () =>{
        await axios.delete(`http://localhost:3000/api/doc/${props.id}`)

        const dir = await axios.get(`http://localhost:3000/api/doc/${props.dirId}`)
        console.log(dir)

        // await axios.patch(`http://localhost:3000/api/doc/${props.dirId}`, {}) //update directory to remove doc object from array
        props.setDeleted(true)
    }
    
  return (
    <>
      <button onClick={handleDelete}> <BsTrash size = "24px"></BsTrash></button>
    </>
  )
}
