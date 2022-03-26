import React, { useEffect, useState } from 'react'
import {BsTrash} from "react-icons/bs"
import axios from 'axios'

export default function DltDoc(props: any) {
    const [deleted, setDeleted] = useState(false)
    const handleDelete = async () =>{
        await axios.delete(`http://localhost:3000/api/doc/${props.id}`)
        setDeleted(true)
        props.setRefresh(!props.refresh)
    }

    useEffect(() => {
    
      return () => {
        
      }
    }, [deleted])
    
  return (
    <>
        <button onClick={handleDelete}>
            <BsTrash size = "24px"></BsTrash>
        </button>
    </>
  )
}
