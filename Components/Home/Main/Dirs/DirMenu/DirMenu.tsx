import axios from 'axios'
import React, { useState } from 'react'


const DltBtn = (props:any) =>{
    const deleteHandler = async ()=>{
        await axios.delete(`http://localhost:3000/api/dir/${props.id}`)
    }

    return(
        <div className='block'>
            <button className='px-4 py-2' onClick={deleteHandler}> Delete Folder </button>
        </div>
    )
}

export default function DirMenu(props:any) {

    if(props.open){
        return (
          <ul className='relative bg-slate-300 w-fit'>
              <li>
                <DltBtn></DltBtn>
              </li>
          </ul>
        )
    }
    else{
        return(<></>)
    }
}