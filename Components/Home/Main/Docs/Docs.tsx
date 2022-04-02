import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Doc from "./Doc"

export default function docs(props:any) {
    const [doc, setDocs] = useState<any[]>([])
        
    useEffect(()=> {
        const getDocs = async () => {
            setDocs(props.data)
        }
    getDocs()})
    
    return (
        <div className='grid grid-cols-4 gap-4 justify-evenly ml-64'>
            {doc.map((doc) => (<Doc data = {{...doc}}> </Doc>))}
        </div>
    )
}
