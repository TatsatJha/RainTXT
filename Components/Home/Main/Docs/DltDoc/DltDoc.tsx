import React, { useEffect, useState } from 'react'
import {BsTrash} from "react-icons/bs"
import axios from 'axios'

export default function DltDoc(props: any) {

    const handleDelete = async () =>{

        const doc = await axios.delete(`http://localhost:3000/api/doc/${props.id}`)
        console.log(props.dirId)

        if(props.dirId){
          
          const dirId = doc.data.dir
          const dir = await axios.get(`http://localhost:3000/api/dir/${dirId}`)
          const docs = dir.data.docs
          let newDocs:Array<any> = []

          docs.forEach((element:any) => {
            if(element._id !== props.id){
              newDocs.push(element)
            }
          });

          console.log(newDocs)

          
          await axios.patch(`http://localhost:3000/api/dir/${dirId}`, {docs: newDocs}) //update directory to remove doc object from array
        
        }
        props.setDeleted(true)

    }
    
  return (
    <>
      <button onClick={handleDelete}> <BsTrash size = "24px"></BsTrash></button>
    </>
  )
}
