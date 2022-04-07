import axios from 'axios'
import React, { useState } from 'react'


const DltBtn = (props:any) =>{
    const deleteHandler = async ()=>{
        await axios.delete(`http://localhost:3000/api/dir/${props.id}`)
    }

    return(
        <div>
            <button className='block' onClick={deleteHandler}> Delete Folder </button>
        </div>
    )
}
const AddDoc = (props:any) =>{
    const addHandler = () =>{
        axios.post(`http://localhost:3000/api/doc`, {})
    }

    return(
        <div>
            <button className='block' onClick={addHandler}> Add File </button>
        </div>
    )
}

export default function DirMenu(props:any) {

    if(props.open){
        return (
          <div className='flex align-center absolute bg-slate-300 w-64'>
              <AddDoc></AddDoc>
              <DltBtn></DltBtn>
          </div>
        )
    }
    else{
        return(<></>)
    }
}